// ═══════════════════════════════════════════════════════════════════════════════
// CHUNK 5 — ADDITIONAL CHARACTERS: Missing POVs · Dornish · Essos Companions
// ═══════════════════════════════════════════════════════════════════════════════
(function() {

Object.assign(window.CHARS, {

  // ════════════════════════════════════════════════════════
  // ESSOS COMPANIONS — DAENERYS
  // ════════════════════════════════════════════════════════

  'daario-naharis': {
    name: 'Daario Naharis',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BY2ExMDJmNzMtMDVmZi00MDNlLWI1NzYtOTkxOTdlOWU4YzE4XkEyXkFqcGdeQXVyNTcxMzMwNTA@._V1._SX100_SY140_.jpg',
    initial: 'Da',
    gender: 'm',
    house: 'none',
    houseLabel: 'Stormcrows — captain / Meereen commander',
    aliases: ['The Sellsword'],
    bio: 'Flamboyant captain of the Stormcrows sellsword company. Killed his co-captains and delivered his company to Daenerys outside Yunkai. Becomes her lover and commander in Meereen. Left behind to hold Meereen when Daenerys departs on Drogon.',
    bookBios: {
      2: 'Defects to Daenerys with the Stormcrows. Captures Yunkai. Becomes her lover.',
      3: 'Commander of Daenerys\'s forces in Meereen. Battles the Sons of the Harpy.',
      4: 'Left as regent of Meereen when Daenerys rides Drogon away.',
    },
    waypoints: [
      { book: 2, loc: 'yunkai',   confirmed: true },
      { book: 3, loc: 'meereen', confirmed: true },
      { book: 4, loc: 'meereen', confirmed: true },
    ],
  },

  'strong-belwas': {
    name: 'Strong Belwas',
    initial: 'SB',
    gender: 'm',
    house: 'none',
    houseLabel: 'Daenerys\'s champion — former pit fighter',
    aliases: ['Belwas the Strong'],
    bio: 'A massive, battle-scarred former slave and pit-fighter sent by Illyrio Mopatis as Daenerys\'s bodyguard. Boasts he lets each opponent cut him once, then kills them. Eats poisoned locusts (meant for Daenerys) at the fighting pits and nearly dies.',
    bookBios: {
      1: 'Arrives in Qarth with Arstan Whitebeard to escort Daenerys.',
      2: 'Fights as Daenerys\'s champion. Travels with her across Slaver\'s Bay.',
      3: 'Guards Daenerys in Meereen.',
      4: 'Poisoned by locusts at the fighting pits; survives but gravely ill.',
    },
    waypoints: [
      { book: 1, loc: 'qarth',    confirmed: true },
      { book: 2, loc: 'meereen', confirmed: true },
      { book: 3, loc: 'meereen', confirmed: true },
      { book: 4, loc: 'meereen', confirmed: true },
    ],
  },

  // ════════════════════════════════════════════════════════
  // KING'S LANDING — TYRION'S CIRCLE
  // ════════════════════════════════════════════════════════

  'shae': {
    name: 'Shae',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BMTkwMTA0NTY5NF5BMl5BanBnXkFtZTcwNjk2ODg4OQ@@._V1._SX100_SY140_.jpg',
    initial: 'Sh',
    gender: 'f',
    house: 'none',
    houseLabel: 'Tyrion Lannister\'s mistress',
    aliases: [],
    deathBook: 2,
    bio: 'A young woman of unknown origin who became Tyrion Lannister\'s beloved mistress. He smuggled her into King\'s Landing as a handmaiden to Sansa Stark. She testified against Tyrion at his trial for Joffrey\'s murder. Found in Tywin\'s bed by Tyrion, who strangled her — a betrayal that destroyed him.',
    bookBios: {
      0: 'Meets Tyrion in the Lannister camp at the Kingsroad.',
      1: 'Smuggled into King\'s Landing as Sansa\'s handmaiden.',
      2: 'Testifies against Tyrion at his murder trial. Strangled by Tyrion in Tywin\'s chambers.',
    },
    waypoints: [
      { book: 0, loc: 'kings-landing', confirmed: false },
      { book: 1, loc: 'kings-landing', confirmed: true },
      { book: 2, loc: 'kings-landing', confirmed: true },
    ],
  },

  'dontos-hollard': {
    name: 'Ser Dontos Hollard',
    initial: 'DH',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BNzUzYzg5NGUtOWE5Zi00Y2MwLTg2YzQtMDZlOWE1NDZjZmFkXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1._SX100_SY140_.jpg',
    gender: 'm',
    house: 'none',
    houseLabel: 'Disgraced knight — Sansa\'s unlikely protector',
    aliases: ['Ser Dontos the Red', 'Florian (Sansa\'s nickname for him)'],
    deathBook: 2,
    bio: 'A disgraced, drunken knight whom Sansa saved from Joffrey\'s wrath on his name-day. He becomes her secret informant and promises to help her escape, giving her a family heirloom necklace (secretly made by Littlefinger) containing poison. Killed by Littlefinger\'s crossbowmen immediately after delivering Sansa to the ship.',
    bookBios: {
      0: 'Jester at court after losing his knighthood to drink.',
      1: 'Secretly conspires with Littlefinger to help Sansa escape.',
      2: 'Rows Sansa out to Littlefinger\'s ship after Joffrey\'s poisoning. Killed immediately after.',
    },
    waypoints: [
      { book: 0, loc: 'kings-landing', confirmed: true },
      { book: 1, loc: 'kings-landing', confirmed: true },
      { book: 2, loc: 'kings-landing', confirmed: true },
    ],
  },

  // ════════════════════════════════════════════════════════
  // WINTERFELL — HOUSEHOLD
  // ════════════════════════════════════════════════════════

  'maester-luwin': {
    name: 'Maester Luwin',
    initial: 'ML',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BODcwMjg0MDQ5MF5BMl5BanBnXkFtZTcwMTk2NDk4OQ@@._V1._SX100_SY140_.jpg',
    gender: 'm',
    house: 'none',
    houseLabel: 'Winterfell — Maester',
    aliases: [],
    deathBook: 1,
    bio: 'Maester of Winterfell and trusted advisor to House Stark. Educated all the Stark children. Remained at Winterfell when Theon Greyjoy seized it. After the Bolton forces burned the castle, he was mortally wounded and died under the heart tree, asking Osha to grant him the gift of mercy.',
    bookBios: {
      0: 'Maester of Winterfell. Advises Bran and the household.',
      1: 'Stays at Winterfell through Theon\'s capture. Mortally wounded when Ramsay sacks it. Dies under the Weirwood.',
    },
    waypoints: [
      { book: 0, loc: 'winterfell', confirmed: true },
      { book: 1, loc: 'winterfell', confirmed: true },
    ],
  },

  'jeyne-westerling': {
    name: 'Jeyne Westerling',
    initial: 'JW',
    gender: 'f',
    house: 'none',
    houseLabel: 'House Westerling — Queen in the North (briefly)',
    aliases: ['Queen Jeyne', 'The Young Queen'],
    bio: 'Daughter of a minor Westerlands house, she comforted Robb Stark after he learned of Bran and Rickon\'s "deaths." He married her in a moment of grief and honour, breaking his pact with the Freys and triggering the events leading to the Red Wedding. Survived the wedding as the Freys knew killing her would turn the West against them.',
    bookBios: {
      1: 'Meets Robb Stark at Riverrun. He marries her secretly.',
      2: 'Queen in the North. Survives the Red Wedding. Stays behind.',
      3: 'Returned to her family in the Westerlands, grieving.',
    },
    waypoints: [
      { book: 1, loc: 'riverrun',      confirmed: true },
      { book: 2, loc: 'the-twins',     confirmed: false },
      { book: 3, loc: 'casterly-rock', confirmed: false },
    ],
  },

  // ════════════════════════════════════════════════════════
  // DORNE — ADDITIONAL
  // ════════════════════════════════════════════════════════

  'ellaria-sand': {
    name: 'Ellaria Sand',
    photoUrl: 'https://https://m.media-amazon.com/images/M/MV5BNWQ0ZDE5NDUtNDVmZi00ZTI5LTkyOTgtNDhiNjMwZjY3ZjgwXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1._SX100_SY140_.jpg',
    initial: 'El',
    gender: 'f',
    house: 'martell',
    houseLabel: 'House Martell — Oberyn\'s paramour',
    aliases: ['Lady Ellaria'],
    bio: 'Bastard-born paramour of Oberyn Martell and mother of four of his Sand Snake daughters. Witnessed the horror of Oberyn\'s death at the hands of Gregor Clegane. Consumed by grief and rage, she pushes for war against the Lannisters, splitting from Doran\'s cautious approach.',
    bookBios: {
      2: 'With Oberyn Martell in King\'s Landing for Joffrey\'s wedding. Witnesses his death.',
      3: 'Back in Dorne, grief-stricken and wrathful. Urges war.',
      4: 'In Dorne. At odds with Doran Martell\'s patient plotting.',
    },
    waypoints: [
      { book: 2, loc: 'kings-landing', confirmed: true },
      { book: 3, loc: 'sunspear',      confirmed: true },
      { book: 4, loc: 'sunspear',      confirmed: true },
    ],
  },

  'arys-oakheart': {
    name: 'Ser Arys Oakheart',
    initial: 'AO',
    gender: 'm',
    house: 'none',
    houseLabel: 'Kingsguard — escort to Princess Myrcella',
    aliases: ['Ser Arys'],
    deathBook: 3,
    bio: 'A Kingsguard knight assigned to escort and protect Princess Myrcella in Dorne. Became romantically entangled with Arianne Martell. Participated (and died) in the Queenmaker plot — Arianne\'s scheme to crown Myrcella Queen of the Seven Kingdoms using Dornish succession law.',
    bookBios: {
      2: 'Arrives in Dorne with Princess Myrcella.',
      3: 'Drawn into Arianne Martell\'s Queenmaker plot. Killed by Areo Hotah when the plot is exposed.',
    },
    waypoints: [
      { book: 2, loc: 'sunspear',      confirmed: true },
      { book: 3, loc: 'water-gardens', confirmed: true },
    ],
  },

  'darkstar': {
    name: 'Ser Gerold Dayne',
    initial: 'GD',
    gender: 'm',
    house: 'none',
    houseLabel: 'House Dayne — Ser Gerold "Darkstar"',
    aliases: ['Darkstar', 'The Most Dangerous Man in Dorne'],
    bio: 'A knight of House Dayne, cousin of the famous Sword of the Morning. Striking, arrogant, and reckless. Joined Arianne\'s Queenmaker plot and then attacked Princess Myrcella as she was being taken back — slashing her face and cutting off her ear. Fled to his own castle of High Hermitage. Wanted by Doran Martell.',
    bookBios: {
      3: 'Participates in the Queenmaker plot. Wounds Myrcella. Flees to High Hermitage.',
      4: 'Hunted by Doran\'s agents (Arys Oakheart\'s replacement Balon Swann, and Obara Sand).',
    },
    waypoints: [
      { book: 3, loc: 'water-gardens', confirmed: true },
      { book: 4, loc: 'starfall',      confirmed: false },
    ],
  },

  // ════════════════════════════════════════════════════════
  // STANNIS'S CAMPAIGN — NORTH
  // ════════════════════════════════════════════════════════

  'stannis-north': {
    // Note: stannis-baratheon already exists, this is a reminder record is there
    // Additional context: Justin Massey, Asha under Stannis camp
    name: 'Justin Massey',
    initial: 'JM',
    gender: 'm',
    house: 'stannis',
    houseLabel: 'Stannis\'s knight — sent to the Free Cities',
    aliases: [],
    bio: 'A knight in Stannis\'s service. At the end of ADwD, Stannis sends him to Braavos with Tycho Nestoris to hire the Golden Company if Stannis falls, and to bring back Jon Snow\'s sister (implying Arya) if Stannis fails.',
    bookBios: {
      4: 'At Stannis\'s camp in the North. Sent to Braavos by Stannis.',
    },
    waypoints: [
      { book: 4, loc: 'castle-black', confirmed: true },
    ],
  },

  // ════════════════════════════════════════════════════════
  // VALE OF ARRYN
  // ════════════════════════════════════════════════════════

  'mya-stone': {
    name: 'Mya Stone',
    initial: 'My',
    gender: 'f',
    house: 'arryn',
    houseLabel: 'House Arryn — bastard of King Robert',
    aliases: ['Robert Baratheon\'s bastard'],
    bio: 'One of King Robert\'s many bastard children, raised at the Gates of the Moon in the Vale. A strong, capable young woman who guides travellers up the mountain road to the Eyrie. Sansa notices her resemblance to Robert. Feared she loved Harry the Heir before learning he is betrothed.',
    bookBios: {
      2: 'Guides Catelyn and Tyrion up the mountain to the Eyrie.',
      3: 'Still at the Gates of the Moon.',
      4: 'Continues her work at the Gates of the Moon.',
    },
    waypoints: [
      { book: 2, loc: 'eyrie', confirmed: true },
      { book: 4, loc: 'eyrie', confirmed: true },
    ],
  },

}); // end Object.assign

})();
