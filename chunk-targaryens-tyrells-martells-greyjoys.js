// ═══════════════════════════════════════════════════════════════════════════════
// CHUNK 3 — TARGARYENS · TYRELLS · MARTELLS · GREYJOYS · KEY INDEPENDENTS
// ═══════════════════════════════════════════════════════════════════════════════
(function() {

Object.assign(window.CHARS, {

  // ════════════════════════════════════════════════════════
  // HOUSE TARGARYEN
  // ════════════════════════════════════════════════════════

  'daenerys': {
    name: 'Daenerys Targaryen',
    initial: 'D',
    gender: 'f',
    house: 'targaryen',
    houseLabel: 'House Targaryen — Queen of Meereen, Mother of Dragons',
    aliases: [
      'Dany', 'Khaleesi', 'Mhysa', 'Mother of Dragons',
      'The Unburnt', 'Breaker of Chains', 'Daenerys Stormborn'
    ],
    portrait: 'daenerys',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BMjA4MzIxMTQwMF5BMl5BanBnXkFtZTcwMzY2NDg1Nw@@._V1._SX100_SY140_.jpg',
    isKing: true,
    bio: 'Last surviving child of the Mad King Aerys II Targaryen. Sold to Khal Drogo, she transforms from a frightened girl into a powerful queen. Hatches three dragons — Drogon, Rhaegal, and Viserion — in a funeral pyre. Conquers Slaver\'s Bay and rules Meereen, attempting to learn to govern before reclaiming the Iron Throne.',
    bookBios: {
      0: 'Sold to Khal Drogo. Travels across the Dothraki Sea. Hatches three dragons from petrified eggs in Drogo\'s funeral pyre.',
      1: 'Travels through Qarth. Attempts to find ships to cross the Narrow Sea.',
      2: 'Conquers Astapor, frees its slaves. Takes Yunkai and Meereen. Decides to stay and rule Meereen.',
      3: 'Ruling Meereen as queen. Faces the Sons of the Harpy insurgency and political chaos.',
      4: 'Meereen under siege. Rides Drogon away from the fighting pits. Ends in the Dothraki Sea with Drogon.',
    },
    waypoints: [
      { book: 0.0,  loc: 'pentos',       confirmed: true  }, // AGoT opens in Pentos
      { book: 0.35, loc: 'dothraki-sea', confirmed: true  }, // riding east with Drogo
      { book: 0.5,  loc: 'vaes-dothrak', confirmed: true  }, // Dothraki holy city
      { book: 0.7,  loc: 'dothraki-sea', confirmed: true  }, // south toward Lhazar
      { book: 0.9,  loc: 'dothraki-sea', confirmed: true  }, // Drogo's pyre; dragons hatch
      { book: 1.0,  loc: 'dothraki-sea', confirmed: true  }, // ACoK — heading to Qarth
      { book: 1.25, loc: 'red-waste',    confirmed: true  }, // crossing the Red Waste
      { book: 1.4,  loc: 'qarth',        confirmed: true  }, // reaches Qarth
      { book: 1.85, loc: 'summer-sea',   confirmed: false }, // leaves Qarth; sailing westward
      { book: 2.1,  loc: 'astapor',      confirmed: true  }, // ASoS — conquers Astapor
      { book: 2.35, loc: 'yunkai',       confirmed: true  }, // takes Yunkai
      { book: 2.55, loc: 'meereen',      confirmed: true  }, // conquers & decides to rule Meereen
      { book: 3.0,  loc: 'meereen',      confirmed: true  }, // AFfC — no chapters; still ruling
      { book: 4.0,  loc: 'meereen',      confirmed: true  }, // ADwD — besieged Meereen
      { book: 4.75, loc: 'dothraki-sea', confirmed: true  }, // rides Drogon away from the pits
    ],
  },

  'viserys': {
    name: 'Viserys Targaryen',
    initial: 'Vi',
    gender: 'm',
    house: 'targaryen',
    houseLabel: 'House Targaryen — "The Beggar King"',
    aliases: ['The Beggar King', 'The Boy Who Lived (mockingly)'],
    portrait: 'viserys',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BMTgwNzIxMTU1OV5BMl5BanBnXkFtZTcwNzI2ODg5NA@@._V1._SX100_SY140_.jpg',
    isKing: true,
    deathBook: 0,
    bio: 'Daenerys\'s older brother. Arrogant, cruel, and obsessed with reclaiming the Iron Throne. He sold Daenerys to Drogo in exchange for an army. His cruelty and impatience led to his death — Drogo poured molten gold over his head, giving him "the golden crown he wanted."',
    bookBios: {
      0: 'Travels with Daenerys and the Dothraki. Becomes violent and erratic. Killed by Khal Drogo with a crown of molten gold.',
    },
    waypoints: [
      { book: 0.0,  loc: 'pentos',       confirmed: true },
      { book: 0.45, loc: 'dothraki-sea', confirmed: true }, // riding with Drogo
      { book: 0.55, loc: 'vaes-dothrak', confirmed: true }, // dies here — molten gold crown
    ],
  },

  'khal-drogo': {
    name: 'Khal Drogo',
    initial: 'KD',
    gender: 'm',
    house: 'none',
    houseLabel: 'The Dothraki — Khal of the Great Khalasar',
    aliases: ['The Great Khal', 'The Stallion Who Mounts the World (prophesied)'],
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BMTQzMTE2MjczM15BMl5BanBnXkFtZTcwMDA5NDk4OQ@@._V1._SX100_SY140_.jpg',
    deathBook: 0,
    bio: 'The mightiest Khal of the Dothraki, with a khalasar of forty thousand warriors. Sold Daenerys\' hand in exchange by her brother Viserys. Despite a brutal beginning, he and Daenerys developed genuine love. A minor wound became infected; Daenerys allowed a maegi to use blood magic to save him, leaving him braindead. She smothered him to end his suffering.',
    bookBios: {
      0: 'Weds Daenerys at Pentos. Kills Viserys with molten gold. A festering wound and a maegi\'s blood magic leave him braindead; Daenerys smothers him.',
    },
    waypoints: [
      { book: 0.0,  loc: 'pentos',       confirmed: true },
      { book: 0.4,  loc: 'dothraki-sea', confirmed: true },
      { book: 0.55, loc: 'vaes-dothrak', confirmed: true },
      { book: 0.7,  loc: 'dothraki-sea', confirmed: true },
    ],
  },

  'jorah-mormont': {
    name: 'Jorah Mormont',
    initial: 'Jr',
    gender: 'm',
    house: 'mormont',
    houseLabel: 'House Mormont — exiled knight, sworn to Daenerys',
    aliases: ['Ser Jorah', 'Lord of Bear Island (stripped)'],
    portrait: 'jorah',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BMTkzNTcxMDI2NV5BMl5BanBnXkFtZTcwMzgxNzI4OQ@@._V1._CR225,437,407,405._SX100_SY140_.jpg',
    bio: 'Exiled from Westeros for selling poachers into slavery. Began as a spy for Robert, reporting on Daenerys, but fell in love with her and became her most devoted protector. Banished by Daenerys when his treachery was revealed. Contracted greyscale.',
    bookBios: {
      0: 'Serves as spy and protector to Daenerys among the Dothraki.',
      1: 'Continues with Daenerys through Qarth. His loyalty deepens.',
      2: 'Fights for Daenerys in Slaver\'s Bay. Confesses his spying; banished.',
      3: 'Wandering, heartbroken. Returns to try to win Daenerys back.',
      4: 'Captures Tyrion Lannister to bring to Daenerys. Contracts greyscale. Fights in the pits. Sent away to find a cure.',
    },
    waypoints: [
      { book: 0.0,  loc: 'pentos',       confirmed: true  },
      { book: 0.5,  loc: 'vaes-dothrak', confirmed: true  }, // with Drogo
      { book: 0.9,  loc: 'dothraki-sea', confirmed: true  }, // after Drogo's death
      { book: 1.35, loc: 'qarth',        confirmed: true  }, // reaches Qarth with Dany
      { book: 2.5,  loc: 'meereen',      confirmed: true  }, // serves Dany in Meereen
      { book: 2.95, loc: 'volantis',     confirmed: false }, // banished; wanders Essos
      { book: 3.5,  loc: 'volantis',     confirmed: false }, // still adrift
      { book: 4.1,  loc: 'meereen',      confirmed: true  }, // returns with Tyrion
    ],
  },

  'barristan-selmy': {
    name: 'Barristan Selmy',
    initial: 'Ba',
    gender: 'm',
    house: 'none',
    houseLabel: 'Kingsguard (dismissed) — Lord Commander of Daenerys\'s Queensguard',
    aliases: ['Bold Barristan', 'Arstan Whitebeard (alias)'],
    portrait: 'barristan',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BMTUyMTE0NjUxNV5BMl5BanBnXkFtZTcwOTA1ODg5NA@@._V1._SX100_SY140_.jpg',
    deathBook: 4,
    bio: 'The greatest living knight in Westeros. Served three kings on the Kingsguard before being dismissed by Joffrey. Traveled to Essos in disguise, found Daenerys, and became her Lord Commander. Ran Meereen in her absence. Killed in a Sons of the Harpy ambush.',
    bookBios: {
      0: 'Lord Commander of the Kingsguard. Dismissed by Joffrey.',
      1: 'Travels to Essos disguised as Arstan Whitebeard.',
      2: 'Reveals his identity to Daenerys; serves as her protector.',
      3: 'Commands Daenerys\'s Queensguard in Meereen.',
      4: 'Runs Meereen in Daenerys\'s absence. Kills Harpy agents. Slain in a Sons of the Harpy ambush.',
    },
    waypoints: [
      { book: 0.0,  loc: 'kings-landing', confirmed: true  }, // dismissed from Kingsguard
      { book: 0.5,  loc: 'narrow-sea',    confirmed: false }, // travelling to Essos in disguise
      { book: 1.0,  loc: 'qarth',         confirmed: false }, // as Arstan Whitebeard
      { book: 2.0,  loc: 'astapor',       confirmed: true  }, // reveals identity to Daenerys
      { book: 3.0,  loc: 'meereen',       confirmed: true  },
      { book: 4.0,  loc: 'meereen',       confirmed: true  },
    ],
  },

  'missandei': {
    name: 'Missandei',
    initial: 'Mi',
    gender: 'f',
    house: 'none',
    houseLabel: 'Handmaiden and Interpreter to Daenerys Targaryen',
    aliases: [],
    portrait: 'missandei',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BNTE5OTI0OTA0OV5BMl5BanBnXkFtZTcwODczOTAzOQ@@._V1._SX100_SY140_.jpg',
    bio: 'A former slave from Naath, translator of nineteen languages. Freed by Daenerys at Astapor, she becomes one of her most trusted confidantes and handmaidens.',
    bookBios: {
      2: 'Freed by Daenerys at Astapor; becomes her handmaiden and translator.',
      3: 'At Daenerys\'s side in Meereen.',
      4: 'Serving Daenerys in Meereen; close friend of Grey Worm.',
    },
    waypoints: [
      { book: 2, loc: 'astapor',  confirmed: true },
      { book: 3, loc: 'meereen', confirmed: true },
      { book: 4, loc: 'meereen', confirmed: true },
    ],
  },

  'grey-worm': {
    name: 'Grey Worm',
    initial: 'GW',
    gender: 'm',
    house: 'none',
    houseLabel: 'Commander of Daenerys\'s Unsullied',
    aliases: [],
    portrait: 'grey-worm',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BMjk3ZDJlNTQtZDBiMC00ODVhLTlmYmYtYzkxMDA0N2QxNDY0XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1._SX100_SY140_.jpg',
    bio: 'Commander of the Unsullied, freed slave soldiers. Devoted and disciplined warrior who leads Daenerys\'s army. Develops a bond with Missandei.',
    bookBios: {
      2: 'Freed by Daenerys at Astapor; leads the Unsullied.',
      3: 'Commands Daenerys\'s armies in Meereen.',
      4: 'Defends Meereen against the Sons of the Harpy and the besieging fleet.',
    },
    waypoints: [
      { book: 2, loc: 'astapor',  confirmed: true },
      { book: 3, loc: 'meereen', confirmed: true },
      { book: 4, loc: 'meereen', confirmed: true },
    ],
  },

  'illyrio-mopatis': {
    name: 'Illyrio Mopatis',
    initial: 'Il',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BMzM1OWY0ZmUtNWM5Ny00NzgzLWFhMmUtOWY1Njc3NmNkZmM1XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1._SX100_SY140_.jpg',
    gender: 'm',
    house: 'none',
    houseLabel: 'Magister of Pentos',
    aliases: [],
    portrait: 'illyrio',
    bio: 'Enormously wealthy cheese merchant and Magister of Pentos. Secret ally of Varys and the Targaryen restoration plot. Sheltered Viserys and Daenerys and arranged her marriage to Drogo. His true agenda — seating a controlled king on the Iron Throne — remains partly concealed.',
    bookBios: {
      0: 'Hosts Daenerys and Viserys in Pentos. Arranges her sale to Drogo.',
      3: 'Still in Pentos. Receives Tyrion after his flight from King\'s Landing.',
      4: 'In Pentos briefly with Tyrion before Tyrion journeys east.',
    },
    waypoints: [
      { book: 0, loc: 'pentos', confirmed: true },
      { book: 3, loc: 'pentos', confirmed: true },
      { book: 4, loc: 'pentos', confirmed: true },
    ],
  },

  // ════════════════════════════════════════════════════════
  // HOUSE TYRELL
  // ════════════════════════════════════════════════════════

  'olenna-tyrell': {
    name: 'Olenna Tyrell',
    initial: 'Ol',
    gender: 'f',
    house: 'tyrell',
    houseLabel: 'House Tyrell — Queen of Thorns',
    aliases: ['Queen of Thorns', 'The Queen of Thorns'],
    portrait: 'olenna',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BMTkxMjgwOTQ3Nl5BMl5BanBnXkFtZTcwMjE2NzE5OQ@@._V1._SX100_SY140_.jpg',
    bio: 'Sharp-tongued matriarch of House Tyrell, grandmother of Margaery and Loras. The true political power of Highgarden. Masterminded the poisoning of Joffrey at the Purple Wedding to protect Margaery from his cruelty.',
    bookBios: {
      1: 'Arrives in King\'s Landing to negotiate Margaery\'s betrothal to Renly, then Joffrey.',
      2: 'In King\'s Landing. Poisons Joffrey at his wedding feast.',
      3: 'In King\'s Landing. Retreats to Highgarden after Margaery\'s arrest.',
      4: 'Likely at Highgarden.',
    },
    waypoints: [
      { book: 1, loc: 'kings-landing', confirmed: true  },
      { book: 2, loc: 'kings-landing', confirmed: true  },
      { book: 3, loc: 'highgarden',    confirmed: false },
      { book: 4, loc: 'highgarden',    confirmed: false },
    ],
  },

  'margaery-tyrell': {
    name: 'Margaery Tyrell',
    initial: 'Mg',
    gender: 'f',
    house: 'tyrell',
    houseLabel: 'House Tyrell — Queen consort',
    aliases: ['The Little Queen', 'Queen Margaery'],
    portrait: 'margaery',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BMTkzODQ1MDg3NV5BMl5BanBnXkFtZTcwODA4NDk4OQ@@._V1._SX100_SY140_.jpg',
    isKing: true,
    bio: 'Granddaughter of Olenna, she was married to Renly Baratheon (marriage unconsummated), then betrothed to Joffrey, then married Tommen. A skilled political operator who cultivates the smallfolk\'s love. Imprisoned by the Faith Militant in AFfC.',
    bookBios: {
      1: 'Wife of Renly Baratheon. Flees to Highgarden after his death.',
      2: 'Betrothed to Joffrey. Comes to King\'s Landing.',
      3: 'Marries Joffrey, then Tommen after Joffrey\'s death. Arrested by the Faith Militant.',
      4: 'Imprisoned by the Faith Militant in King\'s Landing.',
    },
    waypoints: [
      { book: 1, loc: 'storms-end',    confirmed: true  },
      { book: 1, loc: 'highgarden',    confirmed: true  },
      { book: 2, loc: 'kings-landing', confirmed: true  },
      { book: 3, loc: 'kings-landing', confirmed: true  },
      { book: 4, loc: 'kings-landing', confirmed: true  },
    ],
  },

  'loras-tyrell': {
    name: 'Loras Tyrell',
    initial: 'Lo',
    gender: 'm',
    house: 'tyrell',
    houseLabel: 'House Tyrell — the Knight of Flowers',
    aliases: ['Knight of Flowers'],
    portrait: 'loras',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BNzcwNDAxZGMtODU1Mi00YzA2LWJhMzYtN2FjZjg2YWZlMTQ4XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1._SX100_SY140_.jpg',
    bio: 'The most celebrated tourney knight of his generation. Secret lover of Renly Baratheon. After Renly\'s death, his grief drives him toward reckless bravery. Severely wounded during the siege of Dragonstone.',
    bookBios: {
      0: 'Jousts at King\'s Landing. Renly\'s lover.',
      1: 'Mourns Renly. Joins Tywin\'s relief force at the Blackwater.',
      2: 'At King\'s Landing.',
      3: 'Commands the assault on Dragonstone. Severely burned; confined to a bed.',
      4: 'In the Great Sept of Baelor, imprisoned by the Faith. Near death from his wounds.',
    },
    waypoints: [
      { book: 0, loc: 'kings-landing', confirmed: true  },
      { book: 1, loc: 'kings-landing', confirmed: true  },
      { book: 3, loc: 'dragonstone',   confirmed: true  },
      { book: 4, loc: 'kings-landing', confirmed: true  },
    ],
  },

  'mace-tyrell': {
    name: 'Mace Tyrell',
    initial: 'Ma',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BNTcyZWFjZjItYmI4NS00ZDE2LTg4Y2YtYWJkYWI5MWJlNWFjXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1._SX100_SY140_.jpg',
    gender: 'm',
    house: 'tyrell',
    houseLabel: 'House Tyrell — Lord of Highgarden, Hand of the King',
    aliases: ['Lord Oaf of Highgarden (mockingly)'],
    portrait: 'mace-tyrell',
    bio: 'Lord of Highgarden and head of House Tyrell. A proud but not especially clever lord, his power comes from his armies and his family (especially his mother Olenna). Named Hand of the King under Tommen.',
    bookBios: {
      1: 'Commands the Tyrell army that rescues King\'s Landing at the Blackwater.',
      2: 'At King\'s Landing.',
      3: 'Allies firmly with the crown. Becomes Hand of the King.',
      4: 'Hand of the King. Sent on a diplomatic mission to Braavos.',
    },
    waypoints: [
      { book: 1, loc: 'kings-landing', confirmed: true  },
      { book: 4, loc: 'braavos',       confirmed: true  },
    ],
  },

  // ════════════════════════════════════════════════════════
  // HOUSE MARTELL
  // ════════════════════════════════════════════════════════

  'doran-martell': {
    name: 'Doran Martell',
    initial: 'Do',
    gender: 'm',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BZWU5NzJkNWMtYTM4MS00YmE2LWExYmItNDNiOTE3YzI5YzAxXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1._SX100_SY140_.jpg',
    house: 'martell',
    houseLabel: 'House Martell — Prince of Dorne',
    aliases: ['Prince Doran'],
    portrait: 'doran',
    bio: 'Prince of Dorne and older brother of Oberyn and Elia. Afflicted with gout and confined to a wheelchair. Patient, calculating, concealing a decades-long plan for Targaryen restoration and revenge against the Lannisters.',
    bookBios: {
      3: 'Rules from the Water Gardens. Tries to control his volatile Sand Snakes after Oberyn\'s death.',
      4: 'Reveals his secret Targaryen alliance to Arianne. Sends his son Quentyn to court Daenerys.',
    },
    waypoints: [
      { book: 3, loc: 'water-gardens', confirmed: true },
      { book: 4, loc: 'water-gardens', confirmed: true },
    ],
  },

  'oberyn-martell': {
    name: 'Oberyn Martell',
    initial: 'Ob',
    gender: 'm',
    house: 'martell',
    houseLabel: 'House Martell — the Red Viper of Dorne',
    aliases: ['The Red Viper', 'Prince Oberyn'],
    portrait: 'oberyn',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BZTJmYjViYjctYTU0My00NTJiLWE2YzUtOWZkNTg4MTZkZmEyXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1._SX100_SY140_.jpg',
    deathBook: 2,
    bio: 'Youngest prince of Dorne. Bisexual, brilliant, and deadly with a spear. His sister Elia was murdered by Gregor Clegane during the Sack of King\'s Landing. He champions Tyrion in trial by combat against Ser Gregor, but his obsession with a full confession costs him his life.',
    bookBios: {
      2: 'Arrives in King\'s Landing for Joffrey\'s wedding. Champions Tyrion. Mortally wounded by Ser Gregor Clegane, who crushes his skull.',
    },
    waypoints: [
      { book: 2, loc: 'kings-landing', confirmed: true },
    ],
  },

  'arianne-martell': {
    name: 'Arianne Martell',
    initial: 'Ar',
    gender: 'f',
    house: 'martell',
    houseLabel: 'House Martell — heir to Dorne',
    aliases: [],
    portrait: 'arianne',
    bio: 'Eldest child of Doran and heir to Dorne. Passionate, politically ambitious, and resentful of her father\'s secrecy. Tried to crown Myrcella Baratheon as queen; her plot failed, resulting in Myrcella\'s injury and her co-conspirators\' imprisonment.',
    bookBios: {
      3: 'Plots the Queenmaker scheme to crown Myrcella. Captured and imprisoned by her father. Learns of his true plans.',
      4: 'Reconciled with her father. Learning Doran\'s secret agenda.',
    },
    waypoints: [
      { book: 3, loc: 'sunspear',      confirmed: true },
      { book: 4, loc: 'water-gardens', confirmed: true },
    ],
  },

  'quentyn-martell': {
    name: 'Quentyn Martell',
    initial: 'Qu',
    gender: 'm',
    house: 'martell',
    houseLabel: 'House Martell',
    aliases: ['Frog (mockingly)'],
    portrait: 'default-male',
    deathBook: 4,
    bio: 'Second child of Doran. Sent secretly to Essos to court Daenerys Targaryen on behalf of his father\'s Targaryen alliance. Reaches Meereen but Daenerys has married Hizdahr. Attempts to claim a dragon and is burned alive by Rhaegal and Viserion.',
    bookBios: {
      4: 'Travels to Meereen with two Dornish companions. Proposes to Daenerys on his father\'s behalf. Attempts to tame a dragon and is fatally burned.',
    },
    waypoints: [
      { book: 4, loc: 'meereen', confirmed: true },
    ],
  },

  'nymeria-sand': {
    name: 'Nymeria Sand',
    initial: 'Ny',
    gender: 'f',
    house: 'sand',
    houseLabel: 'House Martell — Sand Snake, daughter of Oberyn',
    aliases: ['Lady Nym'],
    portrait: 'nymeria-sand',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BNDZmN2FkMTEtMmMyYy00ZTcwLWE3MGQtNGU1NzY4MjAxNjQ0XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1._SX100_SY140_.jpg',
    bio: 'Second of the Sand Snakes, daughters of Oberyn Martell. Uses a whip. Deadly, calculating, and beautiful. Imprisoned by Doran after Oberyn\'s death when she pushes for war.',
    bookBios: {
      3: 'Demands war against the Lannisters. Imprisoned at Sunspear.',
      4: 'Released by Doran. Sent to King\'s Landing with Obara to pursue their father\'s agenda.',
    },
    waypoints: [
      { book: 3.0,  loc: 'sunspear',      confirmed: true  }, // imprisoned
      { book: 3.85, loc: 'dorne',         confirmed: false }, // released; riding north
      { book: 4.3,  loc: 'kings-landing', confirmed: false }, // infiltrates the capital
    ],
  },

  'obara-sand': {
    name: 'Obara Sand',
    initial: 'Oba',
    gender: 'f',
    house: 'sand',
    houseLabel: 'House Martell — Sand Snake, daughter of Oberyn',
    aliases: [],
    portrait: 'obara-sand',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BOWU3OTRmYmItZTZiYi00Mjk1LTk2NTItMzBjZmQ3NDZhMDMyXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1._SX100_SY140_.jpg',
    bio: 'Eldest of the Sand Snakes. Fierce warrior who uses a spear and shield. Hot-tempered and hungry for war against the Lannisters.',
    bookBios: {
      3: 'Demands war. Imprisoned.',
      4: 'Released. Sent to the Reach (to Oldtown area) on a secret mission.',
    },
    waypoints: [
      { book: 3.0,  loc: 'sunspear', confirmed: true  }, // imprisoned at Sunspear
      { book: 3.9,  loc: 'dorne',    confirmed: false }, // released; riding west
      { book: 4.3,  loc: 'oldtown',  confirmed: false }, // secret mission to the Reach
    ],
  },

  'tyene-sand': {
    name: 'Tyene Sand',
    initial: 'Ty',
    gender: 'f',
    house: 'sand',
    houseLabel: 'House Martell — Sand Snake, daughter of Oberyn',
    aliases: [],
    portrait: 'tyene-sand',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BNDY5NzBiMTQtYzhmMS00Y2FmLTkzYzYtYzM2ODBjNGZlNGNiXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1._SX100_SY140_.jpg',
    bio: 'Third Sand Snake; daughter of Oberyn and a septa. Uses daggers coated in the Long Farewell poison. Appears sweet and devout but is lethal. Sent to infiltrate the Faith of the Seven in King\'s Landing.',
    bookBios: {
      3: 'Imprisoned at Sunspear.',
      4: 'Sent to King\'s Landing to join the Faith as a novice, with Nymeria.',
    },
    waypoints: [
      { book: 3, loc: 'sunspear',      confirmed: true  },
      { book: 4, loc: 'kings-landing', confirmed: false },
    ],
  },

  // ════════════════════════════════════════════════════════
  // HOUSE GREYJOY
  // ════════════════════════════════════════════════════════

  'balon-greyjoy': {
    name: 'Balon Greyjoy',
    initial: 'Bg',
    gender: 'm',
    house: 'greyjoy',
    houseLabel: 'House Greyjoy — Lord Reaper of Pyke, King of the Iron Islands',
    aliases: ['King of the Iron Islands'],
    portrait: 'balon-greyjoy',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BMTUxNjkwODczN15BMl5BanBnXkFtZTcwODMwNTgzNw@@._V1._SX100_SY140_.jpg',
    isKing: true,
    deathBook: 2,
    bio: 'Lord of the Iron Islands who once rebelled against Robert Baratheon and lost. A proud, cold man obsessed with the Old Way. When Robb Stark\'s back is turned, he invades the North. Falls from a bridge at Pyke in a storm — likely murdered by Euron\'s faceless assassin.',
    bookBios: {
      0: 'At Pyke. Receives Theon back as a ward.',
      1: 'Declares himself King and invades the North while Robb fights in the Riverlands.',
      2: 'Rules the conquered North. Dies falling from a bridge in a storm.',
    },
    waypoints: [
      { book: 0, loc: 'pyke', confirmed: true },
      { book: 1, loc: 'pyke', confirmed: true },
      { book: 2, loc: 'pyke', confirmed: true },
    ],
  },

  'theon-greyjoy': {
    name: 'Theon Greyjoy',
    initial: 'Th',
    gender: 'm',
    house: 'greyjoy',
    houseLabel: 'House Greyjoy — ward of Winterfell / Reek',
    aliases: ['Reek', 'Prince of Winterfell', 'Theon Turncloak'],
    portrait: 'theon',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BMTM3ODUyOTY3N15BMl5BanBnXkFtZTcwNjI4MTg4OQ@@._V1._SX100_SY140_.jpg',
    bio: 'Ward (hostage) of House Stark for years. Betrays Robb Stark to prove himself to his father, capturing Winterfell. Tortured and psychologically broken by Ramsay Bolton into becoming "Reek." Eventually helps Jeyne Poole (posing as Arya) escape Winterfell.',
    bookBios: {
      0: 'Ward at Winterfell. Goes to Robb\'s muster.',
      1: 'Sent to Pyke to negotiate with Balon. Betrays Robb, captures Winterfell. Taken prisoner by Ramsay Bolton.',
      2: 'Tortured by Ramsay; becomes Reek.',
      3: 'Reek; broken slave of Ramsay in the Dreadfort.',
      4: 'Reek at Winterfell. Helps Jeyne Poole escape. Captured by Stannis\'s men. Beginning to recover as Theon Greyjoy.',
    },
    waypoints: [
      { book: 0.0,  loc: 'winterfell', confirmed: true  }, // ward of House Stark
      { book: 1.0,  loc: 'pyke',       confirmed: true  }, // sent to negotiate; arrives Pyke
      { book: 1.4,  loc: 'winterfell', confirmed: true  }, // betrays Robb; captures Winterfell
      { book: 2.0,  loc: 'dreadfort',  confirmed: true  }, // Ramsay's prisoner
      { book: 3.0,  loc: 'dreadfort',  confirmed: true  }, // broken as Reek
      { book: 3.8,  loc: 'winterfell', confirmed: true  }, // Ramsay brings Reek to Winterfell
      { book: 4.0,  loc: 'winterfell', confirmed: true  }, // escapes with Jeyne Poole
    ],
  },

  'yara-greyjoy': {
    name: 'Asha Greyjoy',
    initial: 'Ya',
    gender: 'f',
    house: 'greyjoy',
    houseLabel: 'House Greyjoy — Captain of the Black Wind',
    aliases: ['Yara (show name)', 'Asha Greyjoy', 'The Kraken\'s Daughter'],
    portrait: 'yara',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BMTc2NzU5ODk0MV5BMl5BanBnXkFtZTcwMzEyNDY2OQ@@._V1._SX100_SY140_.jpg',
    bio: 'Balon\'s daughter and finest captain. Bold, irreverent, and militarily capable. She sails to rescue Theon from the Dreadfort but he refuses to come. After Balon\'s death she competes in the Kingsmoot and loses to Euron. Captured by Stannis at Deepwood Motte.',
    bookBios: {
      1: 'Leads Greyjoy raids in the North.',
      2: 'Holds the North for her father.',
      3: 'Sails to rescue Theon from the Dreadfort; he won\'t leave.',
      4: 'Loses the Kingsmoot to Euron. Captured by Stannis near Deepwood Motte.',
    },
    waypoints: [
      { book: 1, loc: 'deepwood-motte', confirmed: true  },
      { book: 2, loc: 'deepwood-motte', confirmed: true  },
      { book: 3, loc: 'dreadfort',      confirmed: false },
      { book: 4, loc: 'deepwood-motte', confirmed: true  },
    ],
  },

  'euron-greyjoy': {
    name: 'Euron Greyjoy',
    initial: 'Eu',
    gender: 'm',
    house: 'greyjoy',
    houseLabel: 'House Greyjoy — King of the Iron Islands, the Crow\'s Eye',
    aliases: ['Crow\'s Eye', 'The Damned'],
    portrait: 'euron',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BNzg1MTJhMjMtMmY4Yy00NTU2LTliZWUtNjM4YzAxY2M3ZDBkXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1._SX100_SY140_.jpg',
    isKing: true,
    bio: 'Balon\'s younger brother — mad, terrifying, and brilliant. Banished years ago for raping Victarion\'s salt wife. Returns after Balon\'s (suspicious) death, wins the Kingsmoot with his dragonhorn and promises of conquest. His ambitions seem limitless.',
    bookBios: {
      3: 'Returns to Pyke after Balon\'s death. Wins the Kingsmoot. Sends Victarion to bring Daenerys to him.',
      4: 'King of the Iron Islands. Raids the Shield Islands and the Reach. Possesses the dragonhorn Dragonbinder.',
    },
    waypoints: [
      { book: 3, loc: 'pyke',        confirmed: true  },
      { book: 4, loc: 'iron-islands',confirmed: true  },
    ],
  },

  'victarion-greyjoy': {
    name: 'Victarion Greyjoy',
    initial: 'Vc',
    gender: 'm',
    house: 'greyjoy',
    houseLabel: 'House Greyjoy — Lord Captain of the Iron Fleet',
    aliases: ['The Iron Captain'],
    portrait: 'victarion',
    bio: 'Balon\'s younger brother and a brutal, powerful warrior. Commands the Iron Fleet. Sent by Euron to court Daenerys with the dragonhorn, he secretly plans to take both Daenerys and the dragons for himself. His wound is healed by Moqorro.',
    bookBios: {
      3: 'Loses the Kingsmoot to Euron. Sent to bring Daenerys.',
      4: 'Sailing across the Summer Sea toward Slaver\'s Bay. Hand healed by the red priest Moqorro.',
    },
    waypoints: [
      { book: 3.0,  loc: 'iron-islands', confirmed: true  }, // loses the Kingsmoot
      { book: 3.7,  loc: 'at-sea',       confirmed: false }, // sailing east around Westeros
      { book: 4.0,  loc: 'summer-sea',   confirmed: true  }, // crossing the Summer Sea toward Meereen
      { book: 4.85, loc: 'meereen',      confirmed: false }, // arrives at Meereen during the battle
    ],
  },

  'aeron-greyjoy': {
    name: 'Aeron Greyjoy',
    initial: 'Ae',
    gender: 'm',
    house: 'greyjoy',
    houseLabel: 'House Greyjoy — Damphair, priest of the Drowned God',
    aliases: ['Damphair'],
    portrait: 'aeron',
    bio: 'Balon\'s youngest brother, a fanatic priest of the Drowned God. Once a drunk and reprobate who was changed by a near-drowning. Now presides over the Kingsmoot he called, only to see Euron (whom he fears and hates) win it.',
    bookBios: {
      3: 'Presides over the Kingsmoot at Old Wyk.',
      4: 'Horrified by Euron\'s blasphemies. Attempts to stir resistance against him. Disappears — taken by Euron.',
    },
    waypoints: [
      { book: 3, loc: 'iron-islands', confirmed: true  },
      { book: 4, loc: 'iron-islands', confirmed: false },
    ],
  },

  // ════════════════════════════════════════════════════════
  // HOUSE TULLY / ARRYN
  // ════════════════════════════════════════════════════════

  'edmure-tully': {
    name: 'Edmure Tully',
    initial: 'Ed',
    gender: 'm',
    house: 'tully',
    houseLabel: 'House Tully — Lord of Riverrun',
    aliases: ['Lord Edmure'],
    portrait: 'edmure',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BYjEzNThlMmQtMDgzYi00MTQ5LTllMzQtNDZjY2JiMTVhNmNkXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1._SX100_SY140_.jpg',
    bio: 'Son of Hoster Tully and younger brother of Catelyn. Well-meaning but often foolish. Blocked Tywin\'s retreat, inadvertently ruining Robb\'s strategic plan. Captured at the Red Wedding. Forced to yield Riverrun to the Lannisters to spare his wife and unborn child.',
    bookBios: {
      0: 'At Riverrun.',
      1: 'Commands in the Riverlands. Blocks Tywin\'s ford — ruining Robb\'s strategy.',
      2: 'Married to Roslin Frey at the Red Wedding. Captured.',
      3: 'Prisoner of the Freys.',
      4: 'Used by the Freys as a threat to force Riverrun\'s surrender.',
    },
    waypoints: [
      { book: 0, loc: 'riverrun',  confirmed: true  },
      { book: 1, loc: 'riverlands',confirmed: true  },
      { book: 2, loc: 'the-twins', confirmed: true  },
      { book: 3, loc: 'riverrun',  confirmed: false },
      { book: 4, loc: 'riverrun',  confirmed: true  },
    ],
  },

  'lysa-arryn': {
    name: 'Lysa Arryn',
    initial: 'Ly',
    gender: 'f',
    house: 'arryn',
    houseLabel: 'House Arryn — Lady of the Eyrie, regent to Robin Arryn',
    aliases: ['Lady Arryn'],
    portrait: 'lysa-arryn',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BMmNlYTYzOTYtOTg1ZC00YzdlLTliNTgtZDhjMTY1MGViZTA5XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1._SX100_SY140_.jpg',
    deathBook: 2,
    bio: 'Catelyn\'s younger sister and widow of Jon Arryn, Hand of the King. Unstable and obsessively devoted to her sickly son Robin. Her secret love for Petyr Baelish (Littlefinger) — who was her first love — led her to poison Jon Arryn and send the letter that started the conflict. Littlefinger eventually murders her.',
    bookBios: {
      0: 'Holds the Eyrie for her son. Refuses to join the war.',
      1: 'Keeps the Vale neutral.',
      2: 'Still at the Eyrie. Married to Littlefinger. Thrown through the Moon Door by Littlefinger.',
    },
    waypoints: [
      { book: 0, loc: 'eyrie', confirmed: true },
      { book: 2, loc: 'eyrie', confirmed: true },
    ],
  },

  'robin-arryn': {
    name: 'Robin Arryn',
    initial: 'Rb',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BNjBlNzE3YjEtMTcwYS00OTQxLTk1NjEtNGMwNzJhNWI2OGJjXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1._SX100_SY140_.jpg',
    gender: 'm',
    house: 'arryn',
    houseLabel: 'House Arryn — Lord of the Eyrie',
    aliases: ['Robert Arryn', 'Little Lord Arryn'],
    portrait: 'robin-arryn',
    bio: 'Young Lord of the Eyrie, still breastfed past age eight. Sickly, prone to "the shaking sickness" and obsessed with making people "fly" (throwing them through the Moon Door). Under Littlefinger\'s guardianship after his mother\'s death.',
    bookBios: {
      0: 'At the Eyrie with his mother.',
      3: 'Lord of the Eyrie. Littlefinger becomes his guardian.',
      4: 'Being fostered out among Vale houses. Under Littlefinger\'s control.',
    },
    waypoints: [
      { book: 0, loc: 'eyrie', confirmed: true },
      { book: 4, loc: 'vale',  confirmed: true },
    ],
  },

  // ════════════════════════════════════════════════════════
  // KEY INDEPENDENTS / SMALL COUNCIL / SPIES
  // ════════════════════════════════════════════════════════

  'littlefinger': {
    name: 'Petyr Baelish',
    initial: 'LF',
    gender: 'm',
    house: 'none',
    houseLabel: 'Master of Coin — Lord Protector of the Vale',
    aliases: ['Littlefinger', 'Lord Baelish'],
    portrait: 'littlefinger',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BMTQ1MjE3OTc3M15BMl5BanBnXkFtZTcwODgzODg4OQ@@._V1._SX100_SY140_.jpg',
    bio: 'Master of Coin and the greatest schemer in Westeros. Rose from nothing through ambition, manipulation, and strategic betrayal. The chain of deception he set in motion (poisoning Jon Arryn, framing the Lannisters, betraying Ned Stark) caused the War of the Five Kings. Now controls the Vale through Lysa\'s death and Robin\'s wardship.',
    bookBios: {
      0: 'Master of Coin. Betrays Ned Stark to the Lannisters.',
      1: 'Brokers the Tyrell alliance. Given Harrenhal.',
      2: 'Smuggles Sansa out of King\'s Landing after Joffrey\'s murder.',
      3: 'Rules the Vale as Lord Protector. Hiding Sansa as Alayne Stone.',
      4: 'Continues to manoeuvre in the Vale. Plans for Sansa\'s future.',
    },
    waypoints: [
      { book: 0.0,  loc: 'kings-landing', confirmed: true  },
      { book: 1.0,  loc: 'kings-landing', confirmed: true  },
      { book: 1.3,  loc: 'highgarden',    confirmed: false }, // brokers Tyrell alliance
      { book: 1.6,  loc: 'kings-landing', confirmed: true  }, // returns with Tyrells
      { book: 2.0,  loc: 'kings-landing', confirmed: true  },
      { book: 2.72, loc: 'narrow-sea',    confirmed: true  }, // escapes with Sansa after poisoning
      { book: 3.0,  loc: 'eyrie',         confirmed: true  }, // rules Vale as Lord Protector
      { book: 4.0,  loc: 'eyrie',         confirmed: true  },
    ],
  },

  'varys': {
    name: 'Varys',
    initial: 'Va',
    gender: 'm',
    house: 'none',
    houseLabel: 'Master of Whisperers — The Spider',
    aliases: ['The Spider', 'Rugen (alias)'],
    portrait: 'varys',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BMTkzNDk2MjczM15BMl5BanBnXkFtZTcwODk0ODg4OQ@@._V1._SX100_SY140_.jpg',
    bio: 'Eunuch spymaster and Master of Whisperers on the Small Council. Raised in Essos, castrated as a boy for a sorcerer\'s ritual. Serves "the realm" — or so he claims. His true loyalty is to placing a Targaryen (Aegon, Jon Connington\'s ward) on the Iron Throne. Helps Tyrion escape after Tywin\'s murder.',
    bookBios: {
      0: 'Master of Whisperers. Appears to support Ned, then abandons him.',
      1: 'Schemes on the Small Council. Supports Tyrion subtly.',
      2: 'On the Small Council. Helps Tyrion escape King\'s Landing.',
      3: 'Disappears from King\'s Landing.',
      4: 'Resurfaces in the epilogue; kills Grand Maester Pycelle and Kevan Lannister.',
    },
    waypoints: [
      { book: 0.0,  loc: 'kings-landing', confirmed: true  },
      { book: 1.0,  loc: 'kings-landing', confirmed: true  },
      { book: 2.0,  loc: 'kings-landing', confirmed: true  },
      { book: 2.85, loc: 'pentos',        confirmed: false }, // disappears after Tyrion's escape
      { book: 3.5,  loc: 'unknown',       confirmed: false }, // somewhere in Essos
      { book: 4.85, loc: 'kings-landing', confirmed: true  }, // resurfaces; kills Pycelle & Kevan
    ],
  },

  'sandor-clegane': {
    name: 'Sandor Clegane',
    initial: 'Sd',
    gender: 'm',
    house: 'none',
    houseLabel: 'Sworn sword (former Kingsguard)',
    aliases: ['The Hound', 'The Gravedigger (probable)'],
    portrait: 'sandor',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BMTQwMjEwNDQ1MF5BMl5BanBnXkFtZTcwMzAxODg4OQ@@._V1._SX100_SY140_.jpg',
    bio: 'The Hound — burned as a child by his brother Gregor, scarred and bitter but possessing a brutal code of honour. Served as Joffrey\'s sworn shield. Flees the Battle of the Blackwater. Travels with Arya as her reluctant captor. Believed dead after Brienne wounds him gravely, but likely survived as a gravedigger on the Quiet Isle.',
    bookBios: {
      0: 'Joffrey\'s sworn shield. Saves Sansa from the mob.',
      1: 'Deserts at the Blackwater. Offers to take Arya to Winterfell.',
      2: 'Traveling with Arya. Wounded by Beric Dondarrion. Heads to the Twins.',
      3: 'Gravely wounded by Brienne of Tarth. Left to die by Arya. Presumed dead.',
      4: 'Probable gravedigger at the monastery on the Quiet Isle. At peace.',
    },
    waypoints: [
      { book: 0, loc: 'kings-landing', confirmed: true  },
      { book: 1, loc: 'kings-landing', confirmed: true  },
      { book: 2, loc: 'riverlands',    confirmed: true  },
      { book: 3, loc: 'riverlands',    confirmed: true  },
      { book: 4, loc: 'riverlands',    confirmed: false },
    ],
  },

  'brienne': {
    name: 'Brienne of Tarth',
    initial: 'Bi',
    gender: 'f',
    house: 'none',
    houseLabel: 'Sworn to House Stark / Catelyn Stark',
    aliases: ['The Maid of Tarth', 'Brienne the Beauty (mockingly)'],
    portrait: 'brienne',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BMTYzNDY4NzgzOV5BMl5BanBnXkFtZTcwNDM5ODg4OQ@@._V1._SX100_SY140_.jpg',
    bio: 'Daughter of Lord Selwyn of Tarth. A huge, powerful woman who dreams of being a true knight. Sworn to Catelyn Stark, then searching for Sansa Stark on Jaime\'s behalf. Eventually captured by Lady Stoneheart (Catelyn\'s reanimated corpse) and forced to choose between killing Jaime or hanging.',
    bookBios: {
      1: 'In Renly\'s camp. Flees with Catelyn after his murder. Escorts Jaime to King\'s Landing.',
      2: 'Escorts Jaime. Both captured, Jaime loses his hand.',
      3: 'Searches for Sansa in the Riverlands.',
      4: 'Wanders the Riverlands. Finds Sansa\'s trail cold. Captured by the Brotherhood Without Banners / Lady Stoneheart.',
    },
    waypoints: [
      { book: 1.0,  loc: 'storms-end',    confirmed: true  }, // with Renly's camp
      { book: 1.4,  loc: 'riverrun',      confirmed: false }, // escapes with Catelyn after Renly's death
      { book: 1.7,  loc: 'riverlands',    confirmed: true  }, // escorting Jaime; both captured
      { book: 2.3,  loc: 'harrenhal',     confirmed: true  }, // Harrenhal; Jaime loses hand
      { book: 2.6,  loc: 'kings-landing', confirmed: true  }, // delivers Jaime to KL
      { book: 3.0,  loc: 'kings-landing', confirmed: true  }, // given Valyrian sword; sent to find Sansa
      { book: 3.3,  loc: 'riverlands',    confirmed: true  }, // searching the Riverlands
      { book: 4.0,  loc: 'riverlands',    confirmed: true  }, // trail gone cold; captured by Stoneheart
    ],
  },

  'podrick-payne': {
    name: 'Podrick Payne',
    initial: 'Po',
    gender: 'm',
    house: 'none',
    houseLabel: 'Squire to Tyrion Lannister, then Brienne of Tarth',
    aliases: ['Pod'],
    portrait: 'podrick',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BNTU5NjczOTQyNl5BMl5BanBnXkFtZTcwMzMwNTk4OQ@@._V1._SX100_SY140_.jpg',
    bio: 'Tyrion\'s loyal squire, later squire to Brienne. Quiet and seemingly hapless but unexpectedly capable and devoted. Travels with Brienne in search of Sansa.',
    bookBios: {
      1: 'Squire to Tyrion at the Blackwater. Saves Tyrion\'s life.',
      2: 'With Tyrion at King\'s Landing. Escapes when Tyrion is arrested.',
      3: 'Accompanies Brienne on her quest.',
      4: 'Still with Brienne in the Riverlands.',
    },
    waypoints: [
      { book: 1, loc: 'kings-landing', confirmed: true  },
      { book: 3, loc: 'riverlands',    confirmed: true  },
      { book: 4, loc: 'riverlands',    confirmed: true  },
    ],
  },

  'bronn': {
    name: 'Bronn',
    initial: 'Bn',
    gender: 'm',
    house: 'none',
    houseLabel: 'Sellsword, Ser Bronn of the Blackwater, Lord of Stokeworth',
    aliases: ['Ser Bronn', 'Lord Stokeworth'],
    portrait: 'bronn',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BMTY0MzI5MjY1OV5BMl5BanBnXkFtZTcwODM1ODg4OQ@@._V1._SX100_SY140_.jpg',
    bio: 'A sellsword of unknown origin who champions Tyrion at the Eyrie. Shrewd, mercenary, and utterly pragmatic. Rises from hedge knight to lord through Tyrion\'s patronage. Marries into the Stokeworth family after Tyrion\'s fall from favour.',
    bookBios: {
      0: 'Champions Tyrion in trial by combat at the Eyrie.',
      1: 'Tyrion\'s hired sword and captain of the City Watch.',
      2: 'Fights at the Blackwater. Knighted.',
      3: 'Married Lollys Stokeworth. Made lord.',
      4: 'Lord Stokeworth. Accompanying Jaime in the Riverlands.',
    },
    waypoints: [
      { book: 0, loc: 'eyrie',         confirmed: true  },
      { book: 0, loc: 'kings-landing', confirmed: true  },
      { book: 1, loc: 'kings-landing', confirmed: true  },
      { book: 3, loc: 'kings-landing', confirmed: true  },
      { book: 4, loc: 'riverlands',    confirmed: true  },
    ],
  },

  'beric-dondarrion': {
    name: 'Beric Dondarrion',
    initial: 'Bc',
    gender: 'm',
    house: 'none',
    houseLabel: 'Brotherhood Without Banners — the Lightning Lord',
    aliases: ['The Lightning Lord', 'Lord Beric'],
    portrait: 'beric',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BMjQwMTEwNTg2MF5BMl5BanBnXkFtZTgwNTAxODYxOTE@._V1._SX100_SY140_.jpg',
    deathBook: 2,
    bio: 'Sent by Ned Stark to arrest Ser Gregor Clegane. Killed multiple times and resurrected by Thoros of Myr through the power of R\'hllor. Each resurrection dims his memories further. Leads the Brotherhood Without Banners protecting the smallfolk. Gives his life\'s fire to resurrect Catelyn Stark.',
    bookBios: {
      1: 'Reported dead multiple times; keeps coming back.',
      2: 'Leads the Brotherhood. Defeated in multiple duels. Gives his last life to resurrect Catelyn Stark.',
    },
    waypoints: [
      { book: 0, loc: 'kings-landing', confirmed: true  },
      { book: 1, loc: 'riverlands',    confirmed: true  },
      { book: 2, loc: 'riverlands',    confirmed: true  },
    ],
  },

  'thoros-of-myr': {
    name: 'Thoros of Myr',
    initial: 'Tm',
    gender: 'm',
    house: 'none',
    houseLabel: 'Red Priest of R\'hllor — Brotherhood Without Banners',
    aliases: [],
    portrait: 'thoros',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BMTYwNzc0MDUzNF5BMl5BanBnXkFtZTcwMDc1NzE5OQ@@._V1._SX100_SY140_.jpg',
    bio: 'A red priest of R\'hllor from Myr who was sent to convert King Robert but instead became a drunk and a tourney knight. Discovered his power to resurrect the dead when he prayed over Beric Dondarrion\'s corpse. Has resurrected Beric six times.',
    bookBios: {
      0: 'At King\'s Landing; part of Ned\'s party then missing.',
      1: 'In the Riverlands with the Brotherhood.',
      2: 'With the Brotherhood. Hands Arya to Beric. Resurrected Beric six times.',
      3: 'With the Brotherhood under Lady Stoneheart.',
    },
    waypoints: [
      { book: 0, loc: 'kings-landing', confirmed: true },
      { book: 1, loc: 'riverlands',    confirmed: true },
      { book: 2, loc: 'riverlands',    confirmed: true },
      { book: 3, loc: 'riverlands',    confirmed: true },
    ],
  },

  'gendry': {
    name: 'Gendry',
    initial: 'Ge',
    gender: 'm',
    house: 'baratheon',
    houseLabel: 'Bastard son of King Robert Baratheon',
    aliases: ['The Bull'],
    portrait: 'gendry',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BMTcxNzYwMTk4MV5BMl5BanBnXkFtZTcwNDg1ODg4OQ@@._V1._SX100_SY140_.jpg',
    bio: 'Robert Baratheon\'s unacknowledged bastard, apprenticed to a blacksmith. Travels with Arya to the Wall, then captured at Harrenhal. Joins the Brotherhood Without Banners after Melisandre uses his king\'s blood for a ritual and Davos smuggles him to safety.',
    bookBios: {
      0: 'Apprentice smith heading to the Wall.',
      1: 'Captured at Harrenhal. Joins the Brotherhood.',
      2: 'With the Brotherhood. Sold to Melisandre. Rescued by Davos and sent to safety.',
      3: 'Somewhere in the Riverlands with the Brotherhood.',
      4: 'Whereabouts uncertain — probably still with the Brotherhood.',
    },
    waypoints: [
      { book: 0, loc: 'kings-landing', confirmed: true  },
      { book: 1, loc: 'harrenhal',     confirmed: true  },
      { book: 2, loc: 'riverlands',    confirmed: true  },
      { book: 3, loc: 'riverlands',    confirmed: false },
      { book: 4, loc: 'riverlands',    confirmed: false },
    ],
  },

}); // end Object.assign

})();
