// ═══════════════════════════════════════════════════════════════════════════════
// CHUNK — THE MAESTER'S TOWER: ASOIAF AI Chat
// Calls /api/ask (Vercel Edge Function) — no API key needed from the user.
// ═══════════════════════════════════════════════════════════════════════════════
(function(){

const API_URL = '/api/ask';

// ── State ────────────────────────────────────────────────────────────────────
let conversationHistory = [];
let streaming = false;

// ── Called when tab is opened ────────────────────────────────────────────────
window.askTabOpened = function(){
  // Nothing to gate — just focus the input
  const inp = document.getElementById('ask-input');
  if(inp) setTimeout(()=> inp.focus(), 60);
};

// ── New conversation ─────────────────────────────────────────────────────────
window.askNewChat = function(){
  conversationHistory = [];
  const msgs = document.getElementById('ask-messages');
  if(!msgs) return;
  msgs.innerHTML = '';
  msgs.appendChild(buildSuggestions());
};

// ── Suggested question clicked ───────────────────────────────────────────────
window.askSuggest = function(btn){
  document.getElementById('ask-input').value = btn.textContent;
  askSend();
};

// ── Keyboard handler ─────────────────────────────────────────────────────────
window.askKeydown = function(e){
  if(e.key === 'Enter' && !e.shiftKey){ e.preventDefault(); askSend(); }
};

// ── Auto-resize textarea ─────────────────────────────────────────────────────
window.askAutoResize = function(el){
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 140) + 'px';
};

// ── Send ─────────────────────────────────────────────────────────────────────
window.askSend = async function(){
  if(streaming) return;
  const input = document.getElementById('ask-input');
  const text  = (input.value || '').trim();
  if(!text) return;

  // Remove suggestions if still showing
  const sugs = document.getElementById('ask-suggestions');
  if(sugs) sugs.remove();

  conversationHistory.push({ role: 'user', content: text });
  appendMessage('user', text);
  input.value = '';
  input.style.height = 'auto';

  streaming = true;
  const sendBtn = document.getElementById('ask-send-btn');
  if(sendBtn) sendBtn.disabled = true;

  const { bubble, cursor } = appendStreamingBubble();

  try {
    const resp = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: conversationHistory }),
    });

    if(!resp.ok){
      const err = await resp.json().catch(()=>({ error:{ message: `HTTP ${resp.status}` } }));
      throw new Error(err?.error?.message || `HTTP ${resp.status}`);
    }

    const reader  = resp.body.getReader();
    const decoder = new TextDecoder();
    let fullText = '';
    let buffer   = '';

    while(true){
      const { done, value } = await reader.read();
      if(done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop();
      for(const line of lines){
        if(!line.startsWith('data: ')) continue;
        const raw = line.slice(6).trim();
        if(raw === '[DONE]') break;
        try{
          const ev = JSON.parse(raw);
          if(ev.type === 'content_block_delta' && ev.delta?.type === 'text_delta'){
            fullText += ev.delta.text;
            renderMarkdown(bubble, fullText, cursor);
            scrollToBottom();
          }
        } catch(_){}
      }
    }

    cursor.remove();
    conversationHistory.push({ role: 'assistant', content: fullText });

  } catch(err){
    cursor.remove();
    bubble.innerHTML = `<span style="color:#c83030">⚠ ${escHtml(err.message)}</span>`;
    conversationHistory.pop();
  }

  streaming = false;
  if(sendBtn) sendBtn.disabled = false;
  document.getElementById('ask-input').focus();
};

// ── DOM helpers ──────────────────────────────────────────────────────────────
function appendMessage(role, text){
  const msgs = document.getElementById('ask-messages');
  const wrap = document.createElement('div');
  wrap.className = `ask-msg ${role}`;
  const av = document.createElement('div');
  av.className = 'ask-avatar';
  av.textContent = role === 'user' ? '⚔' : '📜';
  const bubble = document.createElement('div');
  bubble.className = 'ask-bubble';
  if(role === 'user') bubble.textContent = text;
  else renderMarkdown(bubble, text, null);
  wrap.appendChild(av);
  wrap.appendChild(bubble);
  msgs.appendChild(wrap);
  scrollToBottom();
  return bubble;
}

function appendStreamingBubble(){
  const msgs = document.getElementById('ask-messages');
  const wrap = document.createElement('div');
  wrap.className = 'ask-msg assistant';
  const av = document.createElement('div');
  av.className = 'ask-avatar';
  av.textContent = '📜';
  const bubble = document.createElement('div');
  bubble.className = 'ask-bubble';
  const cursor = document.createElement('span');
  cursor.className = 'ask-cursor';
  bubble.appendChild(cursor);
  wrap.appendChild(av);
  wrap.appendChild(bubble);
  msgs.appendChild(wrap);
  scrollToBottom();
  return { bubble, cursor };
}

function scrollToBottom(){
  const msgs = document.getElementById('ask-messages');
  if(msgs) msgs.scrollTop = msgs.scrollHeight;
}

function buildSuggestions(){
  const div = document.createElement('div');
  div.id = 'ask-suggestions';
  div.innerHTML = `
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

// ── Lightweight markdown renderer ─────────────────────────────────────────────
function renderMarkdown(el, md, cursor){
  let html = escHtml(md)
    .replace(/^### (.+)$/gm,  '<h3>$1</h3>')
    .replace(/^## (.+)$/gm,   '<h2>$1</h2>')
    .replace(/^# (.+)$/gm,    '<h1>$1</h1>')
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g,     '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g,         '<em>$1</em>')
    .replace(/`([^`]+)`/g,         '<code>$1</code>')
    .replace(/^---$/gm,            '<hr>')
    .replace(/^\s*[-*] (.+)$/gm,   '<li>$1</li>')
    .replace(/^\s*\d+\. (.+)$/gm,  '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g,   '<br>');
  html = html.replace(/(<li>.*?<\/li>)+/gs, m => `<ul>${m}</ul>`);
  el.innerHTML = `<p>${html}</p>`;
  if(cursor) el.appendChild(cursor);
}

function escHtml(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

})();
