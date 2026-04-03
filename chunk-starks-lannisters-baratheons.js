// CHUNK 2 — STARKS · LANNISTERS · BARATHEONS
(function(){ Object.assign(window.CHARS, {

  // ══════════════════════════════════════════
  // HOUSE STARK
  // ══════════════════════════════════════════

  'ned-stark': {
    name:'Eddard "Ned" Stark', initial:'N', gender:'m',
    house:'stark', houseLabel:'House Stark — Lord of Winterfell, Warden of the North',
    aliases:['Lord Stark','The Quiet Wolf'],
    photoUrl:'https://thronesapi.com/assets/images/ned-stark.jpg',
    _skin:'#b08060',_hair:'#2a1a08',_eye:'#4a5870',_beard:'short',
    deathBook:0,
    bio:'Lord of Winterfell and Warden of the North. A man of iron honour in a world of duplicity. Named Hand of the King by his old friend Robert Baratheon, he travelled to King\'s Landing only to uncover treason surrounding the throne.',
    bookBios:{0:'Discovers Joffrey\'s true parentage. Betrayed by Littlefinger and executed at the Great Sept of Baelor.'},
    waypoints:[
      {book:0.0, loc:'winterfell',   confirmed:true},
      {book:0.22,loc:'kings-landing',confirmed:true},  // rides south with Robert; arrives KL
      {book:0.85,loc:'kings-landing',confirmed:true},  // imprisoned; executed
    ],
  },

  'catelyn-stark': {
    name:'Catelyn Tully Stark', initial:'C', gender:'f',
    house:'tully', houseLabel:'House Tully (by birth) / House Stark (by marriage)',
    aliases:['Lady Stark','Lady Stoneheart','Mother Merciless'],
    photoUrl:'https://thronesapi.com/assets/images/catelyn-stark.jpg',
    _skin:'#c09878',_hair:'#8b1a00',_eye:'#4a6888',
    deathBook:2,
    bio:'Lady of Winterfell and wife of Eddard Stark. After her murder at the Red Wedding, she is resurrected without mercy by Beric Dondarrion as the vengeful Lady Stoneheart.',
    bookBios:{
      0:'Rides to King\'s Landing after Bran\'s fall. Captures Tyrion Lannister.',
      1:'Acts as Robb\'s diplomat; frees Jaime Lannister hoping to recover her daughters.',
      2:'Murdered at the Red Wedding — throat slit. Resurrected as Lady Stoneheart.',
      3:'Leads the Brotherhood Without Banners in merciless Riverlands vengeance.',
      4:'Still haunting the Riverlands as Lady Stoneheart (probable).',
    },
    waypoints:[
      {book:0.0, loc:'winterfell',      confirmed:true},
      {book:0.28,loc:'crossroads-inn', confirmed:true},  // rides south; captures Tyrion
      {book:0.5, loc:'eyrie',          confirmed:true},  // goes to Eyrie with Tyrion
      {book:0.8, loc:'riverrun',       confirmed:true},  // returns south to Robb
      {book:1.0, loc:'riverrun',     confirmed:true},
      {book:1.5, loc:'storms-end',   confirmed:false}, // parley with Renly
      {book:1.8, loc:'riverrun',     confirmed:true},  // returns north of Riverrun
      {book:2.0, loc:'the-twins',    confirmed:true},  // Red Wedding
      {book:3.0, loc:'riverlands',   confirmed:true},  // Lady Stoneheart
      {book:4.0, loc:'riverlands',   confirmed:false},
    ],
  },

  'robb-stark': {
    name:'Robb Stark', initial:'Ro', gender:'m',
    house:'stark', houseLabel:'House Stark — King in the North',
    aliases:['The Young Wolf','King in the North'],
    photoUrl:'https://thronesapi.com/assets/images/robb-stark.jpg',
    _skin:'#b08060',_hair:'#3a1a08',_eye:'#4a6888',_beard:'short',
    isKing:true, deathBook:2,
    bio:'Eldest son of Ned Stark, undefeated in battle, but his marriage pact betrayal triggered the Red Wedding and his murder.',
    bookBios:{
      0:'Marches south to free his father. Wins at Whispering Wood. Crowned King in the North.',
      1:'Raids the Westerlands; wins every battle but bleeds politically.',
      2:'Marries Jeyne Westerling, breaking his Frey pact. Murdered at the Red Wedding.',
    },
    waypoints:[
      {book:0.0, loc:'winterfell',  confirmed:true},
      {book:0.6, loc:'the-twins',   confirmed:false}, // marching south
      {book:0.85,loc:'riverrun',    confirmed:true},  // captures Jaime; crowned KitN
      {book:1.0, loc:'riverrun',    confirmed:true},
      {book:1.4, loc:'casterly-rock',confirmed:false},// raids Westerlands
      {book:1.8, loc:'riverrun',    confirmed:true},  // back to base
      {book:2.0, loc:'riverrun',    confirmed:true},
      {book:2.45,loc:'the-twins',   confirmed:true},  // Red Wedding
    ],
  },

  'sansa-stark': {
    name:'Sansa Stark', initial:'Sa', gender:'f',
    house:'stark', houseLabel:'House Stark',
    aliases:['Alayne Stone (alias)','Little Bird'],
    photoUrl:'https://thronesapi.com/assets/images/sansa-stark.jpeg',
    _skin:'#d0b090',_hair:'#8b1a00',_eye:'#5080a0',
    bio:'Eldest Stark daughter, held hostage in King\'s Landing, then smuggled north by Littlefinger and hidden as his bastard daughter Alayne Stone in the Eyrie.',
    bookBios:{
      0:'Betrothed to Joffrey; watches her father executed.',
      1:'Abused at court. Secretly aided by Ser Dontos.',
      2:'Forced to marry Tyrion. Escapes King\'s Landing after Joffrey\'s poisoning.',
      3:'Hidden at the Eyrie as Alayne Stone. Witnesses Lysa Arryn\'s murder.',
      4:'Remains at the Eyrie / the Fingers, groomed by Littlefinger.',
    },
    waypoints:[
      {book:0.0, loc:'winterfell',   confirmed:true},
      {book:0.35,loc:'kings-landing',confirmed:true},  // rides south with family
      {book:1.0, loc:'kings-landing',confirmed:true},
      {book:2.0, loc:'kings-landing',confirmed:true},
      {book:2.75,loc:'narrow-sea',   confirmed:true},  // escapes on Littlefinger's ship
      {book:3.0, loc:'eyrie',        confirmed:true},  // hidden at the Eyrie as Alayne Stone
      {book:4.0, loc:'eyrie',        confirmed:true},
    ],
  },

  'arya-stark': {
    name:'Arya Stark', initial:'Ar', gender:'f',
    house:'stark', houseLabel:'House Stark',
    aliases:['Arry','Nymeria','Weasel','Cat of the Canals','Mercy','No One'],
    photoUrl:'https://thronesapi.com/assets/images/arya-stark.jpg',
    _skin:'#b07858',_hair:'#2a1a08',_eye:'#5a7040',
    bio:'Youngest Stark daughter, wolf-blooded and fierce. Witnesses her father\'s execution, survives Harrenhal, escapes across the Narrow Sea, and trains as a Faceless Man in Braavos.',
    bookBios:{
      0:'Flees King\'s Landing after Ned\'s execution. Taken north with the Night\'s Watch.',
      1:'Prisoner at Harrenhal. Receives three deaths from Jaqen H\'ghar. Escapes.',
      2:'Travels with the Brotherhood, then Sandor Clegane. Witnesses the Red Wedding. Flees.',
      3:'Sails to Braavos. Enters the House of Black and White.',
      4:'Apprentice Faceless Man in Braavos, working as Cat of the Canals.',
    },
    waypoints:[
      {book:0,   loc:'winterfell',   confirmed:true},
      {book:0.3, loc:'kings-landing',confirmed:true},  // rides south with father
      {book:0.9, loc:'harrenhal',    confirmed:false},  // flees KL after Ned's death, taken north
      {book:1,   loc:'harrenhal',    confirmed:true},   // captive Harrenhal
      {book:1.7, loc:'riverlands',   confirmed:true},   // escapes with Brotherhood
      {book:2,   loc:'riverlands',   confirmed:true},   // Brotherhood / Hound
      {book:2.8, loc:'eyrie',        confirmed:false},  // near the Twins at Red Wedding, flees
      {book:3,   loc:'braavos',      confirmed:true},   // sails to Braavos
      {book:4,   loc:'braavos',      confirmed:true},
    ],
  },

  'bran-stark': {
    name:'Brandon Stark', initial:'Br', gender:'m',
    house:'stark', houseLabel:'House Stark — Lord of Winterfell (in absentia)',
    aliases:['Bran','The Winged Wolf'],
    photoUrl:'https://thronesapi.com/assets/images/bran-stark.jpg',
    _skin:'#b08060',_hair:'#3a2010',_eye:'#4a6888',
    bio:'Second son of Ned Stark, crippled by a fall pushed by Jaime Lannister. A greenseer and skinchanger who travels beyond the Wall to find the three-eyed crow.',
    bookBios:{
      0:'Crippled. Survives an assassination attempt. Discovers his skinchanging gift.',
      1:'Holds Winterfell. Escapes after Theon\'s capture.',
      2:'Travels beyond the Wall with the Reed siblings and Hodor.',
      3:'Beyond the Wall, in the frozen Haunted Forest.',
      4:'Reaches the cave of the three-eyed raven. Learning greensight.',
    },
    waypoints:[
      {book:0,   loc:'winterfell',  confirmed:true},
      {book:1,   loc:'winterfell',  confirmed:true},
      {book:1.6, loc:'moat-cailin', confirmed:false}, // flees Winterfell after Theon's capture
      {book:2,   loc:'castle-black',confirmed:false}, // passing Castle Black direction
      {book:2.3, loc:'beyond-wall', confirmed:true},
      {book:3,   loc:'beyond-wall', confirmed:true},
      {book:3.5, loc:'hardhome',    confirmed:false}, // travelling deeper north
      {book:4,   loc:'beyond-wall', confirmed:true},
    ],
  },

  'rickon-stark': {
    name:'Rickon Stark', initial:'Ri', gender:'m',
    house:'stark', houseLabel:'House Stark',
    aliases:[],
    photoUrl:'https://thronesapi.com/assets/images/rickon.jpg',
    _skin:'#c09070',_hair:'#3a1a08',_eye:'#4a6888',
    bio:'Youngest Stark child. Wild and untamed. Flees Winterfell with Osha the wildling and eventually ends up on the remote island of Skagos.',
    bookBios:{
      0:'At Winterfell.',
      1:'Escapes with Osha after Theon\'s capture.',
      4:'On Skagos with Osha; Wyman Manderly sends Davos to retrieve him.',
    },
    waypoints:[
      {book:0,loc:'winterfell', confirmed:true},
      {book:1,loc:'last-hearth',confirmed:false},
      {book:2,loc:'skagos',     confirmed:true},
      {book:3,loc:'skagos',     confirmed:true},
      {book:4,loc:'skagos',     confirmed:true},
    ],
  },

  'jon-snow': {
    name:'Jon Snow', initial:'J', gender:'m',
    house:'nighswatch', houseLabel:'Night\'s Watch — 998th Lord Commander',
    aliases:['Lord Snow','The Bastard of Winterfell'],
    photoUrl:'https://thronesapi.com/assets/images/jon-snow.jpg',
    _skin:'#a87858',_hair:'#1a0a00',_eye:'#3a4a60',_beard:'short',
    bio:'Raised as Ned Stark\'s bastard. Joins the Night\'s Watch, rises to Lord Commander, infiltrates the Free Folk, falls for Ygritte, and is stabbed by mutinous brothers at the end of ADwD.',
    bookBios:{
      0:'Leaves Winterfell for the Night\'s Watch at Castle Black.',
      1:'Ranges beyond the Wall. Ordered to infiltrate Mance Rayder\'s wildlings.',
      2:'Lives among Free Folk. Fights at the Wall. Elected Lord Commander.',
      3:'Lord Commander. Negotiates with Stannis. Sends Sam to Oldtown.',
      4:'Makes controversial choices — opens the Wall to wildlings. Stabbed by mutineers.',
    },
    waypoints:[
      {book:0,   loc:'winterfell',  confirmed:true},
      {book:0.2, loc:'castle-black',confirmed:true},  // joins Night's Watch
      {book:1,   loc:'beyond-wall', confirmed:true},  // great ranging
      {book:1.5, loc:'beyond-wall', confirmed:true},  // infiltrating wildlings
      {book:2,   loc:'beyond-wall', confirmed:true},  // with Free Folk
      {book:2.7, loc:'castle-black',confirmed:true},  // returns to fight at Wall
      {book:3,   loc:'castle-black',confirmed:true},
      {book:4,   loc:'castle-black',confirmed:true},
    ],
  },

  'benjen-stark': {
    name:'Benjen Stark', initial:'Be', gender:'m',
    photoUrl:'https://thronesapi.com/assets/images/benjen-stark.jpg',
    house:'stark', houseLabel:'House Stark / Night\'s Watch — First Ranger',
    aliases:['First Ranger','Coldhands (probable)'],
    _skin:'#a87050',_hair:'#1a0a00',_eye:'#4a5870',_beard:'short',
    bio:'Younger brother of Ned Stark and First Ranger of the Night\'s Watch. Vanished beyond the Wall. Possibly the undead figure Coldhands who guides Bran.',
    bookBios:{
      0:'Departs on a ranging beyond the Wall. Never returns.',
      4:'Possibly Coldhands beyond the Wall (unconfirmed in text).',
    },
    waypoints:[
      {book:0,loc:'castle-black',confirmed:true},
      {book:0,loc:'beyond-wall',confirmed:true},
      {book:4,loc:'beyond-wall',confirmed:false},
    ],
  },

  'hodor': {
    name:'Walder (Hodor)', initial:'Ho', gender:'m',
    house:'stark', houseLabel:'House Stark — Stableboy, Bran\'s legs',
    aliases:['Hodor'],
    photoUrl:'https://thronesapi.com/assets/images/hodor.jpg',
    _skin:'#906040',_hair:'#1a0a00',_eye:'#3a3020',
    bio:'A gentle giant who carries Bran across the world. Bran skinchanges into him to fight. His real name is Walder.',
    bookBios:{4:'In the cave of the three-eyed raven beyond the Wall with Bran.'},
    waypoints:[
      {book:0,loc:'winterfell',confirmed:true},
      {book:1,loc:'winterfell',confirmed:true},
      {book:2,loc:'beyond-wall',confirmed:true},
      {book:4,loc:'beyond-wall',confirmed:true},
    ],
  },

  'osha': {
    name:'Osha', initial:'Os', gender:'f',
    photoUrl:'https://thronesapi.com/assets/images/osha.jpg',
    house:'freefolk', houseLabel:'Free Folk — Wildling woman',
    aliases:[],
    _skin:'#a07050',_hair:'#2a2018',_eye:'#3a4030',
    bio:'A wildling woman captured at Winterfell who becomes a loyal protector of the Stark children, ultimately taking Rickon to safety on Skagos.',
    bookBios:{4:'On Skagos with Rickon (probable).'},
    waypoints:[
      {book:0,loc:'winterfell', confirmed:true},
      {book:1,loc:'last-hearth',confirmed:false},
      {book:2,loc:'skagos',     confirmed:true},
      {book:3,loc:'skagos',     confirmed:true},
      {book:4,loc:'skagos',     confirmed:true},
    ],
  },

  'meera-reed': {
    name:'Meera Reed', initial:'Me', gender:'f',
    photoUrl:'https://thronesapi.com/assets/images/meera-reed.jpg',
    house:'none', houseLabel:'House Reed of Greywater Watch',
    aliases:[],
    _skin:'#b09070',_hair:'#3a2010',_eye:'#4a5040',
    bio:'Daughter of Howland Reed. Skilled hunter and spear-woman. Escorts Bran beyond the Wall to the three-eyed raven.',
    bookBios:{4:'In the cave of the three-eyed raven beyond the Wall.'},
    waypoints:[
      {book:1,loc:'winterfell',confirmed:true},
      {book:2,loc:'beyond-wall',confirmed:true},
      {book:4,loc:'beyond-wall',confirmed:true},
    ],
  },

  'jojen-reed': {
    name:'Jojen Reed', initial:'Jo', gender:'m',
    photoUrl:'https://thronesapi.com/assets/images/jojen-reed.jpg',
    house:'none', houseLabel:'House Reed of Greywater Watch',
    aliases:[],
    _skin:'#b09878',_hair:'#3a2010',_eye:'#4a5040',
    bio:'Son of Howland Reed. A greenseer with prophetic visions. Guides Bran north; may have died near the raven\'s cave.',
    bookBios:{4:'Fate uncertain — likely died near the three-eyed raven\'s cave.'},
    waypoints:[
      {book:1,loc:'winterfell',confirmed:true},
      {book:2,loc:'beyond-wall',confirmed:true},
      {book:4,loc:'beyond-wall',confirmed:true},
    ],
  },

  // ══════════════════════════════════════════
  // HOUSE LANNISTER
  // ══════════════════════════════════════════

  'tywin-lannister': {
    name:'Tywin Lannister', initial:'Ty', gender:'m',
    house:'lannister', houseLabel:'House Lannister — Lord of Casterly Rock, Hand of the King',
    aliases:['The Great Lion','Lord Tywin'],
    photoUrl:'https://thronesapi.com/assets/images/tywin-lannister.jpg',
    _skin:'#c09878',_hair:'#888888',_eye:'#b8a030',_beard:'full',
    deathBook:2,
    bio:'The most powerful man in Westeros. Orchestrated the Red Wedding. Served as Hand of the King until shot by his own son Tyrion while sitting on the privy.',
    bookBios:{
      0:'Commands in the Riverlands.',
      1:'Saves King\'s Landing at the Blackwater.',
      2:'Hand of the King. Engineers the Red Wedding. Killed by Tyrion.',
    },
    waypoints:[
      {book:0.0, loc:'riverlands',   confirmed:true},  // commands in the Riverlands
      {book:1.0, loc:'harrenhal',    confirmed:true},  // establishes HQ at Harrenhal
      {book:1.45,loc:'kings-landing',confirmed:true},  // rides to save KL at Blackwater
      {book:2.0, loc:'kings-landing',confirmed:true},  // Hand of the King
    ],
  },

  'cersei-lannister': {
    name:'Cersei Lannister', initial:'Ce', gender:'f',
    house:'lannister', houseLabel:'House Lannister — Queen Regent',
    aliases:['The Lioness','Queen Regent'],
    photoUrl:'https://thronesapi.com/assets/images/cersei.jpg',
    _skin:'#d0b090',_hair:'#d4a820',_eye:'#50a850',
    isKing:true,
    bio:'Twin sister of Jaime and mother of Joffrey, Tommen, and Myrcella. Queen Regent whose paranoid scheming ultimately collapses when the Faith Militant arrests her.',
    bookBios:{
      0:'Queen of Westeros. Conspires to have Ned killed.',
      1:'Regent for Joffrey. Survives the Blackwater.',
      2:'Regent. Schemes against Tyrion.',
      3:'Regent for Tommen. Alienates all allies. Arrested by the High Sparrow; forced to do a walk of shame.',
      4:'Reinstated as regent. Plots revenge with Qyburn.',
    },
    waypoints:[
      {book:0,loc:'kings-landing',confirmed:true},
      {book:4,loc:'kings-landing',confirmed:true},
    ],
  },

  'jaime-lannister': {
    name:'Jaime Lannister', initial:'Ja', gender:'m',
    house:'lannister', houseLabel:'House Lannister — Lord Commander of the Kingsguard',
    aliases:['Kingslayer','The Lion of Lannister'],
    photoUrl:'https://thronesapi.com/assets/images/jaime-lannister.jpg',
    _skin:'#c8a880',_hair:'#d4a820',_eye:'#60a860',_beard:'short',
    bio:'Twin of Cersei. Once the greatest knight in the realm. Loses his sword hand, then slowly rediscovers his honour alongside Brienne of Tarth.',
    bookBios:{
      0:'Captured by Robb Stark at Whispering Wood.',
      1:'Prisoner at Riverrun.',
      2:'Released by Catelyn. Loses his hand. Returns to King\'s Landing. Lord Commander of the Kingsguard.',
      3:'Pacifies the Riverlands. Abandons Cersei.',
      4:'Besieges Riverrun. Last seen summoned by Lady Stoneheart.',
    },
    waypoints:[
      {book:0.0, loc:'kings-landing',confirmed:true},
      {book:0.35,loc:'riverlands',   confirmed:true},  // marches with Lannister army
      {book:0.4, loc:'riverrun',      confirmed:true},  // captured at Whispering Wood
      {book:1,   loc:'riverrun',      confirmed:true},  // prisoner
      {book:1.5, loc:'the-twins',     confirmed:false}, // moved north briefly
      {book:2,   loc:'harrenhal',     confirmed:true},  // travelling back, stops at Harrenhal
      {book:2.4, loc:'kings-landing', confirmed:true},  // arrives KL, Lord Commander
      {book:3,   loc:'riverlands',    confirmed:true},  // pacifies Riverlands
      {book:3.8, loc:'storms-end',    confirmed:false}, // south near Storm's End area
      {book:4,   loc:'riverlands',    confirmed:true},  // Riverrun siege
    ],
  },

  'tyrion-lannister': {
    name:'Tyrion Lannister', initial:'Tr', gender:'m',
    house:'lannister', houseLabel:'House Lannister — former Hand of the King',
    aliases:['The Imp','Halfman','Hugor Hill','Yollo'],
    photoUrl:'https://thronesapi.com/assets/images/tyrion-lannister.jpg',
    _skin:'#c09878',_hair:'#a88030',_eye:'#606030',_beard:'short',
    bio:'The youngest and cleverest Lannister. Masterminded the defence at the Blackwater, then framed for Joffrey\'s murder, escaped to Essos, and journeys toward Daenerys.',
    bookBios:{
      0:'Captured at the Eyrie; wins trial by combat. Returns to King\'s Landing.',
      1:'Hand of the King. Masterminds the Battle of the Blackwater.',
      2:'Forced to marry Sansa. Framed for Joffrey\'s murder. Kills Shae and Tywin. Escapes.',
      3:'Hiding in Pentos with Illyrio Mopatis.',
      4:'Travels across Essos. Captured by Jorah Mormont. Enslaved. Reaches Meereen.',
    },
    waypoints:[
      {book:0.0, loc:'winterfell',   confirmed:true},  // visits Winterfell with the Starks
      {book:0.1, loc:'castle-black', confirmed:true},  // rides north to the Wall with Jon
      {book:0.22,loc:'eyrie',        confirmed:true},  // captured by Catelyn; Eyrie trial
      {book:0.35,loc:'kings-landing',confirmed:true},  // wins trial; heads to KL
      {book:1.0, loc:'kings-landing',confirmed:true},
      {book:2.0, loc:'kings-landing',confirmed:true},
      {book:2.85,loc:'pentos',       confirmed:true},  // flees after killing Shae & Tywin
      {book:3.0, loc:'pentos',       confirmed:true},  // hiding with Illyrio all of AFfC
      {book:4.0, loc:'pentos',       confirmed:true},  // still Pentos at ADwD start
      {book:4.2, loc:'qohor',        confirmed:false}, // down the Rhoyne by boat
      {book:4.4, loc:'volantis',     confirmed:true},  // reaches Volantis; captured by Jorah
      {book:4.65,loc:'yunkai',       confirmed:false}, // slave ship toward Slaver's Bay
      {book:4.88,loc:'meereen',      confirmed:true},  // arrives; fights in the pits
    ],
  },

  'kevan-lannister': {
    name:'Kevan Lannister', initial:'Ke', gender:'m',
    photoUrl:'https://thronesapi.com/assets/images/kevan-lannister.jpg',
    house:'lannister', houseLabel:'House Lannister — Lord Regent',
    aliases:[],
    _skin:'#c09878',_hair:'#9a8060',_eye:'#4a5040',_beard:'short',
    deathBook:4,
    bio:'Tywin\'s loyal younger brother and the only one competent enough to stabilise the realm after Cersei\'s disasters. Murdered by Varys in the ADwD epilogue.',
    bookBios:{4:'Lord Regent. Stabilises the Small Council. Murdered by Varys.'},
    waypoints:[
      {book:0,loc:'riverlands',confirmed:true},
      {book:4,loc:'kings-landing',confirmed:true},
    ],
  },

  'joffrey': {
    name:'Joffrey Baratheon', initial:'Jf', gender:'m',
    house:'lannister', houseLabel:'House Baratheon of King\'s Landing (true-born of House Lannister)',
    aliases:['King Joffrey','The Boy King'],
    photoUrl:'https://thronesapi.com/assets/images/joffrey.jpg',
    _skin:'#d0c090',_hair:'#d4a820',_eye:'#60a860',
    isKing:true, deathBook:2,
    bio:'Cruel, sadistic son of Cersei and Jaime (not Robert). Ordered Ned Stark\'s execution. Poisoned at his own wedding — the Purple Wedding.',
    bookBios:{
      0:'King. Orders Ned Stark\'s execution.',
      1:'King at the Blackwater. Flees during the battle.',
      2:'Poisoned at his wedding to Margaery. Dies at the Purple Wedding.',
    },
    waypoints:[
      {book:0,loc:'kings-landing',confirmed:true},
      {book:2,loc:'kings-landing',confirmed:true},
    ],
  },

  'myrcella': {
    name:'Myrcella Baratheon', initial:'My', gender:'f',
    photoUrl:'https://thronesapi.com/assets/images/myrcella-baratheon.jpg',
    house:'lannister', houseLabel:'House Baratheon of King\'s Landing',
    aliases:[],
    _skin:'#d0b090',_hair:'#d4a820',_eye:'#50a850',
    deathBook:4,
    bio:'Daughter of Cersei and Jaime. Sent to Dorne as a ward; ear cut off in a Queenmaker plot. Poisoned by Ellaria Sand while leaving Dorne.',
    bookBios:{
      1:'Sent to Dorne as a political ward.',
      3:'Ear cut off in Arianne\'s Queenmaker plot.',
      4:'Poisoned by Ellaria Sand; dies leaving Dorne.',
    },
    waypoints:[
      {book:0,loc:'kings-landing',confirmed:true},
      {book:1,loc:'sunspear',confirmed:true},
      {book:3,loc:'water-gardens',confirmed:true},
      {book:4,loc:'narrow-sea',confirmed:true},
    ],
  },

  'tommen': {
    name:'Tommen Baratheon', initial:'To', gender:'m',
    house:'lannister', houseLabel:'House Baratheon of King\'s Landing — King of the Seven Kingdoms',
    aliases:['King Tommen'],
    photoUrl:'https://thronesapi.com/assets/images/tommen.jpg',
    _skin:'#d0c090',_hair:'#d4a820',_eye:'#60a860',
    isKing:true,
    bio:'Gentle, easily manipulated youngest child of Cersei. Becomes king after Joffrey\'s death. Married to Margaery Tyrell; caught between his wife and his mother.',
    bookBios:{
      3:'King. Marries Margaery Tyrell.',
      4:'King. Faith Militant crisis deepens around him.',
    },
    waypoints:[
      {book:0,loc:'kings-landing',confirmed:true},
      {book:4,loc:'kings-landing',confirmed:true},
    ],
  },

  'lancel-lannister': {
    name:'Lancel Lannister', initial:'La', gender:'m',
    photoUrl:'https://thronesapi.com/assets/images/lancel-lannister.jpg',
    house:'lannister', houseLabel:'House Lannister',
    aliases:['Ser Lancel','Brother Lancel'],
    _skin:'#c09878',_hair:'#d4a820',_eye:'#60a860',
    bio:'Cousin of the Lannister twins; was Cersei\'s lover and complicit in Robert\'s death. Wounds in the Blackwater lead him to zealous Faith conversion.',
    bookBios:{4:'Fanatical member of the Faith Militant in King\'s Landing.'},
    waypoints:[
      {book:0,loc:'kings-landing',confirmed:true},
      {book:4,loc:'kings-landing',confirmed:true},
    ],
  },

  // ══════════════════════════════════════════
  // HOUSE BARATHEON
  // ══════════════════════════════════════════

  'robert-baratheon': {
    name:'Robert Baratheon', initial:'Rb', gender:'m',
    house:'baratheon', houseLabel:'House Baratheon — King of the Seven Kingdoms',
    aliases:['King Robert','The Usurper (Targaryen perspective)'],
    photoUrl:'https://thronesapi.com/assets/images/king-robert.jpg',
    _skin:'#b89060',_hair:'#2a1a00',_eye:'#3050a0',_beard:'full',
    isKing:true, deathBook:0,
    bio:'King of the Seven Kingdoms who won the throne by killing Rhaegar Targaryen. A great warrior grown fat in peace. Died from a boar wound aided by too much wine — Cersei\'s doing.',
    bookBios:{0:'Dies from a boar wound, wine supply poisoned on Cersei\'s orders.'},
    waypoints:[
      {book:0,loc:'kings-landing',confirmed:true},
    ],
  },

  'stannis-baratheon': {
    name:'Stannis Baratheon', initial:'St', gender:'m',
    house:'stannis', houseLabel:'House Baratheon of Dragonstone — the rightful King',
    aliases:['King Stannis','The Rightful King'],
    photoUrl:'https://thronesapi.com/assets/images/stannis.jpg',
    _skin:'#a88058',_hair:'#2a1a00',_eye:'#3050a0',_beard:'short',
    isKing:true,
    bio:'Robert\'s younger brother and true heir. Humourless, inflexible, but just. Advised by Melisandre. Defeated at the Blackwater, marches north to save the Wall.',
    bookBios:{
      0:'At Dragonstone. Receives Ned\'s letter about the succession.',
      1:'Invades King\'s Landing. Defeated at the Blackwater.',
      2:'Retreats to Dragonstone.',
      3:'Sails north; rescues the Night\'s Watch from Mance\'s attack.',
      4:'Marching on Winterfell through a blizzard. Army disintegrating.',
    },
    waypoints:[
      {book:0.0, loc:'dragonstone',  confirmed:true},
      {book:1.35,loc:'narrow-sea',   confirmed:false}, // sailing to Blackwater
      {book:1.5, loc:'kings-landing',confirmed:true},  // Blackwater battle
      {book:2.0, loc:'dragonstone',  confirmed:true},  // retreats
      {book:2.85,loc:'castle-black', confirmed:true},  // sails north; saves the Wall
      {book:3.0, loc:'castle-black', confirmed:true},
      {book:4.3, loc:'winterfell',   confirmed:false}, // marching through blizzard
    ],
  },

  'renly-baratheon': {
    name:'Renly Baratheon', initial:'Re', gender:'m',
    photoUrl:'https://thronesapi.com/assets/images/renly-baratheon.jpg',
    isKing:true,
    house:'baratheon', houseLabel:'House Baratheon of Storm\'s End',
    aliases:['King Renly'],
    _skin:'#c09878',_hair:'#1a1a00',_eye:'#305090',_beard:'short',
    isKing:true, deathBook:1,
    bio:'Robert\'s youngest, most charismatic brother. Crowned himself King of the South with Tyrell support. Murdered by a shadow assassin conjured by Melisandre.',
    bookBios:{
      0:'Flees King\'s Landing after Robert dies.',
      1:'Commands the largest army in Westeros. Murdered by a shadow creature at Storm\'s End.',
    },
    waypoints:[
      {book:0,loc:'kings-landing',confirmed:true},
      {book:1,loc:'storms-end',confirmed:true},
    ],
  },

  'melisandre': {
    name:'Melisandre of Asshai', initial:'Ml', gender:'f',
    house:'none', houseLabel:'Red Priestess of R\'hllor — Adviser to Stannis',
    aliases:['The Red Woman','The Red Priestess'],
    photoUrl:'https://thronesapi.com/assets/images/melisandre.jpg',
    _skin:'#d09080',_hair:'#8b0000',_eye:'#c82020',
    bio:'A red priestess from Asshai who burns people as offerings, births shadow demons, and sees visions in her fires. Utterly devoted to her god and to Stannis — whom she believes is Azor Ahai reborn.',
    bookBios:{
      0:'At Dragonstone with Stannis.',
      1:'Births shadow demons. Burns Renly\'s leeches.',
      3:'Travels north with Stannis.',
      4:'Remains at Castle Black when Stannis marches south. Sees visions of Jon Snow.',
    },
    waypoints:[
      {book:0.0, loc:'dragonstone',  confirmed:true},
      {book:1.0, loc:'dragonstone',  confirmed:true},   // births shadow assassins
      {book:1.4, loc:'storms-end',   confirmed:true},   // shadow kills Renly
      {book:2.0, loc:'dragonstone',  confirmed:true},
      {book:2.85,loc:'castle-black', confirmed:true},   // sails north with Stannis
      {book:3.0, loc:'castle-black', confirmed:true},
      {book:4.0, loc:'castle-black', confirmed:true},
    ],
  },

  'davos-seaworth': {
    name:'Davos Seaworth', initial:'Dv', gender:'m',
    house:'none', houseLabel:'House Seaworth — Hand of the King to Stannis',
    aliases:['The Onion Knight','Ser Davos'],
    photoUrl:'https://thronesapi.com/assets/images/davos-seaworth.png',
    _skin:'#a87858',_hair:'#505050',_eye:'#4a5060',_beard:'short',
    bio:'Former smuggler knighted by Stannis. One of the most honest men in Westeros. Hand of the King and Stannis\'s conscience.',
    bookBios:{
      0:'At Dragonstone.',
      1:'Commands at the Blackwater; loses sons.',
      2:'Imprisoned for plotting against Melisandre; released; made Hand.',
      3:'Sent to the Night\'s Watch by Stannis.',
      4:'At White Harbor; freed by Wyman Manderly; sent to retrieve Rickon from Skagos.',
    },
    waypoints:[
      {book:0.0, loc:'dragonstone',  confirmed:true},
      {book:1.45,loc:'narrow-sea',   confirmed:false}, // sailing to Blackwater
      {book:1.55,loc:'kings-landing',confirmed:true},  // Blackwater — loses sons
      {book:2.0, loc:'dragonstone',  confirmed:true},  // imprisoned, then released as Hand
      {book:2.85,loc:'castle-black', confirmed:false}, // sails north with Stannis
      {book:3.3, loc:'white-harbor', confirmed:true},  // AFfC — White Harbor
      {book:4.0, loc:'white-harbor', confirmed:true},
    ],
  },

  'shireen-baratheon': {
    name:'Shireen Baratheon', initial:'Sh', gender:'f',
    photoUrl:'https://thronesapi.com/assets/images/shireen-baratheon.jpg',
    house:'stannis', houseLabel:'House Baratheon of Dragonstone',
    aliases:[],
    _skin:'#c09878',_hair:'#2a1a08',_eye:'#3050a0',
    bio:'Stannis\'s daughter, disfigured by greyscale on one cheek. Sweet and bookish; teaches Davos to read. Travels north with her father\'s army.',
    bookBios:{4:'At Castle Black area while Stannis marches on Winterfell.'},
    waypoints:[
      {book:0,loc:'dragonstone',confirmed:true},
      {book:4,loc:'castle-black',confirmed:true},
    ],
  },

  'selyse-baratheon': {
    name:'Selyse Baratheon', initial:'Sy', gender:'f',
    photoUrl:'https://thronesapi.com/assets/images/selyse-baratheon.jpg',
    house:'stannis', houseLabel:'House Baratheon of Dragonstone — Queen to Stannis',
    aliases:[],
    _skin:'#c0a878',_hair:'#603020',_eye:'#3050a0',
    bio:'Wife of Stannis, more zealously devoted to R\'hllor than her husband. Cold toward their daughter Shireen.',
    bookBios:{4:'At Castle Black area with Shireen.'},
    waypoints:[
      {book:0,loc:'dragonstone',confirmed:true},
      {book:4,loc:'castle-black',confirmed:true},
    ],
  },

}); })();
