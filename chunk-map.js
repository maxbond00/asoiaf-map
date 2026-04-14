// ═══════════════════════════════════════════════════════════════════════════════
// CHUNK MAP — Leaflet.js map using Quartermaester tile infrastructure
// Tiles served from https://quartermaester.info/fsm/{quadtree}.jpg
// Coordinate system: EPSG:3857 (Web Mercator) — same as Quartermaester/Google Maps
// ═══════════════════════════════════════════════════════════════════════════════
(function(){
'use strict';

function initLeafletMap(){
  const container = document.getElementById('leaflet-map');
  if(!container){ setTimeout(initLeafletMap, 50); return; }
  if(typeof L === 'undefined'){ setTimeout(initLeafletMap, 50); return; }

  // ── Custom tile layer using Quartermaester's quadtree tile coding ────────
  // Quartermaester tiles use the Google Maps quadkey system:
  //   t.jpg = zoom 0 root; tq/tr/tt/ts = zoom 1 quadrants, etc.
  //   q=NW, r=NE, t=SW, s=SE (identical to Google Maps quadtree)
  // This is fully compatible with Leaflet's x/y/z tile numbering.
  const QMTileLayer = L.TileLayer.extend({
    getTileUrl: function(coords){
      const z = coords.z;
      const tileRange = 1 << z;
      let cx = coords.x, cy = coords.y;
      if(cx < 0 || cx >= tileRange || cy < 0 || cy >= tileRange) return '';
      let code = 't';
      let size = tileRange;
      for(let i = 0; i < z; i++){
        size = size >> 1;
        if(cy < size){
          if(cx < size){ code += 'q'; }
          else          { code += 'r'; cx -= size; }
        } else {
          if(cx < size){ code += 't'; cy -= size; }
          else          { code += 's'; cx -= size; cy -= size; }
        }
      }
      return 'https://quartermaester.info/fsm/' + code + '.jpg';
    },
    createTile: function(coords, done){
      const img = document.createElement('img');
      img.setAttribute('role', 'presentation');
      const url = this.getTileUrl(coords);
      if(!url){ setTimeout(()=>done(null, img), 0); return img; }
      img.onload  = ()=>done(null, img);
      img.onerror = ()=>{ img.src=''; done(null, img); }; // silent 404
      img.src = url;
      return img;
    }
  });

  // ── Initialise Leaflet map ───────────────────────────────────────────────
  const map = L.map('leaflet-map', {
    center:             [22, -105],   // roughly centre of Westeros
    zoom:               4,
    minZoom:            2,
    maxZoom:            5,
    zoomControl:        false,        // we supply our own +/− buttons
    attributionControl: false,
    zoomSnap:           0.5,
    zoomDelta:          0.5,
  });

  new QMTileLayer('', {
    tileSize:      256,
    minZoom:       2,
    maxZoom:       5,
    noWrap:        true,
    keepBuffer:    2,
  }).addTo(map);

  // Expose map globally so index.html render functions can call latLngToContainerPoint
  window._leafMap = map;

  // ── Re-render character overlay whenever the view changes ───────────────
  map.on('move zoom moveend zoomend', function(){
    if(window.render)          window.render();
    if(window.buildLocHitboxes) window.buildLocHitboxes();
  });

  // Sync SVG overlay size on container resize
  map.on('resize', function(){
    const svg = document.getElementById('world-svg');
    if(!svg) return;
    const sz = map.getSize();
    svg.setAttribute('width',  sz.x);
    svg.setAttribute('height', sz.y);
  });

  // Initial render once map is ready
  map.whenReady(function(){
    if(window.render)           window.render();
    if(window.buildLocHitboxes)  window.buildLocHitboxes();
    if(window.drawMiniMap)       window.drawMiniMap();
  });
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', initLeafletMap);
} else {
  initLeafletMap();
}

})();
