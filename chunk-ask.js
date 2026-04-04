// ═══════════════════════════════════════════════════════════════════════════════
// CHUNK — THE MAESTER'S TOWER: ASOIAF AI Chat
// Primary: calls /api/ask (Vercel Edge Function — key server-side, no friction)
// Fallback: if endpoint not deployed, lets user supply their own API key.
// ═══════════════════════════════════════════════════════════════════════════════
(function(){

const SERVER_URL  = '/api/ask';
const DIRECT_URL  = 'https://api.anthropic.com/v1/messages';
const KEY_STORAGE = 'asoiaf_ask_key';

let conversationHistory = [];
let streaming           = false;
let serverAvailable     = null; // null = untested, true/false after first attempt

// ── Called when tab opens ────────────────────────────────────────────────────
window.askTabOpened = function(){
  const key = localStorage.getItem(KEY_STORAGE);
  showKeyPrompt(!serverAvailable && !key ? true : false);
  setTimeout(()=>{ const i=document.getElementById('ask-input'); if(i)i.focus(); }, 80);
};

function showKeyPrompt(show){
  const prompt = document.getElementById('ask-key-prompt');
  if(prompt) prompt.style.display = show ? 'flex' : 'none';
}

// ── Key save ─────────────────────────────────────────────────────────────────
window.askSaveKey = function(){
  const val = (document.getElementById('ask-key-input-field')||{}).value||'';
  const trimmed = val.trim();
  if(!trimmed.startsWith('sk-ant-')){
    const f = document.getElementById('ask-key-input-field');
    if(f){ f.style.borderColor='#c83030'; setTimeout(()=>f.style.borderColor='',1800); }
    return;
  }
  localStorage.setItem(KEY_STORAGE, trimmed);
  showKeyPrompt(false);
  document.getElementById('ask-input').focus();
};

window.askForgetKey = function(){
  localStorage.removeItem(KEY_STORAGE);
  serverAvailable = false;
  showKeyPrompt(true);
};

// ── New conversation ─────────────────────────────────────────────────────────
window.askNewChat = function(){
  conversationHistory = [];
  const msgs = document.getElementById('ask-messages');
  if(!msgs) return;
  msgs.innerHTML = '';
  msgs.appendChild(buildSuggestions());
  showKeyPrompt(false);
};

// ── Suggestion clicked ────────────────────────────────────────────────────────
window.askSuggest = function(btn){
  document.getElementById('ask-input').value = btn.textContent;
  askSend();
};

window.askKeydown = function(e){
  if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); askSend(); }
};

window.askAutoResize = function(el){
  el.style.height='auto';
  el.style.height=Math.min(el.scrollHeight,140)+'px';
};

// ── Send ─────────────────────────────────────────────────────────────────────
window.askSend = async function(){
  if(streaming) return;
  const input = document.getElementById('ask-input');
  const text  = (input.value||'').trim();
  if(!text) return;

  // Remove suggestions and key prompt if visible
  const sugs = document.getElementById('ask-suggestions');
  if(sugs) sugs.remove();
  showKeyPrompt(false);

  conversationHistory.push({ role:'user', content:text });
  appendMessage('user', text);
  input.value='';
  input.style.height='auto';

  streaming = true;
  const sendBtn = document.getElementById('ask-send-btn');
  if(sendBtn) sendBtn.disabled=true;

  const { bubble, cursor } = appendStreamingBubble();

  try {
    let fullText = '';

    if(serverAvailable !== false){
      // ── Try server-side endpoint first ──────────────────────────────────
      const resp = await fetch(SERVER_URL, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ messages: conversationHistory }),
      });

      if(resp.ok && resp.headers.get('content-type')||''.includes('event-stream')){
        serverAvailable = true;
        fullText = await streamSSE(resp, bubble, cursor);
      } else if(resp.status === 404 || resp.status === 501 || resp.status === 405){
        // Endpoint not deployed — fall through to direct API
        serverAvailable = false;
      } else {
        // Some other server error
        serverAvailable = false;
        const txt = await resp.text().catch(()=>'');
        let msg = `Server error ${resp.status}`;
        try{ msg = JSON.parse(txt)?.error?.message || msg; }catch(_){}
        throw new Error(msg);
      }
    }

    if(serverAvailable === false && !fullText){
      // ── Fall back to direct Anthropic API with user key ──────────────────
      const key = localStorage.getItem(KEY_STORAGE);
      if(!key){
        cursor.remove();
        bubble.innerHTML = notDeployedMessage();
        conversationHistory.pop();
        streaming=false;
        if(sendBtn) sendBtn.disabled=false;
        showKeyPrompt(true);
        return;
      }

      const resp2 = await fetch(DIRECT_URL, {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'x-api-key': key,
          'anthropic-version':'2023-06-01',
          'anthropic-dangerous-direct-browser-access':'true',
        },
        body: JSON.stringify({
          model:'claude-haiku-4-5-20251001',
          max_tokens:1200,
          stream:true,
          system: SYSTEM_PROMPT,
          messages: conversationHistory,
        }),
      });

      if(!resp2.ok){
        const errTxt = await resp2.text().catch(()=>'');
        let msg = `API error ${resp2.status}`;
        try{ msg = JSON.parse(errTxt)?.error?.message || msg; }catch(_){}
        if(resp2.status===401){ localStorage.removeItem(KEY_STORAGE); showKeyPrompt(true); }
        throw new Error(msg);
      }

      fullText = await streamSSE(resp2, bubble, cursor);
    }

    cursor.remove();
    conversationHistory.push({ role:'assistant', content:fullText });

  } catch(err){
    cursor.remove();
    bubble.innerHTML = `<span style="color:#c83030">⚠ ${escHtml(err.message)}</span>`;
    conversationHistory.pop();
  }

  streaming=false;
  if(sendBtn) sendBtn.disabled=false;
  document.getElementById('ask-input')?.focus();
};

// ── SSE stream reader ─────────────────────────────────────────────────────────
async function streamSSE(resp, bubble, cursor){
  const reader  = resp.body.getReader();
  const decoder = new TextDecoder();
  let fullText  = '';
  let buffer    = '';

  while(true){
    const { done, value } = await reader.read();
    if(done) break;
    buffer += decoder.decode(value,{stream:true});
    const lines = buffer.split('\n');
    buffer = lines.pop();
    for(const line of lines){
      if(!line.startsWith('data: ')) continue;
      const raw = line.slice(6).trim();
      if(raw==='[DONE]') break;
      try{
        const ev = JSON.parse(raw);
        if(ev.type==='content_block_delta' && ev.delta?.type==='text_delta'){
          fullText += ev.delta.text;
          renderMarkdown(bubble, fullText, cursor);
          scrollToBottom();
        }
      }catch(_){}
    }
  }
  return fullText;
}

// ── DOM helpers ───────────────────────────────────────────────────────────────
function appendMessage(role, text){
  const msgs = document.getElementById('ask-messages');
  const wrap = document.createElement('div');
  wrap.className=`ask-msg ${role}`;
  const av=document.createElement('div'); av.className='ask-avatar';
  av.textContent = role==='user'?'⚔':'📜';
  const bubble=document.createElement('div'); bubble.className='ask-bubble';
  if(role==='user') bubble.textContent=text;
  else renderMarkdown(bubble,text,null);
  wrap.appendChild(av); wrap.appendChild(bubble);
  msgs.appendChild(wrap); scrollToBottom();
  return bubble;
}

function appendStreamingBubble(){
  const msgs=document.getElementById('ask-messages');
  const wrap=document.createElement('div'); wrap.className='ask-msg assistant';
  const av=document.createElement('div'); av.className='ask-avatar'; av.textContent='📜';
  const bubble=document.createElement('div'); bubble.className='ask-bubble';
  const cursor=document.createElement('span'); cursor.className='ask-cursor';
  bubble.appendChild(cursor);
  wrap.appendChild(av); wrap.appendChild(bubble);
  msgs.appendChild(wrap); scrollToBottom();
  return {bubble,cursor};
}

function scrollToBottom(){
  const msgs=document.getElementById('ask-messages');
  if(msgs) msgs.scrollTop=msgs.scrollHeight;
}

function notDeployedMessage(){
  return `<span style="color:#8b6914">The Maester's Tower needs a Vercel deployment to work without an API key.<br>
  <span style="font-size:.9em;color:#5a3a10">Enter your own Anthropic API key below, or deploy to Vercel with your key to make it free for all visitors.</span></span>`;
}

function buildSuggestions(){
  const div=document.createElement('div'); div.id='ask-suggestions';
  div.innerHTML=`
    <div class="ask-sug-title">QUESTIONS TO BEGIN WITH</div>
    <div id="ask-sug-grid">
      <button class="ask-sug" onclick="askSuggest(this)">Is R+L=J actually confirmed in the books?</button>
      <button class="ask-sug" onclick="askSuggest(this)">Who is the Hooded Man in Winterfell?</button>
      <button class="ask-sug" onclick="askSuggest(this)">What is the Azor Ahai prophecy and who fulfils it?</button>
      <button class="ask-sug" onclick="askSuggest(this)">Explain the history of the Targaryens before the conquest</button>
      <button class="ask-sug" onclick="askSuggest(this)">What are Euron Greyjoy's true powers and goals?</button>
      <button class="ask-sug" onclick="askSuggest(this)">What happened during the Dance of Dragons?</button>
      <button class="ask-sug" onclick="askSuggest(this)">Is Aegon (Young Griff) real or a Blackfyre pretender?</button>
      <button class="ask-sug" onclick="askSuggest(this)">Who are the Others and what do they want?</button>
    </div>`;
  return div;
}

// ── Lightweight markdown ──────────────────────────────────────────────────────
function renderMarkdown(el,md,cursor){
  let html=escHtml(md)
    .replace(/^### (.+)$/gm,'<h3>$1</h3>')
    .replace(/^## (.+)$/gm,'<h2>$1</h2>')
    .replace(/^# (.+)$/gm,'<h1>$1</h1>')
    .replace(/\*\*\*(.+?)\*\*\*/g,'<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
    .replace(/\*(.+?)\*/g,'<em>$1</em>')
    .replace(/`([^`]+)`/g,'<code>$1</code>')
    .replace(/^---$/gm,'<hr>')
    .replace(/^\s*[-*] (.+)$/gm,'<li>$1</li>')
    .replace(/^\s*\d+\. (.+)$/gm,'<li>$1</li>')
    .replace(/\n\n/g,'</p><p>')
    .replace(/\n/g,'<br>');
  html=html.replace(/(<li>.*?<\/li>)+/gs,m=>`<ul>${m}</ul>`);
  el.innerHTML=`<p>${html}</p>`;
  if(cursor) el.appendChild(cursor);
}

function escHtml(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ── Compact system prompt (also used for direct API fallback) ─────────────────
const SYSTEM_PROMPT=`You are a master maester and lore scholar of A Song of Ice and Fire by George R.R. Martin. You have encyclopedic knowledge of all five published novels (AGoT, ACoK, ASoS, AFfC, ADwD), The World of Ice and Fire, Fire & Blood, the Dunk & Egg tales, and published Winds of Winter sample chapters.

Discuss characters, history, geography, magic, houses, and all major theories (R+L=J, Azor Ahai/TPTWP, the Hooded Man, Euron's sorcery, Young Griff's heritage, the Others, CLEGANEBOWL, etc.). Distinguish canon from theory. Be enthusiastic, treat the user as a fellow fan, use markdown for clarity. No spoiler warnings needed — this audience has read everything.`;

})();
