// ═══════════════════════════════════════════════════════════════════════════════
// CHUNK MAP — Leaflet.js map using Quartermaester tile infrastructure
// Tiles served from https://quartermaester.info/fsm/{quadtree}.jpg
// ═══════════════════════════════════════════════════════════════════════════════
(function(){
'use strict';

function initLeafletMap(){
  const container = document.getElementById('leaflet-map');
  if(!container){ setTimeout(initLeafletMap, 50); return; }
  if(typeof L === 'undefined'){ setTimeout(initLeafletMap, 50); return; }

  // ── Custom tile layer using Quartermaester's quadtree tile coding ────────
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
      img.onerror = ()=>{ img.src=''; done(null, img); };
      img.src = url;
      return img;
    }
  });

  // ── Map bounds — clamp to the illustrated known-world extent ────────────
  // The QM map covers: north pole → Land of Always Winter, south → Summer Sea,
  // west → Sunset Sea, east → Far Essos / Asshai.
  // These bounds prevent panning into the void where no tiles exist.
  const WORLD_BOUNDS = L.latLngBounds(
    L.latLng(-85.05, -185),   // SW — Sunset Sea western edge
    L.latLng( 85.05,  185)    // NE — Far Essos eastern edge
  );

  // ── Initialise Leaflet map ───────────────────────────────────────────────
  const map = L.map('leaflet-map', {
    center:              [22, -105],
    zoom:                4,
    minZoom:             2,
    maxZoom:             5,
    zoomControl:         false,
    attributionControl:  false,
    // Snappy zoom — no fractional steps, instant response
    zoomSnap:            1,
    zoomDelta:           1,
    // Disable zoom animation for instant feel (tiles swap immediately)
    zoomAnimation:       false,
    // Faster wheel response
    wheelPxPerZoomLevel: 60,
    // Clamp pan to map bounds
    maxBounds:           WORLD_BOUNDS,
    maxBoundsViscosity:  1.0,   // hard clamp (no rubber-band)
    // Keep extra tiles in buffer to reduce blank flash during pan
    keepBuffer:          4,
  });

  new QMTileLayer('', {
    tileSize:      256,
    minZoom:       2,
    maxZoom:       5,
    noWrap:        true,
    keepBuffer:    4,
    // Load tiles eagerly at next zoom level to reduce pop-in
    updateWhenIdle: false,
    updateWhenZooming: false,
  }).addTo(map);

  window._leafMap = map;

  // ── Throttled overlay re-render ─────────────────────────────────────────
  // During continuous pan we re-render every frame via rAF.
  // On moveend/zoomend we do a clean final render + hitboxes.
  let _rafPending = false;
  function schedRender(){
    if(_rafPending) return;
    _rafPending = true;
    requestAnimationFrame(()=>{
      _rafPending = false;
      if(window.render) window.render();
    });
  }

  map.on('move', schedRender);
  map.on('zoom', schedRender);
  map.on('moveend zoomend', function(){
    if(window.render)           window.render();
    if(window.buildLocHitboxes) window.buildLocHitboxes();
    if(window.drawMiniMap)      window.drawMiniMap();
  });

  // Sync SVG overlay size on container resize
  map.on('resize', function(){
    if(window.render)           window.render();
    if(window.buildLocHitboxes) window.buildLocHitboxes();
  });

  // Initial render once map is ready
  map.whenReady(function(){
    if(window.render)           window.render();
    if(window.buildLocHitboxes) window.buildLocHitboxes();
    if(window.drawMiniMap)      window.drawMiniMap();
  });
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', initLeafletMap);
} else {
  initLeafletMap();
}

})();
