// ═══════════════════════════════════════════════════════════════════════════
// CHUNK — FAN THEORY TRIBUNAL
// 55 popular ASOIAF theories. Click to read + vote. Sorted by fan consensus.
// Votes stored in localStorage per-browser. Seeds represent fandom baseline.
// ═══════════════════════════════════════════════════════════════════════════
(function(){
  'use strict';

  // Verdicts — 'mystery' score is neutral (3) and excluded from likelihood sort
  const VERDICTS = ['canon','likely','unsure','unlikely','noway','mystery'];
  const VL = {
    canon:   '⚜ CANON',
    likely:  '✔ LIKELY',
    unsure:  '⚖ UNSURE',
    unlikely:'✘ UNLIKELY',
    noway:   '💀 NO WAY',
    mystery: '🌫 WILL NEVER KNOW',
  };
  const VC = {
    canon:   '#c8a820',
    likely:  '#4a8a30',
    unsure:  '#7a6a20',
    unlikely:'#8a3020',
    noway:   '#5a1808',
    mystery: '#6a5a9a',
  };
  // 'mystery' doesn't affect likelihood score — only canon→noway verdicts do
  const SCORE_VERDICTS = ['canon','likely','unsure','unlikely','noway'];
  const VS = { canon:5, likely:4, unsure:3, unlikely:2, noway:1 };

  const VOTES_KEY = 'asoiaf_theory_votes_v1'; // same key — mystery just adds a new value

  let _activeFilter = 'All';

  function getUserVotes(){ try{ return JSON.parse(localStorage.getItem(VOTES_KEY)||'{}'); }catch(_){ return {}; } }
  function saveUserVotes(v){ localStorage.setItem(VOTES_KEY, JSON.stringify(v)); }

  function getTotals(th){
    const uv = getUserVotes();
    const uVote = uv[th.id];
    const t = { ...th.seeds };
    if(uVote) t[uVote] = (t[uVote]||0) + 1;
    return t;
  }

  function getScore(th){
    const t = getTotals(th);
    let sum = 0, count = 0;
    // Mystery votes intentionally excluded — they're a meta-verdict not a likelihood judgment
    SCORE_VERDICTS.forEach(v=>{ sum += VS[v]*(t[v]||0); count += (t[v]||0); });
    return count ? sum/count : 3;
  }

  function sorted(){
    const list = _activeFilter === 'All'
      ? [...THEORIES]
      : THEORIES.filter(t => t.category === _activeFilter);
    return list.sort((a,b) => getScore(b) - getScore(a));
  }

  function consensusLabel(score){
    if(score >= 4.5) return { label:'⚜ CANON TIER',       color: VC.canon    };
    if(score >= 3.8) return { label:'✔ WIDELY BELIEVED',  color: VC.likely   };
    if(score >= 3.2) return { label:'⚖ DEBATED',          color: VC.unsure   };
    if(score >= 2.5) return { label:'✘ SKEPTICAL',         color: VC.unlikely };
    return                   { label:'💀 MOSTLY DEBUNKED', color: VC.noway    };
  }

  // ── Main render ──────────────────────────────────────────────────────────
  window.renderTheoriesTab = function(){
    const tab = document.getElementById('tab-theories');
    if(!tab || tab.dataset.rendered) return;
    tab.dataset.rendered = '1';
    injectStyles();
    tab.innerHTML = buildTabHTML();
    buildModal();
    document.addEventListener('keydown', e => { if(e.key==='Escape') window._closeTheory(); });
  };

  function getCategories(){
    const cats = [...new Set(THEORIES.map(t=>t.category))];
    return ['All', ...cats];
  }

  function buildTabHTML(){
    const uv = getUserVotes();
    const voted = Object.keys(uv).length;
    const pct = Math.round(voted / THEORIES.length * 100);
    const cats = getCategories();
    const filterPills = cats.map(c =>
      `<button class="t-filter${c===_activeFilter?' active':''}" onclick="window._filterTheories('${c}')">${c}</button>`
    ).join('');

    return `
      <div id="theories-header">
        <div id="theories-title-row">
          <div id="theories-title">⚗ THE FAN THEORY TRIBUNAL</div>
          <div id="theories-progress-wrap" title="${voted} of ${THEORIES.length} voted">
            <div id="theories-progress-bar" style="width:${pct}%"></div>
            <span id="theories-progress-label">${voted}/${THEORIES.length} voted</span>
          </div>
        </div>
        <div id="theories-subtitle">Click any card to read and cast your verdict — sorted by fan consensus</div>
        <div id="theories-legend">${VERDICTS.map(v=>`<span class="tleg" style="border-color:${VC[v]};color:${VC[v]}">${VL[v]}</span>`).join('')}</div>
        <div id="theories-filters">${filterPills}</div>
      </div>
      ${buildGRRMWatch()}
      <div id="theories-grid">${sorted().map((th,i) => cardHTML(th, i+1)).join('')}</div>
    `;
  }

  window._filterTheories = function(cat){
    _activeFilter = cat;
    document.querySelectorAll('.t-filter').forEach(b => b.classList.toggle('active', b.textContent===cat));
    refreshGrid();
  };

  function cardHTML(th, rank){
    const uv = getUserVotes();
    const uVote = uv[th.id];
    const t = getTotals(th);
    const allVerdicts = VERDICTS;
    const total = allVerdicts.reduce((s,v)=>s+(t[v]||0), 0);
    const score = getScore(th);
    const con = consensusLabel(score);
    const bar = allVerdicts.map(v=>{
      const pct = total ? Math.round((t[v]||0)/total*100) : Math.round(100/allVerdicts.length);
      return pct > 0 ? `<div class="tc-seg" style="width:${pct}%;background:${VC[v]}" title="${VL[v]}: ${t[v]||0}"></div>` : '';
    }).join('');
    const badge = uVote
      ? `<span class="tc-badge" style="border-color:${VC[uVote]};color:${VC[uVote]}">${VL[uVote]}</span>`
      : `<span class="tc-unvoted">VOTE</span>`;
    return `<div class="theory-card${uVote?' voted':''}" onclick="window._openTheory('${th.id}')">
      <div class="tc-top">
        <span class="tc-cat">${th.category}</span>
        <span class="tc-rank">#${rank}</span>
      </div>
      <div class="tc-name">${th.name}</div>
      <div class="tc-con" style="color:${con.color}">${con.label}</div>
      <div class="tc-bar">${bar}</div>
      <div class="tc-bottom">
        <span class="tc-count">${total.toLocaleString()} votes</span>
        ${badge}
      </div>
    </div>`;
  }

  function refreshGrid(){
    const grid = document.getElementById('theories-grid');
    if(grid) grid.innerHTML = sorted().map((th,i)=>cardHTML(th,i+1)).join('');
    // Update progress
    const uv = getUserVotes();
    const voted = Object.keys(uv).length;
    const pct = Math.round(voted / THEORIES.length * 100);
    const bar = document.getElementById('theories-progress-bar');
    const lbl = document.getElementById('theories-progress-label');
    if(bar) bar.style.width = pct + '%';
    if(lbl) lbl.textContent = `${voted}/${THEORIES.length} voted`;
  }

  // ── Modal ────────────────────────────────────────────────────────────────
  let _modalId = null;

  function buildModal(){
    if(document.getElementById('theory-modal')) return;
    const m = document.createElement('div');
    m.id = 'theory-modal';
    m.onclick = e => { if(e.target === m) window._closeTheory(); };
    m.innerHTML = `
      <div id="tm-box">
        <button id="tm-close" onclick="window._closeTheory()" title="Close (Esc)">✕</button>
        <div id="tm-cat"></div>
        <div id="tm-title"></div>
        <div id="tm-blurb"></div>
        <div id="tm-vote-label">CAST YOUR VERDICT:</div>
        <div id="tm-btns">
          ${VERDICTS.map(v=>`<button class="tm-btn" data-v="${v}" onclick="window._castVote('${v}')" style="--vc:${VC[v]}">${VL[v]}</button>`).join('')}
        </div>
        <div id="tm-tally-head">CURRENT TALLY</div>
        <div id="tm-tally"></div>
        <div id="tm-nav">
          <button class="tm-nav-btn" onclick="window._navTheory(-1)">◀ PREV</button>
          <button class="tm-nav-btn" onclick="window._navTheory(1)">NEXT ▶</button>
        </div>
      </div>`;
    document.body.appendChild(m);
  }

  window._openTheory = function(id){
    const th = THEORIES.find(t=>t.id===id);
    if(!th) return;
    _modalId = id;
    _populateModal(th);
    const m = document.getElementById('theory-modal');
    m.style.display = 'flex';
    requestAnimationFrame(()=> m.classList.add('open'));
  };

  function _populateModal(th){
    document.getElementById('tm-cat').textContent  = th.category;
    document.getElementById('tm-title').textContent = th.name;
    document.getElementById('tm-blurb').textContent = th.blurb;
    refreshModal(th);
  }

  window._closeTheory = function(){
    const m = document.getElementById('theory-modal');
    if(!m || m.style.display==='none') return;
    m.classList.remove('open');
    setTimeout(()=>{ m.style.display='none'; }, 200);
  };

  window._navTheory = function(dir){
    const list = sorted();
    const idx  = list.findIndex(t=>t.id===_modalId);
    const next = list[(idx + dir + list.length) % list.length];
    _modalId = next.id;
    // Animate box
    const box = document.getElementById('tm-box');
    box.style.opacity = '0';
    box.style.transform = `translateX(${dir*30}px)`;
    setTimeout(()=>{
      _populateModal(next);
      box.style.transition = 'none';
      box.style.transform = `translateX(${-dir*30}px)`;
      box.style.opacity = '0';
      requestAnimationFrame(()=>{
        box.style.transition = '';
        box.style.transform = '';
        box.style.opacity = '1';
      });
    }, 150);
  };

  window._castVote = function(verdict){
    if(!_modalId) return;
    const uv = getUserVotes();
    if(uv[_modalId] === verdict) delete uv[_modalId]; // toggle off
    else uv[_modalId] = verdict;
    saveUserVotes(uv);
    const th = THEORIES.find(t=>t.id===_modalId);
    if(th) refreshModal(th);
    refreshGrid();
  };

  function refreshModal(th){
    const uv = getUserVotes();
    const uVote = uv[th.id];
    const t = getTotals(th);
    const total = VERDICTS.reduce((s,v)=>s+(t[v]||0), 0);
    document.querySelectorAll('.tm-btn').forEach(b=>{
      b.classList.toggle('chosen', b.dataset.v === uVote);
    });
    const rows = VERDICTS.map(v=>{
      const cnt = t[v]||0;
      const pct = total ? Math.round(cnt/total*100) : 0;
      if(!cnt) return '';
      return `<div class="tm-row">
        <span class="tm-rl" style="color:${VC[v]}">${VL[v]}</span>
        <div class="tm-bw"><div class="tm-bf" style="width:${pct}%;background:${VC[v]}"></div></div>
        <span class="tm-rp">${pct}%</span>
        <span class="tm-rc">(${cnt.toLocaleString()})</span>
      </div>`;
    }).join('');
    document.getElementById('tm-tally').innerHTML = rows + `<div class="tm-tot">${total.toLocaleString()} total votes</div>`;
  }

  // ── Styles ───────────────────────────────────────────────────────────────
  function injectStyles(){
    if(document.getElementById('theory-css')) return;
    const s = document.createElement('style');
    s.id = 'theory-css';
    s.textContent = `
    #tab-theories { display:flex; flex-direction:column; flex:1; min-height:0; overflow:hidden; background:#0a0500; color:#c8a050; }

    /* Header */
    #theories-header { padding:14px 20px 10px; border-bottom:1px solid #2a1a05; background:rgba(8,4,0,.97); flex-shrink:0; }
    #theories-title-row { display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:4px; }
    #theories-title { font-size:1.1em; font-weight:bold; letter-spacing:2px; color:#d4a820; }
    #theories-progress-wrap { position:relative; height:16px; background:#1a0d00; border-radius:8px; overflow:hidden; width:140px; flex-shrink:0; border:1px solid #2a1a05; }
    #theories-progress-bar { height:100%; background:#4a2a08; border-radius:8px; transition:width .4s; }
    #theories-progress-label { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; font-size:.6em; color:#8a5a20; letter-spacing:.5px; }
    #theories-subtitle { font-size:.71em; color:#4a2a08; letter-spacing:.3px; margin-bottom:8px; }
    #theories-legend { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:8px; }
    .tleg { font-size:.62em; border:1px solid; padding:2px 7px; border-radius:2px; letter-spacing:.4px; }

    /* Category filters */
    #theories-filters { display:flex; gap:5px; flex-wrap:wrap; }
    .t-filter { background:transparent; border:1px solid #2a1a05; color:#4a2a08; padding:3px 10px; border-radius:2px; cursor:pointer; font-family:inherit; font-size:.65em; letter-spacing:.5px; transition:all .15s; }
    .t-filter:hover { border-color:#6a3a10; color:#8a5a20; }
    .t-filter.active { background:#1a0d00; border-color:#d4a820; color:#d4a820; }

    /* Grid */
    #theories-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(210px,1fr)); gap:10px; padding:14px 16px; overflow-y:auto; -webkit-overflow-scrolling:touch; flex:1; min-height:0; }

    /* Cards */
    .theory-card { background:#0c0600; border:1px solid #1e1205; border-radius:4px; padding:12px 12px 10px; cursor:pointer; transition:border-color .15s,background .15s,box-shadow .15s; display:flex; flex-direction:column; gap:6px; }
    .theory-card:hover { border-color:#5a3010; background:#110800; box-shadow:0 2px 12px rgba(0,0,0,.4); }
    .theory-card.voted { border-color:#2a1a05; }
    .tc-top { display:flex; justify-content:space-between; align-items:center; }
    .tc-cat { font-size:.6em; color:#3a2008; letter-spacing:1px; text-transform:uppercase; }
    .tc-rank { font-size:.6em; color:#2a1505; letter-spacing:.5px; }
    .tc-name { font-size:.9em; color:#d4a820; font-weight:bold; letter-spacing:.3px; line-height:1.35; flex:1; }
    .tc-con { font-size:.65em; letter-spacing:.6px; }
    .tc-bar { display:flex; height:5px; border-radius:3px; overflow:hidden; gap:1px; }
    .tc-seg { height:100%; min-width:2px; transition:width .3s; }
    .tc-bottom { display:flex; justify-content:space-between; align-items:center; margin-top:1px; }
    .tc-count { font-size:.59em; color:#2e1606; }
    .tc-badge { font-size:.58em; border:1px solid; padding:1px 5px; border-radius:2px; letter-spacing:.2px; white-space:nowrap; }
    .tc-unvoted { font-size:.58em; color:#2a1605; letter-spacing:1px; border:1px dashed #2a1605; padding:1px 5px; border-radius:2px; }
    .theory-card:hover .tc-unvoted { color:#6a3a10; border-color:#6a3a10; }

    /* Modal */
    #theory-modal { display:none; position:fixed; inset:0; background:rgba(0,0,0,.82); z-index:9000; align-items:center; justify-content:center; padding:20px; opacity:0; transition:opacity .2s; }
    #theory-modal.open { opacity:1; }
    #tm-box { background:#0d0700; border:1px solid #4a2a08; border-radius:5px; max-width:600px; width:100%; padding:26px 28px 20px; position:relative; max-height:90vh; overflow-y:auto; transition:opacity .15s,transform .15s; }
    #tm-close { position:absolute; top:10px; right:12px; background:none; border:none; color:#3a2008; font-size:1.1em; cursor:pointer; padding:4px 7px; border-radius:3px; transition:color .1s; }
    #tm-close:hover { color:#d4a820; }
    #tm-cat { font-size:.63em; color:#4a2a08; letter-spacing:1.5px; text-transform:uppercase; margin-bottom:4px; }
    #tm-title { font-size:1.2em; color:#d4a820; font-weight:bold; letter-spacing:.7px; margin-bottom:12px; line-height:1.35; padding-right:24px; }
    #tm-blurb { font-size:.84em; color:#a07830; line-height:1.8; margin-bottom:18px; border-left:2px solid #2a1a05; padding-left:14px; }
    #tm-vote-label { font-size:.63em; color:#4a2a08; letter-spacing:1.5px; margin-bottom:8px; }
    #tm-btns { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:18px; }
    .tm-btn { background:#0a0500; border:1px solid var(--vc); color:var(--vc); padding:7px 11px; border-radius:3px; cursor:pointer; font-family:inherit; font-size:.71em; letter-spacing:.3px; transition:background .12s,opacity .12s; opacity:.5; }
    .tm-btn:hover { opacity:.88; background:#160b00; }
    .tm-btn.chosen { opacity:1; background:rgba(255,255,255,.05); font-weight:bold; box-shadow:0 0 0 1px var(--vc); }
    #tm-tally-head { font-size:.62em; color:#4a2a08; letter-spacing:1.5px; margin-bottom:8px; }
    .tm-row { display:flex; align-items:center; gap:7px; margin-bottom:6px; }
    .tm-rl { width:145px; font-size:.69em; letter-spacing:.2px; flex-shrink:0; }
    .tm-bw { flex:1; height:7px; background:#160b00; border-radius:4px; overflow:hidden; }
    .tm-bf { height:100%; border-radius:4px; transition:width .35s; }
    .tm-rp { width:32px; font-size:.69em; color:#5a3a10; text-align:right; flex-shrink:0; }
    .tm-rc { width:60px; font-size:.63em; color:#3a1a06; flex-shrink:0; }
    .tm-tot { font-size:.64em; color:#3a1a06; margin-top:10px; padding-top:8px; border-top:1px solid #1a0d00; letter-spacing:.3px; }
    #tm-nav { display:flex; justify-content:space-between; margin-top:16px; padding-top:12px; border-top:1px solid #1a0d00; }
    .tm-nav-btn { background:none; border:1px solid #2a1a05; color:#4a2a08; padding:5px 14px; border-radius:3px; cursor:pointer; font-family:inherit; font-size:.68em; letter-spacing:1px; transition:border-color .15s,color .15s; }
    .tm-nav-btn:hover { border-color:#6a3a10; color:#8a5a20; }

    /* GRRM Watch */
    #grrm-watch-wrap { flex-shrink:0; background:rgba(8,4,0,.97); border-bottom:1px solid #2a1a05; padding:14px 20px 16px; }
    #grrm-watch-header { display:flex; align-items:baseline; gap:12px; margin-bottom:12px; flex-wrap:wrap; }
    #grrm-watch-title { font-size:.95em; font-weight:bold; color:#d4a820; letter-spacing:2px; }
    #grrm-watch-sub { font-size:.67em; color:#4a2a08; letter-spacing:.3px; }
    #grrm-watch-cards { display:flex; gap:12px; flex-wrap:wrap; }
    .wow-card { background:#0d0700; border:1px solid #2a1a05; border-radius:5px; padding:12px 14px; min-width:180px; flex:1; display:flex; flex-direction:column; gap:5px; }
    .wow-label { font-size:.65em; color:#8b6914; letter-spacing:1px; font-weight:bold; text-transform:uppercase; }
    .wow-sub { font-size:.72em; color:#a07830; line-height:1.3; }
    .wow-pct { font-size:2em; font-weight:bold; line-height:1; margin:4px 0 2px; }
    .wow-pct-sign { font-size:.5em; opacity:.8; }
    .wow-meter { height:6px; background:#160b00; border-radius:3px; overflow:hidden; margin-bottom:4px; }
    .wow-fill { height:100%; border-radius:3px; transition:width .4s; }
    .wow-vote-row { display:flex; align-items:center; gap:6px; }
    .wow-btn { background:#0a0500; border:1px solid #2a1a05; color:#6a3a10; padding:3px 9px; border-radius:3px; cursor:pointer; font-family:inherit; font-size:.64em; letter-spacing:.3px; transition:border-color .15s,color .15s; flex-shrink:0; }
    .wow-up:hover { border-color:#4a8a30; color:#4a8a30; }
    .wow-dn:hover { border-color:#8a3020; color:#8a3020; }
    .wow-vote-hint { font-size:.58em; color:#2e1606; flex:1; text-align:center; }
    #grrm-watch-note { font-size:.57em; color:#2e1606; margin-top:10px; font-style:italic; letter-spacing:.2px; }

    @media(max-width:540px){
      #theories-grid { grid-template-columns:1fr 1fr; gap:7px; padding:8px; }
      #theories-title-row { flex-wrap:wrap; }
      #theories-progress-wrap { width:100px; }
      #tm-box { padding:18px 14px 16px; }
      #tm-btns { gap:4px; }
      .tm-btn { padding:5px 7px; font-size:.65em; }
      .tm-rl { width:105px; }
      #grrm-watch-cards { flex-direction:column; }
      .wow-card { min-width:0; }
    }
    @media(max-width:380px){
      #theories-grid { grid-template-columns:1fr; }
      .wow-vote-row { flex-wrap:wrap; justify-content:center; }
    }
    /* Landscape on a phone: very short viewport — aggressively compact */
    @media(max-height:500px){
      #theories-header { padding:5px 14px 5px; }
      #theories-subtitle { display:none; }
      #theories-legend { display:none; }
      #theories-title { font-size:.85em; }
      #grrm-watch-wrap { padding:6px 14px 8px; }
      #grrm-watch-header { margin-bottom:6px; }
      #grrm-watch-cards { flex-direction:row; flex-wrap:nowrap; overflow-x:auto; -webkit-overflow-scrolling:touch; gap:8px; }
      .wow-card { min-width:160px; flex-shrink:0; padding:8px 10px; gap:3px; }
      .wow-label { font-size:.6em; }
      .wow-pct { font-size:1.4em; margin:1px 0; }
      .wow-meter { height:4px; margin-bottom:2px; }
      .wow-vote-hint { display:none; }
      #grrm-watch-note { display:none; }
      #theories-grid { gap:6px; padding:8px 10px; }
    }
    `;
    document.head.appendChild(s);
  }

  // ── GRRM Watch (prediction market widget) ───────────────────────────────
  const WOW_KEY = 'asoiaf_wow_votes';
  const WOW_SEEDS = {
    wow2026: { label:'THE WINDS OF WINTER',     sub:'Released in 2026',           pct:28 },
    wowever: { label:'THE WINDS OF WINTER',     sub:'Released in our lifetime',    pct:71 },
    ados:    { label:'A DREAM OF SPRING',        sub:'Published before GRRM retires', pct:45 },
  };

  function getWowVotes(){ try{ return JSON.parse(localStorage.getItem(WOW_KEY)||'{}'); }catch(_){ return {}; } }
  function saveWowVotes(v){ localStorage.setItem(WOW_KEY, JSON.stringify(v)); }

  function getWowPct(id){
    const v = getWowVotes();
    const raw = WOW_SEEDS[id].pct + (v[id]||0);
    return Math.max(1, Math.min(99, raw));
  }

  window._voteWow = function(id, dir){
    const v = getWowVotes();
    v[id] = (v[id]||0) + dir;
    const raw = WOW_SEEDS[id].pct + v[id];
    if(raw < 1)  v[id] = 1  - WOW_SEEDS[id].pct;
    if(raw > 99) v[id] = 99 - WOW_SEEDS[id].pct;
    saveWowVotes(v);
    const el = document.getElementById('grrm-watch-cards');
    if(el) el.innerHTML = _wowCardsHTML();
  };

  function _wowCardsHTML(){
    return Object.entries(WOW_SEEDS).map(([id, info]) => {
      const pct = getWowPct(id);
      const col = pct >= 60 ? '#4a8a30' : pct >= 35 ? '#c8a820' : '#8a3020';
      return `<div class="wow-card">
        <div class="wow-label">${info.label}</div>
        <div class="wow-sub">${info.sub}</div>
        <div class="wow-pct" style="color:${col}">${pct}<span class="wow-pct-sign">%</span></div>
        <div class="wow-meter"><div class="wow-fill" style="width:${pct}%;background:${col}"></div></div>
        <div class="wow-vote-row">
          <button class="wow-btn wow-up" onclick="window._voteWow('${id}',1)" title="More likely">▲ Optimist</button>
          <span class="wow-vote-hint">nudges ±1%</span>
          <button class="wow-btn wow-dn" onclick="window._voteWow('${id}',-1)" title="Less likely">▼ Skeptic</button>
        </div>
      </div>`;
    }).join('');
  }

  function buildGRRMWatch(){
    return `<div id="grrm-watch-wrap">
      <div id="grrm-watch-header">
        <span id="grrm-watch-title">🐉 GRRM WATCH</span>
        <span id="grrm-watch-sub">Community prediction market — vote to move the needle</span>
      </div>
      <div id="grrm-watch-cards">${_wowCardsHTML()}</div>
      <div id="grrm-watch-note">Inspired by Kalshi / Manifold Markets. Odds are community-driven estimates, not financial instruments.</div>
    </div>`;
  }

  // ── Theory data ──────────────────────────────────────────────────────────
  const THEORIES = [

    // ── IDENTITY ──────────────────────────────────────────────────────────
    {
      id:'rlj', name:'R+L=J', category:'Identity',
      blurb:'Jon Snow is not Ned Stark\'s bastard but the son of Prince Rhaegar Targaryen and Lyanna Stark. Ned made a death-bed promise to Lyanna to protect the child. The three Kingsguard at the Tower of Joy were stationed there not to guard Lyanna, but to protect a royal heir. This is the most universally accepted theory in fandom history — the show confirmed it, and the books have foreshadowed it on virtually every page Ned appears.',
      seeds:{ canon:4400, likely:750, unsure:90, unlikely:25, noway:15 },
    },
    {
      id:'benjen-coldhands', name:'Coldhands is Benjen Stark', category:'Identity',
      blurb:'The mysterious hooded figure who saves Sam and Gilly north of the Wall is Benjen Stark, kept animate by the Children of the Forest\'s magic after being stabbed with a White Walker\'s ice sword. GRRM denied it in a margin note on an early manuscript — but that note may have been written to mislead. The show made them the same person, and the book evidence (Coldhands knowing Bran by name, his familiarity with the Night\'s Watch) is suggestive.',
      seeds:{ canon:700, likely:1800, unsure:900, unlikely:500, noway:200 },
    },
    {
      id:'aegon-blackfyre', name:'Aegon VI is a Blackfyre Pretender', category:'Identity',
      blurb:'Young Griff, presented as Rhaegar\'s surviving son, may actually be a Blackfyre descendant — possibly descended through the female line — placed on a fake Targaryen narrative by Varys and Illyrio to install a pliable king. Key evidence: the Golden Company, historically loyal to Blackfyres, marches for him without question; Varys\'s origins in the Free Cities align with known Blackfyre exile networks; a real Aegon would have been kept far from any plan involving Daenerys.',
      seeds:{ canon:90, likely:1600, unsure:1700, unlikely:600, noway:180 },
    },
    {
      id:'tyrion-targ', name:'Tyrion is a Secret Targaryen', category:'Identity',
      blurb:'The Mad King Aerys lusted after Joanna Lannister and may have assaulted her at a bedding ceremony. If Aerys fathered Tyrion, it would explain Tywin\'s deep hatred ("you are no son of mine"), Tyrion\'s lifelong obsession with dragons, and make him one of three dragonriders alongside Jon and Dany — the three heads of the dragon. GRRM has called this a fan theory he is "aware of" without confirming or denying it.',
      seeds:{ canon:25, likely:550, unsure:1500, unlikely:1700, noway:1100 },
    },
    {
      id:'quaithe-shiera', name:'Quaithe is Shiera Seastar', category:'Identity',
      blurb:'The masked shadowbinder in Asshai who speaks in riddles to Daenerys may be Shiera Seastar, a Targaryen bastard and famed beauty from a century past, kept alive by blood magic or sorcery in the shadow city. She was known for using a mirror to communicate over vast distances — echoing Quaithe\'s apparent ability to reach Dany across the world. It would explain her intimate knowledge of Targaryen affairs and her mysterious immortality.',
      seeds:{ canon:20, likely:420, unsure:1200, unlikely:1500, noway:850 },
    },
    {
      id:'jaqen-syrio', name:'Jaqen H\'ghar is Syrio Forel', category:'Identity',
      blurb:'Syrio Forel, First Sword of Braavos, appeared to die offscreen fighting Meryn Trant with a wooden practice sword. The theory holds that he was a Faceless Man all along, survived, assumed the alias Jaqen H\'ghar, and engineered his way into the black cells specifically to find Arya Stark. Evidence: both are Braavosi, Syrio\'s impossibly calm acceptance of apparent death, and Arya\'s dancing lessons being unusually well-suited to Faceless Man training.',
      seeds:{ canon:40, likely:650, unsure:1400, unlikely:1300, noway:750 },
    },
    {
      id:'hooded-man', name:'The Hooded Man in Winterfell is Theon', category:'Identity',
      blurb:'In a cryptic ADwD chapter, a hooded man in a Winterfell passageway calls Theon by name and says "Theon Turncloak. Theon Kinslayer… you will not leave this place." GRRM confirmed in an interview that readers have identified the man correctly, and the most popular identification is Theon himself — dissociated, speaking to his own guilt from a psychological dark place. Alternatives include Mance Rayder (in disguise as Abel) and various other suspects.',
      seeds:{ canon:80, likely:1100, unsure:1800, unlikely:700, noway:300 },
    },
    {
      id:'syrio-alive', name:'Syrio Forel Escaped Alive', category:'Identity',
      blurb:'Meryn Trant is the only witness to Syrio\'s alleged death, and he\'s an unreliable one. Arya never saw Syrio\'s body. Separately from the Jaqen theory, many readers believe Syrio simply outfought Trant (he was the First Sword of Braavos with a wooden stick) and fled. His scene ends mid-fight with deliberate ambiguity. GRRM is known to keep options open by denying characters onscreen deaths.',
      seeds:{ canon:20, likely:450, unsure:1100, unlikely:1800, noway:1400 },
    },
    {
      id:'robb-will', name:'Robb\'s Will Legitimized Jon Stark', category:'Identity',
      blurb:'Before the Red Wedding, Robb named Jon Snow his heir and had a will drawn up legitimizing him as Jon Stark, Lord of Winterfell. Catelyn opposed it. The will presumably still exists somewhere — possibly with the Greatjon Umber or another survivor. If recovered, it could complicate Jon\'s overlapping claim as a Targaryen and set up a fascinating legal conflict over his ultimate identity and loyalties.',
      seeds:{ canon:100, likely:1500, unsure:1400, unlikely:500, noway:200 },
    },

    // ── PROPHECY ──────────────────────────────────────────────────────────
    {
      id:'jon-aa', name:'Jon Snow is Azor Ahai / TPTWP', category:'Prophecy',
      blurb:'The prophecy of Azor Ahai describes a hero reborn from smoke and salt wielding a burning sword called Lightbringer to drive back the darkness. Jon fits nearly every criterion: born at the Tower of Joy (a battle — smoke and salt from blood and tears), died and was resurrected, is the product of ice and fire. Melisandre sees a great destiny in him and her flames show her Jon\'s face when she looks for Azor Ahai.',
      seeds:{ canon:280, likely:2400, unsure:1700, unlikely:450, noway:180 },
    },
    {
      id:'dany-aa', name:'Daenerys is Azor Ahai / TPTWP', category:'Prophecy',
      blurb:'Daenerys was born during a storm (Stormborn), is associated with fire and rebirth (hatching the dragons at her husband\'s pyre), and has consistently risen after apparent destruction. Her three dragons could be her Lightbringer — or she herself is the sword. The show version of her arc (burning King\'s Landing) suggests a darker fulfillment of the fire prophecy than fans originally expected, which GRRM may mirror.',
      seeds:{ canon:180, likely:1900, unsure:2100, unlikely:650, noway:280 },
    },
    {
      id:'jaime-aa', name:'Jaime Lannister is Azor Ahai', category:'Prophecy',
      blurb:'Jaime killed the Mad King to prevent the wildfire burning of King\'s Landing — a literal act of plunging a sword into someone he loved (his king, his honor, his identity) to save the realm. His golden hand is a thematic "Lightbringer," his arc is one of death and rebirth of self, and he was born alongside Cersei in a twin birth mirroring Azor Ahai\'s twin stars. A minority but intellectually compelling reading of the prophecy.',
      seeds:{ canon:15, likely:300, unsure:900, unlikely:1600, noway:1400 },
    },
    {
      id:'valonqar-jaime', name:'Cersei\'s Valonqar = Jaime', category:'Prophecy',
      blurb:'Maggy the Frog prophesied that the "valonqar" (High Valyrian for "little brother") would wrap his hands around Cersei\'s pale throat and choke the life from her. Cersei assumes Tyrion — but Jaime was born after her, making him also a little brother. His arc toward Cersei\'s death has been building since Season 1, and his golden hand could be used as the choking instrument. The irony of being killed by her twin is quintessentially GRRM.',
      seeds:{ canon:90, likely:2500, unsure:1000, unlikely:450, noway:180 },
    },
    {
      id:'valonqar-tyrion', name:'Cersei\'s Valonqar = Tyrion', category:'Prophecy',
      blurb:'The literal reading: Tyrion is Cersei\'s little brother and she has loathed him her entire life, believing he will be her doom since childhood. Tyrion has every reason to kill Cersei and will almost certainly be in King\'s Landing at the story\'s end. He is the candidate Cersei herself fears, which in GRRM\'s world makes him either the correct or a deliberate misdirect. Both readings are satisfying.',
      seeds:{ canon:70, likely:2000, unsure:1300, unlikely:600, noway:250 },
    },
    {
      id:'valonqar-arya', name:'Cersei\'s Valonqar = Arya in Jaime\'s Face', category:'Prophecy',
      blurb:'Lady Stoneheart or circumstance leads Arya to kill Jaime Lannister; she then wears his face to get close to Cersei and fulfills the prophecy using Jaime\'s hands — which are, technically, Jaime\'s hands wrapping around Cersei\'s throat. The valonqar prophecy would be fulfilled both literally (Jaime\'s body) and symbolically. It\'s a dark mirror of Arya\'s Faceless Man training and would be deeply ironic given Cersei\'s fear of her own twin.',
      seeds:{ canon:15, likely:500, unsure:1300, unlikely:1500, noway:850 },
    },
    {
      id:'maggy-full', name:'Maggy\'s Full Prophecy Will Be Fulfilled', category:'Prophecy',
      blurb:'Every line of Maggy the Frog\'s prophecy for young Cersei has a plausible path to fulfillment: the queen more beautiful casting her down (Margaery? Daenerys? Sansa?), all three of her children dying with gold shrouds (done in the show, well-foreshadowed in the books), and the valonqar. The show omitted the valonqar clause; the books include it. GRRM has a near-perfect track record of fulfilling prophecies — usually in unexpected ways.',
      seeds:{ canon:100, likely:2000, unsure:1100, unlikely:350, noway:120 },
    },
    {
      id:'nissa-nissa', name:'Nissa Nissa = Lyanna / Jon is Lightbringer', category:'Prophecy',
      blurb:'Azor Ahai forged Lightbringer by plunging the blade into his wife Nissa Nissa\'s heart. The theory maps this onto Rhaegar "abducting" (or running away with) Lyanna: their love produced Jon Snow, who is himself the Lightbringer — the weapon forged from sacrifice and love that will be used against the darkness. Lyanna dying in childbirth fulfills the sacrifice. Jon being both ice and fire makes him the literal sword of ice and fire.',
      seeds:{ canon:40, likely:700, unsure:1600, unlikely:1100, noway:650 },
    },
    {
      id:'stark-motto', name:'"Winter Is Coming" Refers to the Others\' Return', category:'Prophecy',
      blurb:'The Stark words are not merely a weather warning but a memorial encoded into words by the First Men survivors of the Long Night — a warning to future generations that the Others return in cycles and winter is when they march. Every Stark who says it unknowingly carries the lesson of thousands of years of vigilance. The Wall itself exists for the same reason: institutional memory of an existential threat that has outlasted the living memory of its builders.',
      seeds:{ canon:200, likely:2300, unsure:950, unlikely:280, noway:90 },
    },

    // ── SURVIVAL ──────────────────────────────────────────────────────────
    {
      id:'hound-gravedigger', name:'The Hound is Alive — The Gravedigger Theory', category:'Survival',
      blurb:'Sandor Clegane does not die from his wounds after Arya leaves him. On the Quiet Isle in AFfC, Brienne observes a huge, limping novice gravedigger with a wide-brimmed hat covering a scarred face. Brother Meribald speaks of men broken by violence who find peace in service — an obvious parallel to Sandor. The Elder Brother says "The Hound is dead," but the Hound is Sandor\'s traumatized persona, not the man himself.',
      seeds:{ canon:900, likely:2300, unsure:600, unlikely:150, noway:50 },
    },
    {
      id:'stoneheart-jaime', name:'Lady Stoneheart Will Hang Jaime Lannister', category:'Survival',
      blurb:'The undead Catelyn Stark leads the Brotherhood Without Banners on a revenge campaign. Jaime is heading into the Riverlands alone at the end of AFfC, and Brienne — forced by Stoneheart to choose between her own death and Jaime\'s — calls out a word we never hear. The stage is set for Jaime to face his crimes in Catelyn\'s court. Whether Stoneheart kills him or he escapes is debated, but the confrontation seems inevitable.',
      seeds:{ canon:80, likely:1400, unsure:1500, unlikely:700, noway:300 },
    },
    {
      id:'jon-vow-loophole', name:'Jon\'s Death Releases Him from His Night\'s Watch Vow', category:'Survival',
      blurb:'The Night\'s Watch oath is sworn "until death." Jon Snow was killed by his brothers. Legally and magically, his death ended the oath — whatever is resurrected is technically a free man. This would allow Jon to leave the Wall without being a deserter, potentially reclaim his Stark identity (or Targaryen identity), and march south with a clear conscience. GRRM included Beric Dondarrion as a prior example of resurrection changing a person\'s obligations.',
      seeds:{ canon:220, likely:2200, unsure:1100, unlikely:250, noway:80 },
    },

    // ── MAGIC & LORE ──────────────────────────────────────────────────────
    {
      id:'cotf-made-others', name:'The Children of the Forest Created the White Walkers', category:'Magic & Lore',
      blurb:'The Others did not arise naturally — they were created as a weapon by the Children of the Forest during their war against the First Men. A human was captured and had an obsidian dagger driven into his heart, transforming him into the first White Walker. The Children, unable to control what they made, are partly responsible for the Long Night. This is confirmed in the TV show and is strongly hinted at in the books through Bran\'s greensight.',
      seeds:{ canon:650, likely:1900, unsure:1000, unlikely:280, noway:80 },
    },
    {
      id:'others-not-evil', name:'The Others Have Their Own Reasons — They Are Not Simply Evil', category:'Magic & Lore',
      blurb:'The Others are not mindlessly destructive — they have agency, hierarchy, and purpose. They appear to operate under complex rules (they cannot pass through certain barriers, they respond to specific materials) suggesting an ancient intelligence. GRRM has stated he finds purely evil villains uninteresting and that the Others will be more complex than they appear. The Long Night may have been caused by a specific event they are now trying to undo or avenge.',
      seeds:{ canon:50, likely:1050, unsure:1700, unlikely:1000, noway:500 },
    },
    {
      id:'bran-past', name:'Bran Can Alter the Past Through the Weirwood Network', category:'Magic & Lore',
      blurb:'Bran witnesses past events through the greenseer network, but there are hints he can interact with the past — most notably when young Ned appears to hear Bran\'s voice at the Tower of Joy. If Bran can whisper into the past, he may have already shaped history (for example, the Mad King\'s recurring command to "burn them all" may be Bran calling for dragonglass or wildfire against the Others from a future/past interaction gone wrong).',
      seeds:{ canon:80, likely:1000, unsure:1700, unlikely:900, noway:500 },
    },
    {
      id:'bran-builder', name:'Bran the Builder is Bran Stark (Time Loop)', category:'Magic & Lore',
      blurb:'Bran Stark, through his greenseer abilities, travels back in time and becomes the legendary Bran the Builder who constructed Winterfell and the Wall — possibly whispering instructions to ancient builders from the weirwood network. This would create a closed time loop where Bran always did these things. Evidence is circumstantial but the name match is too pointed to be accidental, and GRRM has confirmed the Wall requires magic — magic that a greenseer could provide.',
      seeds:{ canon:40, likely:550, unsure:1200, unlikely:1500, noway:950 },
    },
    {
      id:'bran-weirwood', name:'Bran Will Be Trapped in the Weirwood Tree Forever', category:'Magic & Lore',
      blurb:'Bloodraven himself is merged with his weirwood throne — roots growing through him, body kept alive by the tree. Bran is following the same path: each greensight session pulls him deeper into the network. His final fate may be to remain behind, a consciousness spread across all weirwood trees, the new Three-Eyed Raven serving as the memory of the world while everyone else continues their lives.',
      seeds:{ canon:50, likely:950, unsure:1600, unlikely:1050, noway:500 },
    },
    {
      id:'valyrian-steel', name:'Valyrian Steel is Made With Human Sacrifice and Dragonfire', category:'Magic & Lore',
      blurb:'The secret of forging Valyrian steel was "lost" when Valyria fell. Based on scattered evidence, the process involved dragon fire, spells of binding, and the living sacrifice of human souls — which is why Valyrian steel can harm the Others, as it carries the magic of life against the magic of death. The dragonglass / Valyrian steel vulnerability of the Others is not arbitrary; both materials represent opposed magical forces.',
      seeds:{ canon:90, likely:1450, unsure:1700, unlikely:550, noway:250 },
    },
    {
      id:'bloodraven-manipulation', name:'Bloodraven Has Been Manipulating Events for Centuries', category:'Magic & Lore',
      blurb:'Brynden Rivers, the last Targaryen bastard, became Lord Commander of the Night\'s Watch before vanishing beyond the Wall. From his weirwood throne he has watched centuries of history and sent the three-eyed crow to guide specific people — Bran, Jojen, and others. His manipulation is not necessarily benevolent: he may have allowed great suffering to produce specific outcomes, seeing the Long Night as the final event he must prepare humanity to survive.',
      seeds:{ canon:120, likely:1900, unsure:1500, unlikely:350, noway:120 },
    },
    {
      id:'horn-winter', name:'The Horn of Winter Will Bring Down the Wall', category:'Magic & Lore',
      blurb:'The Horn of Joramun, if truly found (or if the horn Sam found at the Fist of the First Men is the real one, not the decoy), can collapse the Wall when blown. Mance Rayder claimed to have it and destroyed it before capture — but may have kept the real one hidden. The Wall has to fall for the final act of the story to begin; this is presumably how. The show used it as a dragon (Viserion) but the books have been building the Horn plot carefully.',
      seeds:{ canon:100, likely:1700, unsure:1800, unlikely:450, noway:180 },
    },
    {
      id:'glass-candles', name:'Relighting Glass Candles Signals Magic\'s Return', category:'Magic & Lore',
      blurb:'Obsidian candles at the Citadel were said to be extinct — impossible to light. Marwyn the Mage\'s glass candle is burning when Sam arrives. These candles allow communication across vast distances and can reveal hidden truths; their reactivation suggests that magic is returning to the world as the dragons are reborn. The Maesters, some of whom quietly suppressed magic, are being overtaken by forces they tried to eliminate.',
      seeds:{ canon:110, likely:1850, unsure:1200, unlikely:380, noway:160 },
    },
    {
      id:'euron-sorcerer', name:'Euron Greyjoy is a Genuine Sorcerer', category:'Magic & Lore',
      blurb:'Euron claims to have sailed to Valyria and back alive, to have used Dragonbinder, and to have bound his crew to him through ritual. He has drunk shade of the evening (which grants visions in the shade of the evening-drinking warlocks), wears Valyrian steel armor, and appears to have genuinely supernatural sight. His chapters in AFfC and the Forsaken preview chapter suggest he is not merely posturing — he has entered into dark magic that has fractured his sanity in exchange for real power.',
      seeds:{ canon:110, likely:1550, unsure:1550, unlikely:530, noway:250 },
    },
    {
      id:'weirwood-network', name:'All Weirwood Trees Share a Single Consciousness', category:'Magic & Lore',
      blurb:'Every weirwood tree with a carved face is a node in a vast interconnected network through which greenseers perceive all events past and present. The trees are not merely tools — they hold the memories of the Children of the Forest and every greenseer who merged with them. Bran\'s ability to see past events through any weirwood suggests a unified consciousness, with Bloodraven at the center acting as something like a nerve cluster.',
      seeds:{ canon:100, likely:1650, unsure:1400, unlikely:470, noway:180 },
    },
    {
      id:'warg-death', name:'A Warg\'s Consciousness Survives in Their Animal After Death', category:'Magic & Lore',
      blurb:'Orell\'s eagle retained his hatred for Jon Snow after his death. Varamyr Six Skins attempted to inhabit his wolf as he died. The Old Gods appear to exist as greenseers who have passed into weirwood trees. This suggests a spectrum of afterlife for wargs: temporary consciousness in their bonded animal, fading over time. Jon\'s bond with Ghost is the deepest seen — whatever is left of Jon\'s soul after his assassination likely persists in Ghost.',
      seeds:{ canon:60, likely:850, unsure:1600, unlikely:1050, noway:550 },
    },

    // ── POLITICS ──────────────────────────────────────────────────────────
    {
      id:'varys-blackfyre', name:'Varys Works for House Blackfyre', category:'Politics',
      blurb:'Varys was born in the Free Cities, the heartland of the Blackfyre exile community. The Golden Company — historically the Blackfyre exile army — marches for Aegon without question. Varys claims to serve "the realm" and a mysterious young king. The Blackfyre theory suggests he has been working for generations to restore a Blackfyre descendant to the Iron Throne, using the fiction of Targaryen legitimacy as cover. His network in the Free Cities makes more sense with Blackfyre backing than without.',
      seeds:{ canon:75, likely:1300, unsure:1800, unlikely:750, noway:300 },
    },
    {
      id:'golden-company-betrayal', name:'The Golden Company Will Betray Aegon VI', category:'Politics',
      blurb:'The sellsword company has a motto: "Our word is good as gold." They have broken their contract only once in history. But the moment Daenerys and her dragons arrive with a superior claim, commercial calculation may override loyalty. Alternatively, if Aegon is exposed as a Blackfyre, the company may back a more legitimate claimant. GRRM loves to subvert expectations — a company famous for loyalty betraying at the worst moment would be classic.',
      seeds:{ canon:30, likely:800, unsure:1700, unlikely:1000, noway:550 },
    },
    {
      id:'sansa-littlefinger', name:'Sansa Will Outplay Littlefinger and Destroy Him', category:'Politics',
      blurb:'Sansa began as Littlefinger\'s pawn, but has been learning his game from the inside. By ADwD she is beginning to understand manipulation, social performance, and the power of narrative. GRRM has called Sansa\'s arc one of learning to play the game of thrones — and the most satisfying end point for a student is surpassing their teacher. Littlefinger\'s death at Sansa\'s indirect hands was foreshadowed in the show, and the book setup points similarly.',
      seeds:{ canon:100, likely:1850, unsure:1200, unlikely:380, noway:170 },
    },
    {
      id:'littlefinger-red-wedding', name:'Littlefinger Had Prior Knowledge of the Red Wedding', category:'Politics',
      blurb:'Littlefinger brokered the Tyrell-Lannister alliance and was heavily involved in the political maneuvering of the War of the Five Kings. Some theorize he also knew of the Frey-Bolton betrayal or even helped arrange it — removing Robb Stark cleared the board for Lannister dominance and his own advancement. His subsequent seizure of the Eyrie and the Vale, and his cultivation of Sansa, suggests a long-term plan that benefited from the Red Wedding.',
      seeds:{ canon:30, likely:700, unsure:1600, unlikely:1200, noway:700 },
    },
    {
      id:'faceless-extinction', name:'The Faceless Men Ultimately Serve an Ideology of Extinction', category:'Politics',
      blurb:'The Many-Faced God is described as the "god of death" — the one god worshipped under many names across all cultures. The Faceless Men do not merely balance the scales of life; their founding philosophy (the first Faceless Man killed slavemasters and gave the "gift" of death) suggests they view death as liberation. Some theorists argue their long-term goal is the elimination of all life — the ultimate gift — making them a slow-motion apocalypse cult operating beneath notice.',
      seeds:{ canon:20, likely:550, unsure:1350, unlikely:1300, noway:900 },
    },

    // ── ENDGAME ───────────────────────────────────────────────────────────
    {
      id:'dany-burns-kl', name:'Daenerys Will Burn King\'s Landing', category:'Endgame',
      blurb:'Daenerys\'s family history, her visions in the House of the Undying, and her increasing willingness to use dragonfire as a political tool all point toward a moment where she mirrors her father. The show did it; the book has been building the foreshadowing since book one (the Mad King\'s wildfire caches remain under King\'s Landing). Whether it is a choice, a trap, or a prophecy fulfilled against her will — the Mother of Dragons burning the city is arguably the most foreshadowed event in the series.',
      seeds:{ canon:90, likely:1650, unsure:1800, unlikely:620, noway:290 },
    },
    {
      id:'iron-throne-destroyed', name:'The Iron Throne Will Be Destroyed', category:'Endgame',
      blurb:'Made from the swords of Aegon\'s conquered enemies, the Iron Throne is the physical symbol of everything wrong with the game of thrones. GRRM has suggested the ending will be bittersweet, not a triumphant restoration of the old order. The Throne being melted, destroyed, or simply abandoned would mark the end of the Westerosi status quo — a symbolic as well as literal conclusion to the cycle of conquest and war.',
      seeds:{ canon:95, likely:1450, unsure:1800, unlikely:700, noway:400 },
    },
    {
      id:'jon-sacrifice', name:'Jon Snow Will Sacrifice Himself to Defeat the Others', category:'Endgame',
      blurb:'Azor Ahai forged Lightbringer by plunging the blade into his beloved\'s heart. If Jon is Azor Ahai, his ultimate act may be a sacrifice — giving his own life (for the second time) to forge the weapon or take the action that finally ends the Long Night. GRRM\'s promise of a bittersweet ending fits with the hero winning but not surviving to enjoy it. Jon has already died once; a permanent sacrifice would complete his arc in the darkest possible register.',
      seeds:{ canon:70, likely:1200, unsure:1900, unlikely:850, noway:400 },
    },
    {
      id:'cleganebowl', name:'CLEGANEBOWL — Sandor vs. Gregor in Trial by Combat', category:'Endgame',
      blurb:'"GET HYPE." If the Hound is alive on the Quiet Isle, and if Cersei demands trial by combat with Ser Robert Strong (Gregor Clegane reanimated by Qyburn), the Faith Militant would need a champion. The Elder Brother noted the Hound\'s fighting skills. Sandor\'s life of violence may culminate in one final, cathartic fight against his monstrous brother. The show did it. The foreshadowing in the books (Sandor\'s resentment of Gregor, the gravedigger setup) points the same direction.',
      seeds:{ canon:190, likely:2900, unsure:1050, unlikely:380, noway:140 },
    },
    {
      id:'melisandre-sacrifice', name:'Melisandre Will Sacrifice Herself for Jon or the Realm', category:'Endgame',
      blurb:'Melisandre has given everything to R\'hllor\'s cause, has made terrible mistakes (Shireen), and is on an arc of atonement. Her ruby glamour is the only thing keeping her alive — without it she is an ancient, withered woman whose time should have passed long ago. The logical conclusion of her arc is a final sacrifice: giving up the last of her power and life to resurrect Jon, fuel a great fire, or perform one last impossible act of magic for the cause she has served too fanatically.',
      seeds:{ canon:55, likely:1300, unsure:1700, unlikely:680, noway:290 },
    },
    {
      id:'arya-pack', name:'Arya Will Return to Westeros and Find Her Pack', category:'Endgame',
      blurb:'Arya\'s direwolf Nymeria leads a massive wolf pack in the Riverlands. When Arya warged into Nymeria in ADwD she recognized her briefly before pulling away. GRRM has confirmed this scene is significant and that Nymeria\'s pack will matter to the story. Arya\'s entire arc is about the tension between her identity as a Faceless Man (No One) and her identity as a Stark (a wolf). The pack — and what remains of her human family — represent the self she can\'t fully abandon.',
      seeds:{ canon:100, likely:1700, unsure:1400, unlikely:570, noway:280 },
    },
    {
      id:'jon-changed', name:'Jon\'s Resurrection Will Permanently Change Him', category:'Endgame',
      blurb:'Every person resurrected by the Lord of Light loses something. Beric Dondarrion lost memories and warmth with each resurrection. Lady Stoneheart is consumed by grief and vengeance — she can barely speak. Jon will be brought back different: colder, more focused, perhaps capable of doing things the honorable Ned Stark\'s son never could. His death is not a reset button but a transformation — ice and fire made into something harder than either.',
      seeds:{ canon:100, likely:1950, unsure:1250, unlikely:380, noway:180 },
    },
    {
      id:'song-of-ice-fire', name:'The Song of Ice and Fire = Jon and Daenerys', category:'Endgame',
      blurb:'The title of the entire series is a song — a narrative — combining ice and fire. Jon Snow, born of Stark (ice) and Targaryen (fire), is himself the embodiment of that union. The "song" may also refer to the literal end of the Long Night: ice (the Others) and fire (dragons) resolving into something new. Whether this means Jon and Daenerys rule together, fight each other, or sacrifice themselves together, the series title names them as the resolution of its central conflict.',
      seeds:{ canon:100, likely:1500, unsure:1800, unlikely:680, noway:380 },
    },

    // ── WILD CARD ─────────────────────────────────────────────────────────
    {
      id:'sam-author', name:'Sam Tarly is the In-Universe Author of ASOIAF', category:'Wild Card',
      blurb:'At the Citadel, Sam is studying to become a maester and is presumably writing the histories of the War of the Five Kings and beyond. GRRM has spoken about the idea of a chronicler writing "a true history" versus "the songs." Sam is an outsider with an unusual perspective, was present for crucial events, and corresponds with Jon who witnessed even more. The series is titled "A Song of Ice and Fire" — a song Sam might have written long after the events concluded.',
      seeds:{ canon:100, likely:850, unsure:1700, unlikely:1200, noway:700 },
    },
    {
      id:'old-nan-greenseer', name:'Old Nan is a Greenseer', category:'Wild Card',
      blurb:'Old Nan\'s stories about the Long Night, the Others, and the history of the First Men are unusually accurate — more accurate than any historical record should be after 8,000 years. She describes events with a specificity that suggests firsthand witness, not folk memory. One reading is that Nan has greenseer abilities, perceiving the past through the weirwood network, giving her access to events no living person could remember. Her stories are not myths — they are reports.',
      seeds:{ canon:25, likely:650, unsure:1350, unlikely:1250, noway:800 },
    },
    {
      id:'dany-dragons-reincarnation', name:'Dany\'s Three Dragons Are Drogo, Rhaego, and Viserys Reborn', category:'Wild Card',
      blurb:'Mirri Maz Duur\'s blood magic ritual consumed three souls: Khal Drogo, the baby Rhaego, and (arguably) Viserys who died nearby. The dragon eggs, heated by Drogo\'s funeral pyre and Dany\'s grief, hatched three dragons. The theory maps each soul to a dragon: Drogo\'s fierce warrior spirit to Drogon (named for him), the unborn Rhaego to Rhaegal, and the pale, spiteful Viserys to Viserion. It\'s deeply symbolic, if unprovable.',
      seeds:{ canon:20, likely:380, unsure:1200, unlikely:1450, noway:1050 },
    },
    {
      id:'stannis-aa', name:'Stannis is the Literal Azor Ahai by Prophecy Detail', category:'Wild Card',
      blurb:'The specific prophecy requirements — born amidst salt and smoke, drawing a burning sword from the flames, born under a bleeding star — all fit Stannis at Dragonstone on the night he pulled the flaming sword from the fire (literally — Melisandre staged it with a false Lightbringer). Dragonstone sits above volcanic rock (smoke), surrounded by the Narrow Sea (salt). Stannis\'s "Lightbringer" doesn\'t glow or give off heat — suggesting the real fulfillment is elsewhere — but the geographical detail is suspicious.',
      seeds:{ canon:20, likely:520, unsure:1350, unlikely:1400, noway:850 },
    },
    {
      id:'drowned-god-evil', name:'The Drowned God is Actually a Servant of the Great Other', category:'Wild Card',
      blurb:'"What is dead may never die" — the Ironborn motto describes wights as much as the Drowned God\'s chosen. The Drowned God resides in a watery hell and sends storms; his domain is the cold, dark depths. The parallels to the Others (who raise the dead, whose magic involves cold and darkness) suggest the Drowned God may be an aspect of, or servant to, the Great Other — the cosmic enemy of R\'hllor. The Ironborn, unknowingly, may worship the enemy.',
      seeds:{ canon:15, likely:580, unsure:1400, unlikely:1200, noway:850 },
    },
    {
      id:'rhlor-great-other', name:'R\'hllor and the Great Other Are the Only True Gods', category:'Wild Card',
      blurb:'Every religion in the known world may be worshipping the same two forces under different names: R\'hllor (fire, life, light) and the Great Other (ice, death, darkness). The Old Gods, the Drowned God, the Many-Faced God, the Smith, the Maiden, the Warrior — all are aspects of this fundamental binary. Magic in the world operates through these two forces. The series ends when this cosmic war resolves — not through politics or dragons, but through the fundamental nature of the universe.',
      seeds:{ canon:40, likely:950, unsure:1800, unlikely:850, noway:420 },
    },
    {
      id:'jorah-death', name:'Jorah Mormont Will Die Saving Daenerys', category:'Wild Card',
      blurb:'Jorah\'s arc is a redemption story — the disgraced lord who betrayed Daenerys and is slowly earning his way back. His greyscale infection adds an expiration date to his character. The most complete version of his arc ends with him dying in her service: sacrificing himself to save her from the Stonemen, the Others, Euron, or some other threat. His love for her, unrequited but real, gives his death maximum dramatic weight and completes his journey from traitor to her true shield.',
      seeds:{ canon:50, likely:1300, unsure:1650, unlikely:650, noway:280 },
    },
    {
      id:'three-headed-dragon', name:'The Three Heads of the Dragon = Dany, Jon, and Tyrion', category:'Wild Card',
      blurb:'"The dragon must have three heads." Rhaegar believed three dragonriders were needed. Dany is the obvious first head. Jon — with Targaryen blood — is the second. Tyrion, if the Mad King fathered him, would be the third. Each would bond with one dragon (Drogon, Rhaegal, Viserion) to fulfill the prophecy. This also ties the three most point-of-view prominent characters together in the story\'s final conflict, which is structurally elegant.',
      seeds:{ canon:50, likely:900, unsure:1700, unlikely:1050, noway:550 },
    },
    {
      id:'faceless-arya-identity', name:'Arya Has Already Permanently Lost Part of Herself to the Faceless Men', category:'Wild Card',
      blurb:'Arya\'s training has changed her in ways she cannot fully recover from. The list she recites at night — names of people to kill — represents who she was. By the time she leaves Braavos, the Arya Stark who existed before may be irretrievably fractured. Rather than a triumphant "I am Arya Stark!" resolution, her arc may end with someone who is neither Arya nor No One — a third thing, more dangerous than either, using the Faceless Man\'s tools in service of the pack instinct she can\'t fully extinguish.',
      seeds:{ canon:55, likely:1100, unsure:1600, unlikely:800, noway:380 },
    },
    {
      id:'undying-visions-literal', name:'Every Vision in the House of the Undying is a Literal Prophecy', category:'Wild Card',
      blurb:'Dany\'s visions in the House of the Undying contain dozens of images fans have been parsing since ACoK: the blue rose in the Wall\'s ice (Jon Snow at Castle Black — the blue rose of Winterfell Lyanna loved), the slaying of a great grey beast (a dragon killing a direwolf?), Rhaegar naming a child "the prince that was promised." If every image is a literal future event, the chapter is the single densest prophecy in the series — and most of it has not yet come to pass.',
      seeds:{ canon:55, likely:1000, unsure:1800, unlikely:900, noway:420 },
    },
    {
      id:'ghost-jon-soul', name:'Ghost Carries Jon\'s Consciousness While He Is Dead', category:'Wild Card',
      blurb:'Jon\'s final chapter ends with his consciousness fading and "Ghost" being the last word he thinks. Every major Stark warg was told that skinchanging into an animal at the moment of death could preserve their consciousness — but it would fade over time. Jon, an untrained but powerful warg, may have fled into Ghost at the moment of the assassination. While his body is preserved in ice, Jon exists as Ghost — which would explain why Ghost has been kept alive and uninjured at the Wall.',
      seeds:{ canon:60, likely:900, unsure:1600, unlikely:1000, noway:520 },
    },

  ];

})();
