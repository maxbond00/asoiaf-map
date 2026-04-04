// ═══════════════════════════════════════════════════════════════════════════════
// CHUNK — THE MAESTER'S TOWER: ASOIAF AI Chat via Anthropic API
// User supplies their own API key → stored in localStorage → direct browser calls
// ═══════════════════════════════════════════════════════════════════════════════
(function(){

const STORAGE_KEY = 'asoiaf_ask_key';
const MODEL       = 'claude-opus-4-6';
const MAX_TOKENS  = 1500;

const SYSTEM_PROMPT = `You are a master maester and lore scholar of the world of A Song of Ice and Fire — the complete book series by George R.R. Martin. You have encyclopedic knowledge of the books, not the TV show (though you can discuss the show if asked).

Your knowledge covers:
- All five published novels: A Game of Thrones (AGoT), A Clash of Kings (ACoK), A Storm of Swords (ASoS), A Feast for Crows (AFfC), A Dance with Dragons (ADwD)
- The World of Ice and Fire (the companion lore book)
- Fire & Blood (the Targaryen history)
- The Tales of Dunk and Egg (The Hedge Knight, The Sworn Sword, The Mystery Knight, The Princess and the Queen, The Rogue Prince)
- Published sample chapters from The Winds of Winter
- Semi-canon sources: GRRM's blog posts, convention Q&As, SSM (So Spake Martin)

You can expertly discuss:
- Characters, motivations, arcs, deaths, and unreliable narrators
- Major fan theories: R+L=J (strongly implied in books, confirmed in show), the identity of the Hooded Man in Winterfell (likely Theon's uncle Harwin or Mance), Azor Ahai / The Prince That Was Promised (Jon, Dany, or both), Sarella Sand = Alleras the Sphinx, the truth of Aegon VI's heritage, Euron's glass candle and Valyrian sorcery, Bolt-on theories, the true nature of the Others, CLEGANEBOWL
- History: The Long Night, The Age of Heroes, the Andal Invasion, the Doom of Valyria, Aegon's Conquest, the Dance of the Dragons, the Blackfyre Rebellions, Robert's Rebellion, the War of the Five Kings
- Geography: all of Westeros, the Free Cities, Slaver's Bay / Bay of Dragons, the Dothraki Sea, Sothoryos, Ulthos, Yi Ti, Asshai and the Shadow
- Magic: greenseeing, skinchanging/warging, glamours, glass candles, the Many-Faced God, R'hllor and fire magic, Valyrian sorcery, the Faceless Men, dragon-binding
- Houses: words, sigils, history, key members, allegiances and betrayals
- Political intrigue: the game of thrones at every level

Tone: Enthusiastic, scholarly, treat the user as a fellow fan and equal. Distinguish clearly between established canon, strongly implied fact, and outright theory. Keep responses focused and readable — use markdown headers and bullets when they help clarity. Do not pad with unnecessary caveats. This site covers all five books so don't shy away from spoilers.`;

// ── State ────────────────────────────────────────────────────────────────────
let conversationHistory = [];
let streaming = false;

// ── Init: called when tab is opened ─────────────────────────────────────────
window.askTabOpened = function(){
  const key = localStorage.getItem(STORAGE_KEY);
  const gate = document.getElementById('ask-key-gate');
  const chat = document.getElementById('ask-chat');
  if(key){
    gate.style.display = 'none';
    chat.style.display = 'flex';
  } else {
    gate.style.display = 'flex';
    chat.style.display = 'none';
  }
};

// ── Save API key ─────────────────────────────────────────────────────────────
window.askSaveKey = function(){
  const val = document.getElementById('ask-key-input').value.trim();
  if(!val.startsWith('sk-ant-')){
    const input = document.getElementById('ask-key-input');
    input.style.borderColor = '#c83030';
    input.placeholder = 'Must start with sk-ant-…';
    setTimeout(()=>{ input.style.borderColor=''; input.placeholder='sk-ant-api03-…'; }, 2000);
    return;
  }
  localStorage.setItem(STORAGE_KEY, val);
  window.askTabOpened();
};

// ── Forget API key ───────────────────────────────────────────────────────────
window.askForgetKey = function(){
  if(!confirm('Remove your saved API key?')) return;
  localStorage.removeItem(STORAGE_KEY);
  document.getElementById('ask-key-input').value = '';
  window.askTabOpened();
};

// ── New chat ─────────────────────────────────────────────────────────────────
window.askNewChat = function(){
  conversationHistory = [];
  const msgs = document.getElementById('ask-messages');
  msgs.innerHTML = '';
  msgs.appendChild(buildSuggestions());
};

// ── Suggested question clicked ───────────────────────────────────────────────
window.askSuggest = function(btn){
  const text = btn.textContent;
  document.getElementById('ask-input').value = text;
  askSend();
};

// ── Keyboard: Enter sends, Shift+Enter newline ────────────────────────────────
window.askKeydown = function(e){
  if(e.key === 'Enter' && !e.shiftKey){
    e.preventDefault();
    askSend();
  }
};

// ── Auto-resize textarea ─────────────────────────────────────────────────────
window.askAutoResize = function(el){
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 140) + 'px';
};

// ── Send message ─────────────────────────────────────────────────────────────
window.askSend = async function(){
  if(streaming) return;
  const input = document.getElementById('ask-input');
  const text  = input.value.trim();
  if(!text) return;

  const key = localStorage.getItem(STORAGE_KEY);
  if(!key){ window.askTabOpened(); return; }

  // Remove suggestions if still visible
  const sugs = document.getElementById('ask-suggestions');
  if(sugs) sugs.remove();

  // Append user message
  conversationHistory.push({ role: 'user', content: text });
  appendMessage('user', text);
  input.value = '';
  input.style.height = 'auto';

  // Lock UI
  streaming = true;
  document.getElementById('ask-send-btn').disabled = true;

  // Create assistant message bubble with cursor
  const { bubble, cursor } = appendStreamingBubble();

  try {
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        stream: true,
        system: SYSTEM_PROMPT,
        messages: conversationHistory,
      }),
    });

    if(!resp.ok){
      const err = await resp.json().catch(()=>({error:{message:resp.statusText}}));
      throw new Error(err?.error?.message || `HTTP ${resp.status}`);
    }

    // Stream SSE
    const reader  = resp.body.getReader();
    const decoder = new TextDecoder();
    let fullText  = '';
    let buffer    = '';

    while(true){
      const { done, value } = await reader.read();
      if(done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop(); // keep incomplete line
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
    if(err.message.includes('401') || err.message.includes('invalid') || err.message.includes('key')){
      setTimeout(()=>{ window.askForgetKey(); }, 1500);
    }
    // Remove the failed assistant message from history
    conversationHistory.pop();
  }

  streaming = false;
  document.getElementById('ask-send-btn').disabled = false;
  document.getElementById('ask-input').focus();
};

// ── DOM helpers ──────────────────────────────────────────────────────────────
function appendMessage(role, text){
  const msgs = document.getElementById('ask-messages');
  const wrap = document.createElement('div');
  wrap.className = `ask-msg ${role}`;
  const avatar = document.createElement('div');
  avatar.className = 'ask-avatar';
  avatar.textContent = role === 'user' ? '⚔' : '📜';
  const bubble = document.createElement('div');
  bubble.className = 'ask-bubble';
  if(role === 'user'){
    bubble.textContent = text;
  } else {
    renderMarkdown(bubble, text, null);
  }
  wrap.appendChild(avatar);
  wrap.appendChild(bubble);
  msgs.appendChild(wrap);
  scrollToBottom();
  return bubble;
}

function appendStreamingBubble(){
  const msgs = document.getElementById('ask-messages');
  const wrap = document.createElement('div');
  wrap.className = 'ask-msg assistant';
  const avatar = document.createElement('div');
  avatar.className = 'ask-avatar';
  avatar.textContent = '📜';
  const bubble = document.createElement('div');
  bubble.className = 'ask-bubble';
  const cursor = document.createElement('span');
  cursor.className = 'ask-cursor';
  bubble.appendChild(cursor);
  wrap.appendChild(avatar);
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
      <button class="ask-sug" onclick="askSuggest(this)">Is Aegon Targaryen (Young Griff) real or a Blackfyre pretender?</button>
      <button class="ask-sug" onclick="askSuggest(this)">Who are the Others and what do they want?</button>
    </div>`;
  return div;
}

// ── Markdown renderer (lightweight, no external deps) ────────────────────────
function renderMarkdown(el, md, cursor){
  // Process block-level elements
  let html = escHtml(md)
    // Headers
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    // Bold / italic
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // HR
    .replace(/^---$/gm, '<hr>')
    // Bullet lists (simple)
    .replace(/^\s*[-*] (.+)$/gm, '<li>$1</li>')
    // Numbered lists
    .replace(/^\s*\d+\. (.+)$/gm, '<li>$1</li>')
    // Paragraphs: double newline
    .replace(/\n\n/g, '</p><p>')
    // Single newline
    .replace(/\n/g, '<br>');

  // Wrap consecutive <li> in <ul>
  html = html.replace(/(<li>.*?<\/li>)+/gs, m => `<ul>${m}</ul>`);
  html = `<p>${html}</p>`;

  el.innerHTML = html;
  if(cursor) el.appendChild(cursor);
}

function escHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// Allow Enter on key input
document.addEventListener('DOMContentLoaded', ()=>{
  const ki = document.getElementById('ask-key-input');
  if(ki) ki.addEventListener('keydown', e=>{ if(e.key==='Enter') window.askSaveKey(); });
});

})();
