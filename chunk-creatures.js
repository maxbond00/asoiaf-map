// ═══════════════════════════════════════════════════════════════════════════════
// CHUNK 6 — CREATURES: Daenerys's Dragons · Stark Direwolves
// ═══════════════════════════════════════════════════════════════════════════════
(function(){

window.CREATURES = window.CREATURES || {};

Object.assign(window.CREATURES, {

  // ════════════════════════════════════════════════════════
  // DAENERYS'S DRAGONS
  // All three hatch at the end of AGoT (Vaes Dothrak funeral pyre)
  // ════════════════════════════════════════════════════════

  'drogon': {
    name: 'Drogon',
    type: 'dragon',
    icon: '🐉',
    color: '#1a0000',
    ringColor: '#c83030',
    desc: 'The largest and most fearsome of Daenerys\'s dragons — black and scarlet, named for Khal Drogo. Called "the Black Dread reborn." He bonds most strongly with Daenerys and carries her away from the fighting pits of Meereen when she is surrounded, vanishing into the Dothraki Sea.',
    waypoints: [
      { book: 0.95, loc: 'vaes-dothrak', confirmed: true  }, // hatches from the pyre
      { book: 1.4,  loc: 'qarth',        confirmed: true  },
      { book: 1.85, loc: 'summer-sea',   confirmed: false }, // sailing to Slaver's Bay
      { book: 2.1,  loc: 'astapor',      confirmed: true  },
      { book: 2.35, loc: 'yunkai',       confirmed: true  },
      { book: 2.55, loc: 'meereen',      confirmed: true  },
      { book: 3.0,  loc: 'meereen',      confirmed: true  },
      { book: 4.0,  loc: 'meereen',      confirmed: true  },
      { book: 4.75, loc: 'dothraki-sea', confirmed: true  }, // carries Dany away
    ],
  },

  'rhaegal': {
    name: 'Rhaegal',
    type: 'dragon',
    icon: '🐉',
    color: '#0a1a08',
    ringColor: '#4a9030',
    desc: 'Green-and-bronze dragon, named for Rhaegar Targaryen. Chained in the dungeons beneath the Great Pyramid of Meereen along with Viserion while Daenerys struggles to rule the city.',
    waypoints: [
      { book: 0.95, loc: 'vaes-dothrak', confirmed: true  },
      { book: 1.4,  loc: 'qarth',        confirmed: true  },
      { book: 1.85, loc: 'summer-sea',   confirmed: false },
      { book: 2.1,  loc: 'astapor',      confirmed: true  },
      { book: 2.35, loc: 'yunkai',       confirmed: true  },
      { book: 2.55, loc: 'meereen',      confirmed: true  },
      { book: 3.0,  loc: 'meereen',      confirmed: true  },
      { book: 4.0,  loc: 'meereen',      confirmed: true  },
    ],
  },

  'viserion': {
    name: 'Viserion',
    type: 'dragon',
    icon: '🐉',
    color: '#1a1500',
    ringColor: '#d4a820',
    desc: 'Cream-and-gold dragon, named for Viserys Targaryen. Chained beneath the Great Pyramid with Rhaegal. Viserion is described as more willing to be touched than his brothers, though still wild.',
    waypoints: [
      { book: 0.95, loc: 'vaes-dothrak', confirmed: true  },
      { book: 1.4,  loc: 'qarth',        confirmed: true  },
      { book: 1.85, loc: 'summer-sea',   confirmed: false },
      { book: 2.1,  loc: 'astapor',      confirmed: true  },
      { book: 2.35, loc: 'yunkai',       confirmed: true  },
      { book: 2.55, loc: 'meereen',      confirmed: true  },
      { book: 3.0,  loc: 'meereen',      confirmed: true  },
      { book: 4.0,  loc: 'meereen',      confirmed: true  },
    ],
  },

  // ════════════════════════════════════════════════════════
  // STARK DIREWOLVES
  // ════════════════════════════════════════════════════════

  'ghost': {
    name: 'Ghost',
    type: 'wolf',
    icon: '🐺',
    color: '#1e1e1e',
    ringColor: '#e8e8e8',
    desc: 'Jon Snow\'s albino direwolf — pure white with burning red eyes. Unlike his littermates, Ghost was born mute. He is calm and lethal, and stays with Jon through the Wall and beyond. Jon wargs into Ghost in his final moments after being stabbed by the mutineers.',
    waypoints: [
      { book: 0.0,  loc: 'winterfell',   confirmed: true },
      { book: 0.1,  loc: 'castle-black', confirmed: true },
      { book: 1.0,  loc: 'beyond-wall',  confirmed: true }, // ranging with Jon
      { book: 1.75, loc: 'castle-black', confirmed: true },
      { book: 2.0,  loc: 'castle-black', confirmed: true },
      { book: 3.0,  loc: 'castle-black', confirmed: true },
      { book: 4.0,  loc: 'castle-black', confirmed: true },
    ],
  },

  'grey-wind': {
    name: 'Grey Wind',
    type: 'wolf',
    icon: '🐺',
    color: '#2a2a3a',
    ringColor: '#8888b8',
    deathBook: 2,
    desc: 'Robb Stark\'s grey direwolf. Fought alongside Robb in every battle of the War of the Five Kings, inspiring terror in his enemies. Slain at the Red Wedding — his head was sewn onto Robb\'s body as a final desecration.',
    waypoints: [
      { book: 0.0,  loc: 'winterfell',   confirmed: true  },
      { book: 0.7,  loc: 'riverrun',     confirmed: true  },
      { book: 1.0,  loc: 'riverrun',     confirmed: true  },
      { book: 1.8,  loc: 'riverrun',     confirmed: true  },
      { book: 2.0,  loc: 'the-twins',    confirmed: true  }, // slain at Red Wedding
    ],
  },

  'lady': {
    name: 'Lady',
    type: 'wolf',
    icon: '🐺',
    color: '#2a1a3a',
    ringColor: '#9868c8',
    deathBook: 0,
    desc: 'Sansa Stark\'s gentle silver direwolf — the most refined and obedient of the pack. Executed on Cersei\'s orders after Nymeria bit Joffrey on the Kingsroad. Ned Stark had to kill her himself. She never even reached King\'s Landing.',
    waypoints: [
      { book: 0.0,  loc: 'winterfell',    confirmed: true  },
      { book: 0.18, loc: 'crossroads-inn', confirmed: false }, // killed on the Kingsroad
    ],
  },

  'nymeria': {
    name: 'Nymeria',
    type: 'wolf',
    icon: '🐺',
    color: '#2a1a08',
    ringColor: '#c89050',
    desc: 'Arya Stark\'s fierce tawny direwolf. Arya drove her away near the Trident to save her from Cersei\'s wrath after she bit Joffrey. Now leads an enormous wolf pack in the Riverlands — hundreds strong — and occasionally connects with Arya through wolf dreams.',
    waypoints: [
      { book: 0.0,  loc: 'winterfell', confirmed: true  },
      { book: 0.3,  loc: 'riverlands', confirmed: true  }, // released near the Trident
      { book: 1.0,  loc: 'riverlands', confirmed: true  },
      { book: 2.0,  loc: 'riverlands', confirmed: true  },
      { book: 3.0,  loc: 'riverlands', confirmed: true  },
      { book: 4.0,  loc: 'riverlands', confirmed: true  },
    ],
  },

  'shaggydog': {
    name: 'Shaggydog',
    type: 'wolf',
    icon: '🐺',
    color: '#060606',
    ringColor: '#2a6a2a',
    desc: 'Rickon Stark\'s wild black direwolf — the most savage of the litter, a reflection of Rickon\'s own untamed grief. Fled Winterfell with Rickon and Osha after Theon\'s seizure. Last known to be on the remote island of Skagos.',
    waypoints: [
      { book: 0.0,  loc: 'winterfell',  confirmed: true  },
      { book: 1.0,  loc: 'winterfell',  confirmed: true  },
      { book: 1.6,  loc: 'winterfell',  confirmed: false }, // fleeing after Theon takes Winterfell
      { book: 2.0,  loc: 'white-harbor',confirmed: false }, // heading north-east, toward Skagos
      { book: 3.0,  loc: 'white-harbor',confirmed: false },
      { book: 4.0,  loc: 'white-harbor',confirmed: false }, // Skagos is off-map; White Harbor nearest
    ],
  },

  'summer': {
    name: 'Summer',
    type: 'wolf',
    icon: '🐺',
    color: '#1c1508',
    ringColor: '#c8900a',
    desc: 'Bran Stark\'s tawny direwolf. Bran wargs into Summer constantly after his fall, experiencing the world through his senses. Summer travels with Bran beyond the Wall all the way to the cave of the Three-Eyed Crow beneath a weirwood grove.',
    waypoints: [
      { book: 0.0,  loc: 'winterfell',  confirmed: true },
      { book: 1.0,  loc: 'winterfell',  confirmed: true },
      { book: 1.5,  loc: 'winterfell',  confirmed: true },
      { book: 2.0,  loc: 'beyond-wall', confirmed: true },
      { book: 3.0,  loc: 'beyond-wall', confirmed: true },
      { book: 4.0,  loc: 'beyond-wall', confirmed: true },
    ],
  },

}); // end Object.assign

})();
