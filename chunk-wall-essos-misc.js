// ═══════════════════════════════════════════════════════════════════════════════
// CHUNK 4 — NIGHT'S WATCH · FREE FOLK · ESSOS PLAYERS · MISC WESTEROS
// ═══════════════════════════════════════════════════════════════════════════════
(function() {

Object.assign(window.CHARS, {

  // ════════════════════════════════════════════════════════
  // NIGHT'S WATCH
  // ════════════════════════════════════════════════════════

  'jeor-mormont': {
    name: 'Jeor Mormont',
    photoUrl: 'img/jeor-mormont.jpg',
    initial: 'Jm',
    gender: 'm',
    house: 'mormont',
    houseLabel: 'Night\'s Watch — Lord Commander',
    aliases: ['The Old Bear'],
    portrait: 'jeor-mormont',
    deathBook: 2,
    bio: 'Lord Commander of the Night\'s Watch who abdicated his lordship to take the black. A hard, respected commander who sees the true threat beyond the Wall. Led the great ranging that ended in disaster at the Fist of First Men. Killed by his own men in a mutiny at Craster\'s Keep.',
    bookBios: {
      0: 'Lord Commander at Castle Black. Sends Jon beyond the Wall.',
      1: 'Leads the great ranging beyond the Wall.',
      2: 'Survives the Fist of First Men. Killed in the mutiny at Craster\'s Keep.',
    },
    waypoints: [
      { book: 0, loc: 'castle-black',  confirmed: true },
      { book: 1, loc: 'beyond-wall',   confirmed: true },
      { book: 2, loc: 'crasters-keep', confirmed: true },
    ],
  },

  'samwell-tarly': {
    name: 'Samwell Tarly',
    photoUrl: 'img/samwell-tarly.jpg',
    initial: 'Sm',
    gender: 'm',
    house: 'none',
    houseLabel: 'Night\'s Watch — Steward',
    aliases: ['Sam', 'Ser Piggy (mockingly)', 'Sam the Slayer'],
    portrait: 'samwell',
    bio: 'Fat, cowardly, and bookish — until he kills a White Walker with a dragonglass dagger, earning the name "Sam the Slayer." Jon\'s best friend. Discovers crucial information about defeating the Others. Sent to Oldtown with Gilly to become a maester.',
    bookBios: {
      0: 'Arrives at Castle Black. Befriends Jon Snow.',
      1: 'On the great ranging beyond the Wall.',
      2: 'Survives the Fist. Kills a wight with dragonglass. Retreats with Gilly.',
      3: 'Sails to Braavos and Oldtown.',
      4: 'Arrives at Oldtown. Begins training as a maester at the Citadel.',
    },
    waypoints: [
      { book: 0.0,  loc: 'castle-black', confirmed: true  },
      { book: 1.0,  loc: 'beyond-wall',  confirmed: true  }, // great ranging
      { book: 1.75, loc: 'castle-black', confirmed: true  }, // retreats after Fist disaster
      { book: 2.0,  loc: 'castle-black', confirmed: true  },
      { book: 2.9,  loc: 'eastwatch',    confirmed: false }, // sails from Eastwatch
      { book: 3.2,  loc: 'braavos',      confirmed: true  }, // stops in Braavos
      { book: 3.65, loc: 'narrow-sea',   confirmed: false }, // sails south
      { book: 4.0,  loc: 'oldtown',      confirmed: true  }, // arrives at the Citadel
    ],
  },

  'alliser-thorne': {
    name: 'Alliser Thorne',
    photoUrl: 'img/alliser-thorne.jpg',
    initial: 'Al',
    gender: 'm',
    house: 'nighswatch',
    houseLabel: 'Night\'s Watch — Master-at-Arms',
    aliases: ['Ser Alliser'],
    portrait: 'default-male',
    bio: 'Bitter master-at-arms at Castle Black, despises Jon Snow from the start. A loyalist to the old Night\'s Watch ways. One of the ringleaders of the mutiny that stabs Jon Snow at the end of ADwD.',
    bookBios: {
      0: 'Trains recruits at Castle Black.',
      1: 'Sent to King\'s Landing with a wight\'s hand; ignored.',
      2: 'Keeps the Wall during the wildling attack.',
      3: 'Reluctant rival to Jon; supports him minimally.',
      4: 'Leads the mutiny that stabs Jon Snow.',
    },
    waypoints: [
      { book: 0, loc: 'castle-black', confirmed: true },
      { book: 4, loc: 'castle-black', confirmed: true },
    ],
  },

  'qhorin-halfhand': {
    name: 'Qhorin Halfhand',
    initial: 'Qh',
    gender: 'm',
    house: 'nighswatch',
    houseLabel: 'Night\'s Watch — Ranger',
    aliases: ['The Halfhand'],
    portrait: 'default-male',
    photoUrl: 'img/qhorin-halfhand.jpg',
    deathBook: 1,
    bio: 'The most celebrated ranger of the Night\'s Watch. Lost the fingers of his sword hand to a wildling axe. Orders Jon Snow to kill him so Jon can convincingly infiltrate Mance Rayder\'s army.',
    bookBios: {
      1: 'Leads a ranging in the Skirling Pass. Captured by wildlings. Orders Jon to kill him as a ruse.',
    },
    waypoints: [
      { book: 1, loc: 'beyond-wall', confirmed: true },
    ],
  },

  // ════════════════════════════════════════════════════════
  // FREE FOLK / WILDLINGS
  // ════════════════════════════════════════════════════════

  'mance-rayder': {
    name: 'Mance Rayder',
    photoUrl: 'img/mance-rayder.jpg',
    isKing: true,
    initial: 'MR',
    gender: 'm',
    house: 'freefolk',
    houseLabel: 'Free Folk — King-Beyond-the-Wall',
    aliases: ['King-Beyond-the-Wall', 'Abel (alias in ADwD)'],
    portrait: 'mance-rayder',
    bio: 'Former brother of the Night\'s Watch turned King-Beyond-the-Wall. United the warring wildling clans and led them south to flee the White Walkers. Captured by Stannis, he appears to be burned at the stake but Melisandre substitutes Rattleshirt (in Mance\'s glamoured appearance). Sent to Winterfell as the singer Abel.',
    bookBios: {
      1: 'Assembles the Free Folk army beyond the Wall.',
      2: 'Leads the assault on the Wall. Captured by Stannis.',
      3: 'Prisoner of Stannis at Castle Black. Appears burned but survives via Melisandre\'s glamour.',
      4: 'Sent to Winterfell as the singer Abel to rescue "Arya" (Jeyne Poole). Identity revealed.',
    },
    waypoints: [
      { book: 1, loc: 'beyond-wall',  confirmed: true  },
      { book: 2, loc: 'castle-black', confirmed: true  },
      { book: 3, loc: 'castle-black', confirmed: true  },
      { book: 4, loc: 'winterfell',   confirmed: true  },
    ],
  },

  'ygritte': {
    name: 'Ygritte',
    photoUrl: 'img/ygritte.jpg',
    initial: 'Yg',
    gender: 'f',
    house: 'freefolk',
    houseLabel: 'Free Folk',
    aliases: ['Kissed by fire'],
    portrait: 'ygritte',
    deathBook: 2,
    bio: 'A fierce wildling woman with vivid red hair, "kissed by fire." Jon Snow\'s lover among the Free Folk. She shoots Jon with three arrows as he escapes back to the Night\'s Watch. Dies from an arrow wound during the wildling attack on Castle Black.',
    bookBios: {
      1: 'Captured by Jon and Qhorin; Jon keeps her as prisoner. They become lovers.',
      2: 'Attacks Castle Black with the wildlings. Shot by an arrow; dies in Jon\'s arms.',
    },
    waypoints: [
      { book: 1, loc: 'beyond-wall',  confirmed: true },
      { book: 2, loc: 'castle-black', confirmed: true },
    ],
  },

  'tormund': {
    name: 'Tormund Giantsbane',
    photoUrl: 'img/tormund.jpg',
    initial: 'Tg',
    gender: 'm',
    house: 'freefolk',
    houseLabel: 'Free Folk — chieftain',
    aliases: ['Tormund Thunderfist', 'Husband to Bears', 'Tall-Talker', 'Horn-Blower'],
    portrait: 'tormund',
    bio: 'One of Mance Rayder\'s most important chieftains. Boisterous, brave, and genuinely likeable. After the Wall battle, he is one of the first wildling leaders to work with Jon Snow on letting the Free Folk through the Wall.',
    bookBios: {
      2: 'Fights at the Wall.',
      4: 'Negotiates with Jon. Leads his people through the Wall at Castle Black.',
    },
    waypoints: [
      { book: 1, loc: 'beyond-wall',  confirmed: true  },
      { book: 2, loc: 'castle-black', confirmed: true  },
      { book: 4, loc: 'castle-black', confirmed: true  },
    ],
  },

  'val': {
    name: 'Val',
    initial: 'Vl',
    gender: 'f',
    house: 'freefolk',
    houseLabel: 'Free Folk — Wildling Princess',
    aliases: ['The Wildling Princess'],
    portrait: 'default-female',
    bio: 'Sister of Mance Rayder\'s wife Dalla (who died in childbirth). Tough, beautiful wildling woman held as a "princess" by Stannis. Jon sends her on a mission beyond the Wall to find Tormund Giantsbane.',
    bookBios: {
      4: 'Prisoner-guest at Castle Black. Sent by Jon on a mission beyond the Wall.',
    },
    waypoints: [
      { book: 3, loc: 'castle-black', confirmed: true  },
      { book: 4, loc: 'beyond-wall',  confirmed: true  },
    ],
  },

  // ════════════════════════════════════════════════════════
  // NORTH — HOUSE BOLTON / MANDERLY / OTHERS
  // ════════════════════════════════════════════════════════

  'roose-bolton': {
    name: 'Roose Bolton',
    photoUrl: 'img/roose-bolton.jpg',
    initial: 'RB',
    gender: 'm',
    house: 'bolton',
    houseLabel: 'House Bolton — Lord of the Dreadfort, Warden of the North',
    aliases: ['Lord Flayer', 'The Leech Lord'],
    portrait: 'roose-bolton',
    bio: 'Lord of the Dreadfort. Cold, bloodless, and reptilian. A key commander for Robb Stark who secretly dealt with the Lannisters. Orchestrated the Red Wedding. Made Warden of the North by Tywin. His control of the North is threatened by resistance from the Northern lords.',
    bookBios: {
      1: 'Commands Robb\'s forces in the Riverlands.',
      2: 'Betrays Robb at the Red Wedding. Kills Robb personally.',
      3: 'Warden of the North. Takes Moat Cailin and returns to Winterfell.',
      4: 'Rules Winterfell. Besieged by Stannis.',
    },
    waypoints: [
      { book: 1.0,  loc: 'riverlands',  confirmed: true },  // commands for Robb
      { book: 2.0,  loc: 'the-twins',   confirmed: true },  // Red Wedding; kills Robb
      { book: 2.6,  loc: 'dreadfort',   confirmed: true },  // returns North
      { book: 3.1,  loc: 'moat-cailin', confirmed: true },  // takes Moat Cailin
      { book: 3.4,  loc: 'winterfell',  confirmed: true },  // marches to Winterfell
      { book: 4.0,  loc: 'winterfell',  confirmed: true },
    ],
  },

  'ramsay-bolton': {
    name: 'Ramsay Bolton',
    photoUrl: 'img/ramsay-bolton.jpg',
    initial: 'Ra',
    gender: 'm',
    house: 'bolton',
    houseLabel: 'House Bolton — bastard son of Roose',
    aliases: ['Ramsay Snow', 'The Bastard of Bolton', 'Lord of the Hornwood'],
    portrait: 'ramsay',
    bio: 'Roose Bolton\'s bastard son — sadistic, unpredictable, and monstrous. Tortured Theon Greyjoy into becoming "Reek." Made legitimate after Roose\'s trueborn heir died. Married Jeyne Poole (falsely presented as Arya Stark). Holds Winterfell.',
    bookBios: {
      1: 'At the Dreadfort. Sacks Winterfell after Theon\'s capture.',
      2: 'Captured Theon; tortures him into Reek.',
      3: 'Legitimised. Married "Arya Stark" (Jeyne Poole) at Winterfell.',
      4: 'Controls Winterfell. Threatens the Night\'s Watch in a letter to Jon Snow.',
    },
    waypoints: [
      { book: 1, loc: 'winterfell', confirmed: true  },
      { book: 2, loc: 'dreadfort',  confirmed: true  },
      { book: 3, loc: 'winterfell', confirmed: true  },
      { book: 4, loc: 'winterfell', confirmed: true  },
    ],
  },

  'wyman-manderly': {
    name: 'Wyman Manderly',
    initial: 'Wm',
    gender: 'm',
    house: 'none',
    houseLabel: 'House Manderly — Lord of White Harbor',
    aliases: ['Lord Too-Fat', 'The Fat Lord'],
    portrait: 'wyman-manderly',
    bio: 'Enormously obese Lord of White Harbor, the richest lord in the North. Appears to collaborate with the Boltons but secretly plots Stark vengeance — his son Wendel was killed at the Red Wedding. Sends Davos Seaworth to find Rickon Stark. Serves Frey pies (made of Freys) at the Winterfell feast.',
    bookBios: {
      3: 'Feigns submission to the Boltons while plotting against them.',
      4: 'At Winterfell for the wedding feast. Serving "Frey pie." Awaiting the right moment.',
    },
    waypoints: [
      { book: 3, loc: 'white-harbor', confirmed: true },
      { book: 4, loc: 'winterfell',   confirmed: true },
    ],
  },

  // ════════════════════════════════════════════════════════
  // THE REACH / SEPT
  // ════════════════════════════════════════════════════════

  'high-sparrow': {
    name: 'The High Sparrow',
    photoUrl: 'img/high-sparrow.jpg',
    initial: 'HS',
    gender: 'm',
    house: 'none',
    houseLabel: 'The Faith of the Seven — High Septon',
    aliases: ['The High Septon', 'High Sparrow'],
    portrait: 'default-male',
    bio: 'A barefoot septon of humble origins who became the leader of the sparrow religious movement and was elevated to High Septon by Cersei — a decision she quickly regrets. Wields the restored Faith Militant against the crown itself.',
    bookBios: {
      3: 'Arrives in King\'s Landing leading a tide of sparrow pilgrims.',
      4: 'High Septon. Arrests Cersei, Margaery, and Loras Tyrell. Commands the Faith Militant.',
    },
    waypoints: [
      { book: 3, loc: 'kings-landing', confirmed: true },
      { book: 4, loc: 'kings-landing', confirmed: true },
    ],
  },

  'samwell-tarly-sr': {
    name: 'Randyll Tarly',
    initial: 'RT',
    gender: 'm',
    house: 'none',
    houseLabel: 'House Tarly — Lord of Horn Hill',
    aliases: ['Lord Randyll'],
    portrait: 'default-male',
    photoUrl: 'img/samwell-tarly-sr.jpg',
    bio: 'Lord of Horn Hill, one of the finest military commanders in Westeros and Mace Tyrell\'s best general. Harsh, honour-obsessed father who sent Sam to the Wall to rid himself of his "unworthy" heir.',
    bookBios: {
      1: 'Fights for the Tyrells at the Blackwater.',
      3: 'Battles remnants of Robb\'s army.',
      4: 'In the Reach commanding Tyrell forces.',
    },
    waypoints: [
      { book: 1, loc: 'kings-landing', confirmed: false },
      { book: 4, loc: 'the-reach',     confirmed: false },
    ],
  },

  // ════════════════════════════════════════════════════════
  // ESSOS — THE FREE CITIES & BEYOND
  // ════════════════════════════════════════════════════════

  'jaqen-hghar': {
    name: "Jaqen H'ghar",
    photoUrl: 'img/jaqen-hghar.jpg',
    initial: 'Jq',
    gender: 'm',
    house: 'none',
    houseLabel: 'Faceless Man of Braavos',
    aliases: ['No One', 'The Alchemist (at the Citadel)'],
    portrait: 'jaqen',
    bio: 'A Faceless Man — an assassin who can change his face. Met Arya while caged in a prison wagon heading to the Wall. Gave her three deaths for saving his life. Departed after changing his face. Resurfaces at the Citadel in Oldtown, seemingly on a mission involving the Faceless Men and the Maesters.',
    bookBios: {
      1: 'Prisoner heading to Castle Black with Arya. Gives her three deaths at Harrenhal.',
      2: 'Departs after granting Arya passage to Braavos.',
      4: 'As "the Alchemist," infiltrates the Citadel at Oldtown.',
    },
    waypoints: [
      { book: 1, loc: 'harrenhal', confirmed: true  },
      { book: 4, loc: 'oldtown',   confirmed: true  },
    ],
  },

  'syrio-forel': {
    name: 'Syrio Forel',
    photoUrl: 'img/syrio-forel.jpg',
    initial: 'Sy',
    gender: 'm',
    house: 'none',
    houseLabel: 'Arya\'s Braavosi sword-dancing teacher',
    aliases: ['The First Sword of Braavos (former)'],
    portrait: 'default-male',
    deathBook: 0,
    bio: 'Former First Sword of Braavos, hired by Ned Stark to teach Arya the Water Dance style of swordfighting. When Lannister soldiers come for Arya after Ned\'s arrest, he holds them off with a wooden practice sword. His fate is never fully confirmed but he is presumed dead.',
    bookBios: {
      0: 'Teaches Arya in King\'s Landing. Holds off Lannister soldiers to let her escape. Fate unknown but likely killed.',
    },
    waypoints: [
      { book: 0, loc: 'kings-landing', confirmed: true },
    ],
  },

  'jon-connington': {
    name: 'Jon Connington',
    initial: 'JC',
    gender: 'm',
    house: 'none',
    houseLabel: 'Exiled knight — Hand to the Young Griff',
    aliases: ['Griff (alias)', 'Lord of Griffin\'s Roost (stripped)'],
    portrait: 'default-male',
    bio: 'Former Hand of the King to Aerys II Targaryen, blamed for failing to capture Robert during the rebellion. Exiled, presumed dead. Has been secretly raising and protecting Aegon Targaryen (whom he believes to be Rhaegar\'s son). Contracted greyscale on the Rhoyne. Invades the Stormlands with the Golden Company.',
    bookBios: {
      4: 'Leads the Golden Company\'s invasion of the Stormlands on behalf of Young Aegon. Has greyscale, hiding it.',
    },
    waypoints: [
      { book: 3, loc: 'narrow-sea',   confirmed: false },
      { book: 4, loc: 'storms-end',   confirmed: true  },
    ],
  },

  'aegon-targaryen': {
    name: 'Aegon Targaryen (Young Griff)',
    initial: 'Ag',
    gender: 'm',
    house: 'targaryen',
    houseLabel: 'House Targaryen — claimant (disputed authenticity)',
    aliases: ['Young Griff', 'Prince Aegon', 'mummer\'s dragon (Daenerys\'s term)'],
    portrait: 'default-male',
    bio: 'Presented as the son of Rhaegar Targaryen and Elia Martell, smuggled out of King\'s Landing as an infant before the sack. Raised in secret by Jon Connington. His authenticity is doubted by some (Tyrion notably). Launches an invasion of Westeros with the Golden Company, taking Storm\'s End.',
    bookBios: {
      4: 'Arrives in Westeros with the Golden Company. Captures Griffin\'s Roost and Storm\'s End. Does not wait for Daenerys.',
    },
    waypoints: [
      { book: 3, loc: 'narrow-sea',  confirmed: false },
      { book: 4, loc: 'storms-end',  confirmed: true  },
    ],
  },

  'moqorro': {
    name: 'Moqorro',
    initial: 'Mo',
    gender: 'm',
    house: 'none',
    houseLabel: 'Red Priest of R\'hllor',
    aliases: ['Flames'],
    portrait: 'default-male',
    bio: 'A tall, imposing red priest of R\'hllor sent by the High Priest of the Temple of the Lord of Light in Volantis to serve Daenerys. Found adrift after being washed overboard. Joins Victarion\'s fleet and heals his festering hand, apparently gaining his trust.',
    bookBios: {
      4: 'Found adrift at sea by Victarion\'s fleet. Heals Victarion\'s hand. Travels with the Iron Fleet toward Meereen.',
    },
    waypoints: [
      { book: 4, loc: 'summer-sea', confirmed: true },
    ],
  },

  // ════════════════════════════════════════════════════════
  // KING'S LANDING — SMALL COUNCIL / SEPTONS
  // ════════════════════════════════════════════════════════

  'pycelle': {
    name: 'Grand Maester Pycelle',
    photoUrl: 'img/pycelle.jpg',
    initial: 'Py',
    gender: 'm',
    house: 'none',
    houseLabel: 'Grand Maester — Small Council',
    aliases: [],
    portrait: 'pycelle',
    deathBook: 4,
    bio: 'Grand Maester of the Small Council for decades. Ancient, sycophantic, and secretly a loyal Lannister agent who withheld medicine from Jon Arryn (allowing him to die) and gave Cersei information. Killed by Varys in the ADwD epilogue.',
    bookBios: {
      0: 'Grand Maester. Counsels the small council.',
      2: 'Imprisoned by Tyrion, then freed after the Blackwater.',
      4: 'Grand Maester under Cersei and then Tommen\'s councils. Murdered by Varys.',
    },
    waypoints: [
      { book: 0, loc: 'kings-landing', confirmed: true },
      { book: 4, loc: 'kings-landing', confirmed: true },
    ],
  },

  'qyburn': {
    name: 'Qyburn',
    photoUrl: 'img/qyburn.jpg',
    initial: 'Qy',
    gender: 'm',
    house: 'none',
    houseLabel: 'Master of Whisperers — former maester (stripped)',
    aliases: [],
    portrait: 'qyburn',
    bio: 'A former maester stripped of his chain for forbidden experiments on living subjects. Saved Jaime\'s life after his hand was cut off. Becomes Cersei\'s loyal spymaster and resurrects Gregor Clegane as the monstrous Ser Robert Strong using necromantic methods.',
    bookBios: {
      2: 'Treats Jaime\'s stump. Joins the Small Council.',
      3: 'Master of Whisperers. Resurrects Ser Gregor Clegane as Ser Robert Strong.',
      4: 'Serves Cersei as master of whisperers and scientific advisor.',
    },
    waypoints: [
      { book: 2, loc: 'kings-landing', confirmed: true },
      { book: 4, loc: 'kings-landing', confirmed: true },
    ],
  },

  'gregor-clegane': {
    name: 'Gregor Clegane',
    photoUrl: 'img/gregor-clegane.jpg',
    initial: 'Gr',
    gender: 'm',
    house: 'lannister',
    houseLabel: 'House Lannister — Ser Gregor, the Mountain',
    aliases: ['The Mountain That Rides', 'Ser Robert Strong (undead)'],
    portrait: 'gregor',
    deathBook: 2,
    bio: 'The Mountain That Rides — eight feet of brutal, murderous violence. Raped and murdered Elia Martell and dashed her infant son against a wall. Poisoned by Oberyn\'s spear during their duel. "Died" but was reanimated by Qyburn as the mute, masked Ser Robert Strong, now Cersei\'s champion.',
    bookBios: {
      0: 'Terrorises the Riverlands. Kills Loras Tyrell\'s horse at the tourney.',
      1: 'Raids the Riverlands on Tywin\'s orders.',
      2: 'Killed in trial by combat by Oberyn Martell\'s poisoned spear.',
      3: 'Reanimated by Qyburn as Ser Robert Strong.',
      4: 'Ser Robert Strong, Cersei\'s silent, masked champion of the Faith\'s trial.',
    },
    waypoints: [
      { book: 0, loc: 'kings-landing', confirmed: true  },
      { book: 1, loc: 'riverlands',    confirmed: true  },
      { book: 2, loc: 'kings-landing', confirmed: true  },
      { book: 3, loc: 'kings-landing', confirmed: true  },
      { book: 4, loc: 'kings-landing', confirmed: true  },
    ],
  },

  'ilyn-payne': {
    name: 'Ser Ilyn Payne',
    initial: 'IP',
    photoUrl: 'img/ilyn-payne.jpg',
    gender: 'm',
    house: 'lannister',
    houseLabel: 'House Lannister — King\'s Justice',
    aliases: ['King\'s Justice'],
    portrait: 'ilyn-payne',
    bio: 'The King\'s Justice (royal executioner). Had his tongue cut out by Aerys II. Wields a great sword, Ice — confiscated from Ned Stark. Executes Ned Stark in the Great Sept of Baelor.',
    bookBios: {
      0: 'Executes Ned Stark.',
      1: 'Present at court.',
    },
    waypoints: [
      { book: 0, loc: 'kings-landing', confirmed: true },
    ],
  },

  // ════════════════════════════════════════════════════════
  // MISCELLANEOUS WESTEROS
  // ════════════════════════════════════════════════════════

  'balon-swann': {
    name: 'Balon Swann',
    initial: 'BS',
    gender: 'm',
    house: 'none',
    houseLabel: 'Kingsguard',
    aliases: ['Ser Balon'],
    portrait: 'balon-swann',
    photoUrl: 'img/sandor-clegane.jpg',
    bio: 'One of the more honourable members of Joffrey\'s Kingsguard. Sent to Dorne to deliver Gregor Clegane\'s skull to Doran Martell as part of the peace agreement, and to bring Myrcella home.',
    bookBios: {
      4: 'Arrives in Dorne to deliver Gregor\'s skull. Accompanies Myrcella\'s party.',
    },
    waypoints: [
      { book: 2, loc: 'kings-landing', confirmed: true  },
      { book: 4, loc: 'sunspear',      confirmed: true  },
    ],
  },

  'hotah': {
    name: 'Areo Hotah',
    initial: 'AH',
    gender: 'm',
    house: 'martell',
    houseLabel: 'House Martell — Captain of the Guard',
    aliases: ['Captain of the Guard'],
    portrait: 'default-male',
    photoUrl: 'img/hotah.jpg',
    bio: 'Doran Martell\'s Norvoshi captain of the guard. Devoted, silent, and lethal with his longaxe. The reader sees Dornish events partly through his limited but loyal perspective.',
    bookBios: {
      3: 'Protects Doran at the Water Gardens. Arrests Arianne after the Queenmaker plot.',
      4: 'Guards Doran at the Water Gardens and Sunspear.',
    },
    waypoints: [
      { book: 3, loc: 'water-gardens', confirmed: true },
      { book: 4, loc: 'sunspear',      confirmed: true },
    ],
  },

  'gilly': {
    name: 'Gilly',
    photoUrl: 'img/gilly.jpg',
    initial: 'Gi',
    gender: 'f',
    house: 'none',
    houseLabel: 'Wildling — companion to Samwell Tarly',
    aliases: [],
    portrait: 'default-female',
    bio: 'Daughter and wife of Craster, a wildling who married his own daughters. Saved by Sam after the mutiny at Craster\'s Keep. Travels with Sam to Oldtown, carrying her son (actually Mance Rayder\'s son, swapped with Melisandre\'s arrangement).',
    bookBios: {
      2: 'Craster\'s daughter. Saved by Sam and the Night\'s Watch survivors.',
      3: 'Travels with Sam south. Baby swapped for Mance\'s child by Melisandre.',
      4: 'Arrives in Oldtown with Sam.',
    },
    waypoints: [
      { book: 2, loc: 'crasters-keep', confirmed: true },
      { book: 3, loc: 'castle-black',  confirmed: true },
      { book: 4, loc: 'oldtown',       confirmed: true },
    ],
  },

  'hot-pie': {
    name: 'Hot Pie',
    photoUrl: 'img/hot-pie.jpg',
    initial: 'HP',
    gender: 'm',
    house: 'none',
    houseLabel: 'Baker\'s boy',
    aliases: [],
    portrait: 'hot-pie',
    bio: 'A baker\'s apprentice from King\'s Landing who traveled with Arya in the prison wagon. Survived Harrenhal. Stayed behind at the inn at the crossroads to be a baker, which is, he points out, all he ever wanted.',
    bookBios: {
      0: 'Traveling north from King\'s Landing with the Night\'s Watch recruits.',
      1: 'At Harrenhal.',
      2: 'Left behind at the inn at the crossroads when Arya and Gendry left with the Brotherhood.',
      4: 'Still at the inn, baking. Encounters Brienne.',
    },
    waypoints: [
      { book: 0, loc: 'kings-landing', confirmed: true  },
      { book: 1, loc: 'harrenhal',     confirmed: true  },
      { book: 2, loc: 'riverlands',    confirmed: true  },
      { book: 4, loc: 'riverlands',    confirmed: true  },
    ],
  },

  // ════════════════════════════════════════════════════════
  // ESSOS — VOLANTIS / MEEREEN POLITICS
  // ════════════════════════════════════════════════════════

  'hizdahr': {
    name: 'Hizdahr zo Loraq',
    isKing: true,
    initial: 'Hz',
    photoUrl: 'img/hizdahr.jpg',
    gender: 'm',
    house: 'none',
    houseLabel: 'Great Master of Meereen — King-Consort',
    aliases: ['King Hizdahr'],
    portrait: 'default-male',
    bio: 'Nobleman of one of Meereen\'s great slave-holding families. Persistent suitor of Daenerys. She agrees to marry him if he can stop the Sons of the Harpy for ninety days. He achieves this (by being in league with them or by other means) and becomes her king-consort, then effectively regent in her absence.',
    bookBios: {
      4: 'Married to Daenerys. Rules Meereen during her absence. Arrested after the attack at the fighting pits.',
    },
    waypoints: [
      { book: 4, loc: 'meereen', confirmed: true },
    ],
  },

  'brown-ben-plumm': {
    name: 'Brown Ben Plumm',
    initial: 'BB',
    gender: 'm',
    house: 'none',
    houseLabel: 'Second Sons — Captain',
    aliases: [],
    portrait: 'default-male',
    bio: 'Captain of the Second Sons mercenary company. Served Daenerys briefly before betraying her and taking his company to the Yunkai\'i side. Claims distant Targaryen blood. May re-defect to Daenerys after the dragons return.',
    bookBios: {
      4: 'Commands the Second Sons for Yunkai during the siege of Meereen.',
    },
    waypoints: [
      { book: 3, loc: 'meereen', confirmed: true },
      { book: 4, loc: 'meereen', confirmed: true },
    ],
  },

  'penny': {
    name: 'Penny',
    initial: 'Pn',
    gender: 'f',
    house: 'none',
    houseLabel: 'Travelling dwarf performer',
    aliases: [],
    portrait: 'default-female',
    bio: 'A female dwarf performer who jousted at Joffrey\'s wedding with her brother Groat (who was then beheaded, mistaken for Tyrion). She encounters Tyrion in Essos and the two form an odd bond of shared circumstance as they travel toward Meereen.',
    bookBios: {
      4: 'Captured and enslaved alongside Tyrion. Fights in the Meereenese fighting pits. Survives the chaos.',
    },
    waypoints: [
      { book: 4, loc: 'meereen', confirmed: true },
    ],
  },

}); // end Object.assign

})();
