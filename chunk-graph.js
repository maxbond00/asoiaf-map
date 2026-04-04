// ═══════════════════════════════════════════════════════════════════════════════
// CHUNK — RELATIONS GRAPH: force-directed character relationship visualisation
// ═══════════════════════════════════════════════════════════════════════════════
(function(){

const HOUSE_COL = {
  stark:'#5a6070', lannister:'#c8981a', baratheon:'#b08018',
  targaryen:'#c83030', tyrell:'#508030', martell:'#c87020',
  greyjoy:'#4a5878', tully:'#2860b0', arryn:'#3888d0',
  bolton:'#880808', mormont:'#406848', nighswatch:'#505050',
  freefolk:'#607060', none:'#888880', sand:'#c07030', stannis:'#6a3030',
};

const REL_TYPE_COLORS = {
  'Wife':'#e878a0','Husband':'#e878a0','Twin / Lover':'#e878a0','Lover':'#e878a0',
  'Son':'#60a8e0','Daughter':'#60a8e0','Father':'#60a8e0','Mother':'#60a8e0',
  'Brother':'#70c070','Sister':'#70c070',
  'Best friend':'#c8c840','Friend':'#c8c840','Advisor':'#c8c840',
  'Rival':'#c83030','Enemy':'#c83030','Nemesis / Killer':'#c83030','Hated brother':'#c83030',
  'Kingsguard':'#9870c0','Protector':'#9870c0','Sworn to':'#9870c0','Oath-bound companion':'#9870c0',
  'Warg-bond':'#80c880','Dragon-mother':'#c84020',
  default:'#8b6914',
};

function relColor(type){
  for(const k of Object.keys(REL_TYPE_COLORS)){
    if(type && type.toLowerCase().includes(k.toLowerCase())) return REL_TYPE_COLORS[k];
  }
  return REL_TYPE_COLORS.default;
}

// ── BUILD GRAPH DATA ────────────────────────────────────────────────────────
function buildGraph(){
  const nodeMap = {};   // id -> node object
  const edgeSet = {};   // "a|b" -> edge object (deduplication)
  const edges   = [];

  const allSources = {...(window.CHARS||{}), ...(window.CREATURES||{})};

  // Collect all character/creature ids that appear in any relations list
  Object.entries(allSources).forEach(([id, ch]) => {
    if(!ch.relations) return;
    if(!nodeMap[id]) nodeMap[id] = { id, ch, x:0, y:0, vx:0, vy:0 };
    ch.relations.forEach(r => {
      const rid = r.id;
      const rc = allSources[rid];
      if(!rc) return;
      if(!nodeMap[rid]) nodeMap[rid] = { id:rid, ch:rc, x:0, y:0, vx:0, vy:0 };
      const key = [id, rid].sort().join('|');
      if(!edgeSet[key]){
        edgeSet[key] = { source:id, target:rid, types:[r.type] };
        edges.push(edgeSet[key]);
      } else {
        if(!edgeSet[key].types.includes(r.type)) edgeSet[key].types.push(r.type);
      }
    });
  });

  const nodes = Object.values(nodeMap);

  // Arrange initial positions on a circle so simulation converges faster
  const R = Math.min(300, 40 * nodes.length / (2*Math.PI));
  nodes.forEach((n, i) => {
    const ang = (i / nodes.length) * 2 * Math.PI;
    n.x = 500 + R * Math.cos(ang) + (Math.random()-0.5)*30;
    n.y = 380 + R * Math.sin(ang) + (Math.random()-0.5)*30;
  });

  return { nodes, edges };
}

// ── FORCE SIMULATION ─────────────────────────────────────────────────────────
// Runs LIVE via requestAnimationFrame so nodes visibly settle on screen.
function startLiveSimulation(nodes, edges, nodeById, onTick){
  const REPULSE = 9000;
  const SPRING_LEN = 130;
  const SPRING_K   = 0.06;
  const CENTER_K   = 0.008;
  const DAMP       = 0.82;
  const MAX_ITER   = 380;
  const cx = 500, cy = 380;
  let iter = 0;

  function step(){
    if(iter >= MAX_ITER) return;
    // Run several physics steps per animation frame for speed early on
    const batch = iter < 80 ? 6 : iter < 200 ? 3 : 1;
    for(let b = 0; b < batch && iter < MAX_ITER; b++, iter++){
      const alpha = Math.max(0.04, 1 - iter / MAX_ITER);

      for(let i = 0; i < nodes.length; i++){
        for(let j = i+1; j < nodes.length; j++){
          const a = nodes[i], b2 = nodes[j];
          const dx = b2.x - a.x, dy = b2.y - a.y;
          const d2 = dx*dx + dy*dy + 1;
          const f  = alpha * REPULSE / d2;
          const d  = Math.sqrt(d2);
          const nx = dx/d*f, ny = dy/d*f;
          a.vx -= nx; a.vy -= ny;
          b2.vx += nx; b2.vy += ny;
        }
      }

      edges.forEach(e => {
        const a = nodeById[e.source], b2 = nodeById[e.target];
        if(!a || !b2) return;
        const dx = b2.x - a.x, dy = b2.y - a.y;
        const d  = Math.sqrt(dx*dx + dy*dy) || 1;
        const f  = alpha * SPRING_K * (d - SPRING_LEN) / d;
        a.vx += dx*f; a.vy += dy*f;
        b2.vx -= dx*f; b2.vy -= dy*f;
      });

      nodes.forEach(n => {
        n.vx += alpha * CENTER_K * (cx - n.x);
        n.vy += alpha * CENTER_K * (cy - n.y);
        n.vx *= DAMP; n.vy *= DAMP;
        n.x  += n.vx; n.y  += n.vy;
      });
    }

    onTick();
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ── SVG HELPERS ──────────────────────────────────────────────────────────────
const NS = 'http://www.w3.org/2000/svg';
function mk(tag, attrs){
  const el = document.createElementNS(NS, tag);
  Object.entries(attrs||{}).forEach(([k,v]) => el.setAttribute(k,v));
  return el;
}

// ── MAIN INIT FUNCTION (called by switchTab) ─────────────────────────────────
let graphReady = false;

window.initRelationsGraph = function(){
  if(graphReady) return;
  graphReady = true;

  const wrap = document.getElementById('graph-canvas-wrap');
  if(!wrap) return;

  const { nodes, edges } = buildGraph();

  // Build edge lookup per node for hover highlighting
  const adjMap = {};
  nodes.forEach(n => { adjMap[n.id] = new Set(); });
  edges.forEach(e => { adjMap[e.source].add(e.target); adjMap[e.target].add(e.source); });

  // ── Build SVG ────────────────────────────────────────────────────────────
  const svgW = 1000, svgH = 760;
  const svg = mk('svg', {
    id:'graph-svg',
    viewBox:`0 0 ${svgW} ${svgH}`,
    width:'100%', height:'100%',
    style:'cursor:grab;display:block;'
  });

  // Defs for arrowheads
  const defs = mk('defs');
  const marker = mk('marker', {id:'arr',markerWidth:'8',markerHeight:'8',refX:'7',refY:'3',orient:'auto'});
  marker.appendChild(mk('path',{d:'M0,0 L0,6 L8,3 z',fill:'rgba(139,105,20,0.5)'}));
  defs.appendChild(marker);

  // Gradient definitions per house (for node fills)
  Object.entries(HOUSE_COL).forEach(([house, col]) => {
    const rg = mk('radialGradient',{id:`gg-${house}`,cx:'40%',cy:'35%'});
    const s1 = mk('stop',{offset:'0%'}); s1.setAttribute('stop-color', lighten(col,40));
    const s2 = mk('stop',{offset:'100%'}); s2.setAttribute('stop-color', col);
    rg.appendChild(s1); rg.appendChild(s2); defs.appendChild(rg);
  });
  svg.appendChild(defs);

  // Clip paths for photo nodes
  const clipDefs = mk('g',{id:'g-clip-defs'});
  svg.appendChild(clipDefs);

  let gxf = mk('g',{id:'graph-xf'});
  svg.appendChild(gxf);

  const edgeG = mk('g',{id:'graph-edges'}); gxf.appendChild(edgeG);
  const nodeG = mk('g',{id:'graph-nodes'}); gxf.appendChild(nodeG);
  const edgeLabelG = mk('g',{id:'graph-edge-labels','pointer-events':'none'}); gxf.appendChild(edgeLabelG);
  const labelG = mk('g',{id:'graph-labels','pointer-events':'none'}); gxf.appendChild(labelG);

  // Node radius helper
  const nodeById = {};
  nodes.forEach(n => { nodeById[n.id] = n; });

  // ── Draw edges ──────────────────────────────────────────────────────────
  const edgeEls = new Map();
  edges.forEach(e => {
    const a = nodeById[e.source], b = nodeById[e.target];
    if(!a || !b) return;
    const col = relColor(e.types[0]);
    const line = mk('line',{
      x1:a.x, y1:a.y, x2:b.x, y2:b.y,
      stroke: col, 'stroke-width':'1.5',
      'stroke-opacity':'0.45',
      'marker-end':'url(#arr)',
      'data-src':e.source, 'data-tgt':e.target,
    });
    edgeG.appendChild(line);
    edgeEls.set(`${e.source}|${e.target}`, line);

    // Edge label at midpoint
    const mx = (a.x+b.x)/2, my = (a.y+b.y)/2;
    const lbl = mk('text',{
      x:mx, y:my-5,
      'text-anchor':'middle',
      'font-size':'7.5',
      fill: col,
      opacity:'0',
      'font-family':"'Palatino Linotype',serif",
      'data-edge':`${e.source}|${e.target}`,
    });
    lbl.textContent = e.types.join(' / ');
    edgeLabelG.appendChild(lbl);
  });

  // ── Draw nodes ──────────────────────────────────────────────────────────
  const NODE_R = 18;
  const nodeEls = new Map();

  nodes.forEach(n => {
    const ch = n.ch;
    const house = ch.house||'none';
    const col = HOUSE_COL[house]||'#888';
    const gradId = `gg-${house}`;

    const grp = mk('g',{'data-node':n.id, style:'cursor:pointer'});

    // Outer ring
    const ring = mk('circle',{
      cx:n.x, cy:n.y, r:NODE_R+2.5,
      fill:`url(#${gradId})`,
      stroke: col, 'stroke-width':'2',
      'data-base-stroke':col,
    });
    grp.appendChild(ring);

    if(ch.photoUrl){
      const cpId = `gcp-${n.id}`;
      if(!document.getElementById(cpId)){
        const cp = mk('clipPath',{id:cpId});
        cp.appendChild(mk('circle',{cx:n.x, cy:n.y, r:NODE_R}));
        clipDefs.appendChild(cp);
      }
      grp.appendChild(mk('image',{
        href:ch.photoUrl, x:n.x-NODE_R, y:n.y-NODE_R,
        width:NODE_R*2, height:NODE_R*2,
        'clip-path':`url(#gcp-${n.id})`,
        'preserveAspectRatio':'xMidYMin slice',
      }));
    } else {
      const inner = mk('circle',{cx:n.x, cy:n.y, r:NODE_R, fill:`url(#${gradId})`});
      grp.appendChild(inner);
      const init = mk('text',{
        x:n.x, y:n.y,
        'text-anchor':'middle','dominant-baseline':'central',
        'font-size':'10','fill':'#fff','font-weight':'bold',
        'font-family':"'Palatino Linotype',serif",
      });
      init.textContent = ch.initial || (ch.name||'?').charAt(0);
      grp.appendChild(init);
    }

    // King crown
    if(ch.isKing){
      const cr = mk('text',{x:n.x,y:n.y-(NODE_R+3),'text-anchor':'middle','font-size':'12','dominant-baseline':'auto'});
      cr.textContent='👑'; grp.appendChild(cr);
    }

    // Name label
    const nameLbl = mk('text',{
      x:n.x, y:n.y + NODE_R + 11,
      'text-anchor':'middle', 'font-size':'8.5',
      fill:'#d4a820', 'font-family':"'Palatino Linotype',serif",
      'paint-order':'stroke','stroke':'#000','stroke-width':'2.5',
    });
    nameLbl.textContent = (ch.name||n.id).split(' ').slice(0,2).join(' ');
    labelG.appendChild(nameLbl);

    // Interaction
    grp.addEventListener('mouseenter', () => hoverNode(n.id, ring));
    grp.addEventListener('mouseleave', () => unhoverAll());
    grp.addEventListener('click', e => {
      e.stopPropagation();
      if(window.openPanel) window.openPanel(n.id);
    });

    // Drag support
    let draggingNode = false, ndx=0, ndy=0;
    grp.addEventListener('mousedown', e => {
      e.stopPropagation();
      draggingNode = true;
      const svgPt = svgPoint(svg, e.clientX, e.clientY, panState);
      ndx = svgPt.x - n.x;
      ndy = svgPt.y - n.y;
    });
    window.addEventListener('mousemove', e => {
      if(!draggingNode) return;
      const svgPt = svgPoint(svg, e.clientX, e.clientY, panState);
      const dx = svgPt.x - ndx - n.x;
      const dy = svgPt.y - ndy - n.y;
      n.x += dx; n.y += dy;
      updatePositions();
    });
    window.addEventListener('mouseup', () => { draggingNode = false; });

    nodeG.appendChild(grp);
    nodeEls.set(n.id, { grp, ring });
  });

  // ── HOVER LOGIC ──────────────────────────────────────────────────────────
  function hoverNode(id, ring){
    const neighbours = adjMap[id]||new Set();

    // Dim unrelated nodes
    nodeEls.forEach((els, nid) => {
      const connected = nid===id || neighbours.has(nid);
      els.grp.style.opacity = connected ? '1' : '0.18';
    });
    // Dim unrelated edges + show labels for connected edges
    edgeG.querySelectorAll('line').forEach(line => {
      const s=line.dataset.src, t=line.dataset.tgt;
      const connected = s===id||t===id;
      line.style.opacity = connected ? '1' : '0.06';
      if(connected){ line.setAttribute('stroke-opacity','0.9'); line.setAttribute('stroke-width','2.2'); }
    });
    edgeLabelG.querySelectorAll('text').forEach(lbl => {
      const eid = lbl.dataset.edge||'';
      const [s,t] = eid.split('|');
      lbl.setAttribute('opacity', (s===id||t===id) ? '1' : '0');
    });
    // Highlight this node's ring
    ring.setAttribute('stroke','#d4a820');
    ring.setAttribute('stroke-width','3.5');
  }

  function unhoverAll(){
    nodeEls.forEach(({grp, ring}) => {
      grp.style.opacity = '1';
      const baseStroke = ring.getAttribute('data-base-stroke')||'#8b6914';
      ring.setAttribute('stroke', baseStroke);
      ring.setAttribute('stroke-width','2');
    });
    edgeG.querySelectorAll('line').forEach(line => {
      line.style.opacity = '1';
      line.setAttribute('stroke-opacity','0.45');
      line.setAttribute('stroke-width','1.5');
    });
    edgeLabelG.querySelectorAll('text').forEach(lbl => lbl.setAttribute('opacity','0'));
  }

  // ── POSITION UPDATE (after drag / simulation) ─────────────────────────────
  function updatePositions(){
    nodes.forEach(n => {
      const els = nodeEls.get(n.id);
      if(!els) return;
      const grp = els.grp;
      // Update ring, image, text positions
      const circ = grp.querySelector('circle');
      if(circ){ circ.setAttribute('cx',n.x); circ.setAttribute('cy',n.y); }
      grp.querySelectorAll('circle').forEach(c=>{c.setAttribute('cx',n.x);c.setAttribute('cy',n.y);});
      grp.querySelectorAll('image').forEach(img=>{img.setAttribute('x',n.x-NODE_R);img.setAttribute('y',n.y-NODE_R);});
      grp.querySelectorAll('text').forEach(t=>{
        t.setAttribute('x',n.x);
        const isKing=t.textContent==='👑';
        if(isKing) t.setAttribute('y',n.y-(NODE_R+3));
        else t.setAttribute('y',n.y);
      });

      // Update clip path
      const cp = document.getElementById(`gcp-${n.id}`);
      if(cp){ const c=cp.querySelector('circle'); if(c){c.setAttribute('cx',n.x);c.setAttribute('cy',n.y);} }
    });

    // Update name labels
    labelG.querySelectorAll('text').forEach((lbl,i)=>{
      if(nodes[i]){ lbl.setAttribute('x',nodes[i].x); lbl.setAttribute('y',nodes[i].y+NODE_R+11); }
    });

    // Update edges
    edgeG.querySelectorAll('line').forEach(line=>{
      const s=nodeById[line.dataset.src], t=nodeById[line.dataset.tgt];
      if(s&&t){ line.setAttribute('x1',s.x);line.setAttribute('y1',s.y);line.setAttribute('x2',t.x);line.setAttribute('y2',t.y); }
    });

    // Update edge labels
    edgeLabelG.querySelectorAll('text').forEach(lbl=>{
      const eid=lbl.dataset.edge||'';
      const [sid,tid]=eid.split('|');
      const s=nodeById[sid],t=nodeById[tid];
      if(s&&t){ lbl.setAttribute('x',(s.x+t.x)/2);lbl.setAttribute('y',(s.y+t.y)/2-5); }
    });
  }

  // ── PAN & ZOOM ───────────────────────────────────────────────────────────
  let panState = { x:0, y:0, s:1 };
  let panDragging=false, panPt={x:0,y:0}, panOrigin={x:0,y:0};

  svg.addEventListener('mousedown', e=>{
    if(e.target.closest('[data-node]')) return;
    panDragging=true;
    panPt={x:e.clientX,y:e.clientY};
    panOrigin={x:panState.x,y:panState.y};
    svg.style.cursor='grabbing';
  });
  window.addEventListener('mousemove', e=>{
    if(!panDragging) return;
    panState.x = panOrigin.x+(e.clientX-panPt.x);
    panState.y = panOrigin.y+(e.clientY-panPt.y);
    applyPan();
  });
  window.addEventListener('mouseup', ()=>{ panDragging=false; svg.style.cursor='grab'; });

  wrap.addEventListener('wheel', e=>{
    e.preventDefault();
    const f = e.deltaY<0?1.12:0.9;
    const r = svg.getBoundingClientRect();
    const mx=e.clientX-r.left, my=e.clientY-r.top;
    const ns = Math.max(0.3, Math.min(5, panState.s*f));
    const sc = ns/panState.s;
    panState.x = mx - sc*(mx-panState.x);
    panState.y = my - sc*(my-panState.y);
    panState.s = ns;
    applyPan();
  },{passive:false});

  function applyPan(){
    gxf.setAttribute('transform',`translate(${panState.x},${panState.y}) scale(${panState.s})`);
  }

  // Helper: convert screen coords to SVG graph coords
  function svgPoint(svgEl, cx, cy, pan){
    const r = svgEl.getBoundingClientRect();
    const sx = (cx - r.left - pan.x) / pan.s;
    const sy = (cy - r.top  - pan.y) / pan.s;
    return {x:sx, y:sy};
  }

  // ── LEGEND ───────────────────────────────────────────────────────────────
  const legendWrap = document.getElementById('graph-legend');
  if(legendWrap){
    const cats = [
      {label:'Family',       color:'#60a8e0'},
      {label:'Romantic',     color:'#e878a0'},
      {label:'Alliance',     color:'#c8c840'},
      {label:'Brotherhood',  color:'#70c070'},
      {label:'Rival/Enemy',  color:'#c83030'},
      {label:'Sworn bond',   color:'#9870c0'},
      {label:'Warg bond',    color:'#80c880'},
      {label:'Other',        color:'#8b6914'},
    ];
    legendWrap.innerHTML = cats.map(c =>
      `<div style="display:flex;align-items:center;gap:6px;margin:3px 0">
        <div style="width:20px;height:2px;background:${c.color};border-radius:1px"></div>
        <span style="font-size:10px;color:#8b6914">${c.label}</span>
      </div>`
    ).join('');
  }

  // ── NODE COUNT ───────────────────────────────────────────────────────────
  const countEl = document.getElementById('graph-count');
  if(countEl) countEl.textContent = `${nodes.length} characters · ${edges.length} connections`;

  // ── HOUSE FILTER ─────────────────────────────────────────────────────────
  window.filterGraphByHouse = function(house){
    nodes.forEach(n => {
      const els = nodeEls.get(n.id);
      if(!els) return;
      const show = house==='all' || n.ch.house===house;
      els.grp.style.opacity = show ? '1' : '0.08';
    });
    edgeG.querySelectorAll('line').forEach(line=>{
      const s=nodeById[line.dataset.src], t=nodeById[line.dataset.tgt];
      const show = house==='all' ||
        (s&&s.ch.house===house) || (t&&t.ch.house===house);
      line.style.opacity = show ? '1' : '0.04';
    });
    // Update active button
    document.querySelectorAll('.ghf-btn').forEach(b=>{
      b.classList.toggle('active', b.dataset.house===house);
    });
  };

  // ── RESET VIEW ───────────────────────────────────────────────────────────
  window.resetGraphView = function(){
    panState={x:0,y:0,s:1}; applyPan();
  };

  wrap.appendChild(svg);

  // Start live physics simulation — nodes visibly settle after render
  startLiveSimulation(nodes, edges, nodeById, updatePositions);
};

// ── COLOUR HELPERS ───────────────────────────────────────────────────────────
function lighten(hex, amount){
  const n = parseInt(hex.slice(1),16);
  const r = Math.min(255,(n>>16)+amount);
  const g = Math.min(255,((n>>8)&0xff)+amount);
  const b = Math.min(255,(n&0xff)+amount);
  return `#${((r<<16)|(g<<8)|b).toString(16).padStart(6,'0')}`;
}

})();
