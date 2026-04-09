// ═══════════════════════════════════════════════════════════════════════════
// FIREBASE CONFIG — asoiaf-map
// Shared vote counts across all visitors via Firebase Realtime Database.
// ═══════════════════════════════════════════════════════════════════════════
(function () {
  'use strict';

  const firebaseConfig = {
    apiKey:            'AIzaSyBJ6jTqNz82w2g87WQOHrfApmQzvMirHUw',
    authDomain:        'asoiaf-map.firebaseapp.com',
    databaseURL:       'https://asoiaf-map-default-rtdb.firebaseio.com',
    projectId:         'asoiaf-map',
    storageBucket:     'asoiaf-map.firebasestorage.app',
    messagingSenderId: '1028624176439',
    appId:             '1:1028624176439:web:2d3e01ef94121c638436b2',
  };

  try {
    if (typeof firebase !== 'undefined' && !firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      window._fbDB = firebase.database();
    }
  } catch (e) {
    console.warn('[asoiaf-map] Firebase init failed — votes will be localStorage-only:', e);
    window._fbDB = null;
  }
})();
