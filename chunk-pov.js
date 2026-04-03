// CHUNK — POV chapter counts per book
(function(){
  // Keys match window.CHARS entry IDs
  // Book index: 0=AGoT, 1=ACoK, 2=ASoS, 3=AFfC, 4=ADwD
  var povData = {
    'ned-stark':          { 0: 15 },
    'catelyn-stark':      { 0: 11, 1: 7, 2: 7 },
    'bran-stark':         { 0: 7,  1: 7, 2: 4, 4: 3 },
    'jon-snow':           { 0: 9,  1: 8, 2: 12, 4: 13 },
    'sansa-stark':        { 0: 6,  1: 8, 2: 7, 3: 3 },
    'arya-stark':         { 0: 5,  1: 12, 2: 13, 3: 3 },
    'daenerys':           { 0: 10, 1: 5, 2: 6, 4: 10 },
    'tyrion-lannister':   { 0: 9,  1: 15, 2: 11, 4: 12 },
    'theon-greyjoy':      { 1: 6,  4: 7 },
    'davos-seaworth':     { 1: 3,  2: 6, 4: 4 },
    'jaime-lannister':    { 2: 9,  3: 7, 4: 1 },
    'samwell-tarly':      { 2: 5,  3: 5 },
    'cersei-lannister':   { 3: 10, 4: 2 },
    'brienne':            { 3: 8 },
    'melisandre':         { 4: 1 },
    'barristan-selmy':    { 4: 4 }
  };

  for (var id in povData) {
    if (!window.CHARS || !window.CHARS[id]) continue;
    window.CHARS[id].pov = povData[id];
  }
})();
