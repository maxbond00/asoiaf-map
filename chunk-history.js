// chunk-history.js — ASOIAF Interactive Map: Historical Timeline Data & Renderer

window.HIST_ERAS = [
  {
    name: "The Dawn Age",
    period: "~12,000–10,000 BC",
    color: "#3a6a5a",
    icon: "🌿",
    events: [
      {
        year: "~12,000 BC",
        title: "First Men Cross the Arm of Dorne",
        desc: "The First Men migrate from Essos across the land bridge, bringing bronze weapons and horses. They spread across Westeros, felling the sacred weirwood groves and warring with the Children of the Forest who had dwelt there for ages beyond counting."
      },
      {
        year: "~12,000 BC",
        title: "The Hammer of the Waters",
        desc: "The Children of the Forest call upon the ocean itself to halt the invasion, shattering the Arm of Dorne and flooding the land bridge into the sea. The broken remnants become the Stepstones. Still the First Men come, crossing by ship."
      },
      {
        year: "~10,000 BC",
        title: "The Pact on the Isle of Faces",
        desc: "After thousands of years of war, the First Men and Children of the Forest make peace upon the God's Eye, the great lake at the heart of Westeros. The land is divided: the deep forests to the Children, the open lands to men. The Pact endures for four thousand years."
      }
    ]
  },
  {
    name: "The Long Night",
    period: "~8,000 BC",
    color: "#3060a8",
    icon: "❄️",
    events: [
      {
        year: "~8,000 BC",
        title: "The Long Night Begins",
        desc: "A winter lasting a full generation descends upon the world. The sun vanishes for years on end. Darkness covers the earth from horizon to horizon. Crops fail, livestock perish, and men starve in their thousands. In the cold and the dark, something ancient awakens."
      },
      {
        year: "~8,000 BC",
        title: "The Others Descend",
        desc: "The White Walkers march from the Land of Always Winter, their coming heralded by unnatural cold and silence. They raise the dead to walk again as wights, swelling their armies with every village they destroy. The free peoples of Westeros are pushed to the very edge of extinction."
      },
      {
        year: "~8,000 BC",
        title: "Azor Ahai Forges Lightbringer",
        desc: "A legendary hero labors for a hundred days and nights to forge a hero's sword. Twice it fails. The third time, he plunges the blade into the heart of his beloved wife, Nissa Nissa, whose soul and strength flow into the steel. Lightbringer is born — a burning sword — and he carries it into the darkness."
      },
      {
        year: "~8,000 BC",
        title: "The Last Hero",
        desc: "A lone hero of the First Men sets out from the dying world to seek the Children of the Forest, journeying through blizzard and shadow with twelve companions. One by one his friends perish, his horse dies, his sword shatters. He presses on alone and finds the Children at last. An alliance is forged."
      },
      {
        year: "~8,000 BC",
        title: "The Battle for the Dawn",
        desc: "Men, giants, and the Children of the Forest unite beneath the dawn stars and drive the Others back to the uttermost north. The Long Night ends. The sun rises for the first time in living memory. An age of terror passes into legend, then into myth, then into a story mothers use to frighten children."
      }
    ]
  },
  {
    name: "The Age of Heroes",
    period: "~8,000–2,000 BC",
    color: "#8b6914",
    icon: "⚔️",
    events: [
      {
        year: "~8,000 BC",
        title: "The Wall is Built",
        desc: "Bran the Builder — founder of House Stark and first King in the North — raises a colossal barrier of ice, stone, and ancient magic stretching three hundred miles across the top of the world, seven hundred feet high at its peak. Giants and the Children of the Forest help in its raising. No one fully remembers how it was done."
      },
      {
        year: "~8,000 BC",
        title: "The Night's Watch is Founded",
        desc: "Nine thousand, nine hundred, and ninety-nine sworn brothers take the black to man the Wall in perpetuity — a brotherhood of rangers, builders, and stewards who swear to hold no lands, father no children, and defend the realm against whatever comes from the north. In time they will dwindle to hundreds."
      },
      {
        year: "~8,000 BC",
        title: "The Night's King",
        desc: "The thirteenth Lord Commander of the Night's Watch falls in love with a pale woman with cold blue eyes — possibly an Other herself. He names himself a king, names her his queen, and makes terrible sacrifices of his brothers to the darkness. He rules for thirteen years before Joramun of the Free Folk and the King in the North unite to bring him low. His name is struck from all records."
      },
      {
        year: "~6,000 BC",
        title: "The Andal Invasion",
        desc: "The Andals — tall, brown-haired men bearing iron weapons and the seven-pointed star carved into their flesh — cross the Narrow Sea from the hills of Essos. They conquer kingdom after kingdom in southern Westeros, burning the weirwood groves, slaughtering the Children, and driving out or converting the First Men. They bring the Faith of the Seven. Only the North resists."
      },
      {
        year: "~5,000 BC",
        title: "The Valyrian Freehold Rises",
        desc: "Far to the east, the Valyrian people discover dragons nesting in the volcanic Fourteen Fires. Through sorcery and sacrifice they learn to master the great beasts. The Valyrian Freehold grows into the greatest empire the world has ever seen, spreading across Essos for millennia, its roads and canals and learning dominating the known world."
      }
    ]
  },
  {
    name: "The Century of Blood",
    period: "~400–1 BC",
    color: "#c83030",
    icon: "🔥",
    events: [
      {
        year: "~400 BC",
        title: "The Doom of Valyria",
        desc: "Without warning, without explanation, the Fourteen Fires erupt simultaneously in a cataclysm unlike anything the world has ever seen. In a single day, the greatest empire in history is annihilated. Dragons perish. Dragonlords die screaming. Sorcerers and their secrets are lost. The Valyrian peninsula cracks and sinks, becoming the Smoking Sea — a hellscape of ash and poison. No one knows why it happened."
      },
      {
        year: "~400 BC",
        title: "The Targaryens Survive",
        desc: "House Targaryen alone among the great dragonlord families had evacuated their seat of power twelve years before the Doom, warned by a prophetic dream — the 'Dream of Spring' — that drove them to abandon Valyria and sail west to the island fortress of Dragonstone. They carry five dragons with them. They are the last dragonlords in the world."
      },
      {
        year: "~300 BC",
        title: "The Century of Blood",
        desc: "With Valyria destroyed, the former slave states and colonial territories of the empire war constantly for supremacy. The Free Cities emerge from the ashes. In the vast grasslands of the east, the Dothraki horsemen fill the power vacuum left by Valyria's fall, riding in khalsars of thousands, sacking the remnants of old civilization, and reshaping the world in their own image."
      },
      {
        year: "~27 BC",
        title: "Aegon Targaryen is Born",
        desc: "Born on Dragonstone to a family that has spent a century watching the world from their island redoubt, Aegon grows to manhood studying maps, dreaming of conquest, and forging alliances with his two sister-wives, Visenya and Rhaenys. He is the last dragonlord, and he is planning something no Targaryen has ever attempted: the unification of Westeros by fire and blood."
      }
    ]
  },
  {
    name: "Aegon's Conquest",
    period: "1–2 AC",
    color: "#c87020",
    icon: "🐉",
    events: [
      {
        year: "1 AC",
        title: "The Conquest Begins",
        desc: "Aegon I Targaryen lands at the mouth of the Blackwater Rush with his two sister-wives Visenya and Rhaenys, a force of fifteen hundred men, and three living dragons: Balerion the Black Dread — largest dragon in history — Meraxes, and Vhagar. The local lord bends the knee before a blow is struck. Aegon builds a crude fort of wood and mud at the place of landing. It will become King's Landing."
      },
      {
        year: "1 AC",
        title: "The Field of Fire",
        desc: "The armies of the Reach and the Rock unite in an alliance of fifty-five thousand men — the largest host ever assembled against Aegon — and march to end the conquest. Three dragons answer them. Four thousand men burn alive in fifteen minutes. King Mern IX of the Reach dies, extinguishing his entire line. King Loren of the Rock bends the knee. The battle is called the Field of Fire. It is never repeated."
      },
      {
        year: "1 AC",
        title: "Harrenhal Melted",
        desc: "Harren the Black has just completed his great castle on the shores of the God's Eye — forty years in building, the largest structure in Westeros, its towers so tall they scrape the clouds. Aegon offers terms. Harren refuses. That night, Balerion rises into the sky and breathes dragonfire down through the towers. The stone melts. The towers run like candles. Harren and all his sons die screaming inside walls they believed impregnable."
      },
      {
        year: "1 AC",
        title: "The Iron Throne Forged",
        desc: "Aegon commands the swords surrendered by his defeated enemies to be gathered — thousands of blades — and melted down by Balerion's fire, then fused into a seat of rulership. The resulting throne is ugly and jagged, a mass of twisted metal that cuts those who sit it carelessly. Aegon intends it that way. A king should never sit easily."
      },
      {
        year: "1 AC",
        title: "King's Landing Founded",
        desc: "Aegon builds his permanent capital on the three hills overlooking the place where he first set foot in Westeros, at the mouth of the Blackwater Rush. The city is planned and built quickly, its walls rising, its sept and castle taking shape. Within a generation it will surpass every city in Westeros. Within a century it will shelter a million souls."
      },
      {
        year: "2 AC",
        title: "The Last Kingdoms Submit",
        desc: "Dorne alone refuses to yield, protected by its deserts, its guerrilla resistance, and the death of Meraxes in Dorne — with Rhaenys aboard. All other kingdoms bend the knee. Aegon is crowned the First of His Name, King of the Andals, the Rhoynar, and the First Men, Lord of the Seven Kingdoms, Protector of the Realm. Six kingdoms, really. Dorne will not be brought into the fold for another century and a half."
      }
    ]
  },
  {
    name: "The Targaryen Dynasty",
    period: "1–283 AC",
    color: "#8030a0",
    icon: "👑",
    events: [
      {
        year: "48 AC",
        title: "Maegor the Cruel",
        desc: "King Maegor I — son of Aegon the Conqueror — seizes the throne over his nephew's claim and rules with a savagery that earns him his epithet. He executes rivals wholesale, burns the Faith Militant from existence, and dies alone on the Iron Throne, wrists slashed, his own crown having cut him open. No one claims to have killed him. Perhaps the throne itself took its due."
      },
      {
        year: "129–131 AC",
        title: "The Dance of the Dragons",
        desc: "Civil war tears the Targaryen dynasty apart as King Aegon II and his half-sister Rhaenyra both claim the Iron Throne. Dragon fights dragon above the cities of men. Brothers slay brothers. By the war's end, Aegon II is poisoned, Rhaenyra is fed to a dragon, and nearly every Targaryen dragon is dead. House Targaryen survives, hollowed out, robbed of its greatest weapon."
      },
      {
        year: "153 AC",
        title: "The Last Dragon Dies",
        desc: "The final Targaryen dragon — a small, stunted creature, nothing like the great beasts of Aegon's day — sickens and dies. With it goes the last of House Targaryen's supernatural power. They remain kings, but they are mortal kings now, as vulnerable as any other lord to blade and poison and treachery. The age of dragons is over."
      },
      {
        year: "196 AC",
        title: "The Blackfyre Rebellion",
        desc: "Daemon Blackfyre — bastard son of Aegon IV the Unworthy, legitimized by his dying father along with all his bastards — rises against the lawful king, armed with the Targaryen ancestral sword Blackfire. A great warrior beloved by knights, he gathers half the realm to his banner. He is killed at the Battle of the Redgrass Field by Bloodraven's archers. Four more Blackfyre rebellions follow over the next century."
      },
      {
        year: "260 AC",
        title: "The War of the Ninepenny Kings",
        desc: "A coalition of ambitious sellswords and exiled lords — the Band of Nine — carves up the Free Cities and sets its sights on Westeros. King Jaehaerys II rallies the realm. In the fighting on the Stepstones, a young Ser Barristan Selmy distinguishes himself as perhaps the finest knight alive. Tywin Lannister and Steffon Baratheon earn their reputations. The last Blackfyre pretender dies in the fighting."
      },
      {
        year: "277 AC",
        title: "The Defiance of Duskendale",
        desc: "Lord Denys Darklyn of Duskendale invites King Aerys II to hear his petition for a royal charter, then takes him captive and holds him prisoner for six months while the realm teeters. The daring knight Ser Barristan Selmy infiltrates the castle alone and frees the king. Aerys returns to the capital — but he is not the same man. The imprisonment breaks something in him. The Mad King begins to emerge."
      },
      {
        year: "282 AC",
        title: "Wildfire Caches Hidden",
        desc: "As his sanity crumbles, King Aerys II Targaryen — consumed by paranoia and a growing obsession with fire — commissions the Alchemists' Guild to produce enormous quantities of wildfire, the alchemical substance that burns through water, through stone, through flesh. He has the caches hidden throughout the tunnels and foundations of King's Landing itself, planning to burn the entire city rather than allow it to fall to his enemies. His pyromancer Rossart alone knows all the locations."
      }
    ]
  },
  {
    name: "Robert's Rebellion",
    period: "281–283 AC",
    color: "#1a5a8a",
    icon: "⚔️",
    events: [
      {
        year: "281 AC",
        title: "Tourney at Harrenhal",
        desc: "The greatest tournament in living memory is held at the ruins of Harrenhal, attended by all the great lords of the realm. In the final joust, Prince Rhaegar Targaryen — the realm's darling, poetic and brilliant — removes the winner's crown of winter roses from his own horse and rides past his own wife Elia Martell to set it in the lap of Lyanna Stark, naming her the Queen of Love and Beauty. The smiles in the crowd do not reach every eye."
      },
      {
        year: "282 AC",
        title: "The 'Abduction' of Lyanna Stark",
        desc: "Rhaegar Targaryen takes Lyanna Stark south. Her brother Brandon calls it abduction and rides to King's Landing demanding justice; Aerys arrests him as a traitor and murders him, along with Rickard Stark who comes seeking his son. Her betrothed Robert Baratheon rages. Ned Stark inherits the North. The truth of what passed between Rhaegar and Lyanna remains hidden in the Tower of Joy — and in the words of a dying woman."
      },
      {
        year: "282 AC",
        title: "The Rebellion Begins",
        desc: "Jon Arryn, Lord of the Eyrie and foster-father to both Eddard Stark and Robert Baratheon, refuses the king's demand to deliver their heads and raises his banners in open revolt. Ned and Robert join him. Ancient bonds of friendship and duty draw houses across the realm to their cause. A king's tyranny at last finds its reckoning."
      },
      {
        year: "282 AC",
        title: "Battle of the Bells",
        desc: "Robert Baratheon is trapped in the town of Stoney Sept, hidden by the smallfolk while Targaryen forces search house by house. Eddard Stark and the northern army arrive at the last moment, attacking from outside the walls. Robert emerges fighting. The battle rages through the streets to the sound of the town's bells ringing alarm. Robert kills half a dozen knights himself. The Targaryen forces break. The tide of the war turns."
      },
      {
        year: "283 AC",
        title: "Battle of the Trident",
        desc: "The decisive battle of the rebellion. Robert Baratheon and Prince Rhaegar Targaryen meet in the ford of the Trident River, each surrounded by their champions. The two men — who might, in another world, have been friends — come together in the shallows. Robert's warhammer caves in Rhaegar's chest, scattering the rubies sewn into his breastplate across the riverbed, to be found by fishermen for years after. The prince dies in the water. The war is over."
      },
      {
        year: "283 AC",
        title: "Sack of King's Landing",
        desc: "With the rebel army marching on the capital, Tywin Lannister arrives at the gates of King's Landing, claiming to come in loyalty to the crown. Mad King Aerys, persuaded by Pycelle, opens the gates. Once inside, Lannister soldiers sack the city. Ser Gregor Clegane, the Mountain, kills Prince Aegon — Rhaegar's infant son — and rapes and murders Princess Elia Martell. Tywin delivers the bodies to Robert Baratheon wrapped in Lannister crimson."
      },
      {
        year: "283 AC",
        title: "The Kingslayer",
        desc: "As King's Landing falls, King Aerys orders his pyromancer Rossart to ignite all the hidden wildfire caches and burn the city to ash — hundreds of thousands of souls consumed to deny Robert his prize. Ser Jaime Lannister, knight of the Kingsguard and sworn to protect the king with his life, kills Rossart before he can give the signal, then drives his sword through Aerys's back. He is found sitting on the Iron Throne by Eddard Stark. He will carry the name Kingslayer forever, and no one will ever ask why."
      },
      {
        year: "283 AC",
        title: "Tower of Joy",
        desc: "Eddard Stark rides south into Dorne with six companions, seeking his sister Lyanna. He finds the Tower of Joy guarded by three of the finest knights in the realm — members of the Kingsguard who refused to abandon their post even after the war was lost. Six go in; two come out. Eddard finds Lyanna dying in a bed of blood. She presses something into his hands and makes him swear a promise. He names the child she leaves behind Ned's bastard, Jon Snow, and takes him north to raise as his own."
      },
      {
        year: "283 AC",
        title: "Robert Crowned",
        desc: "Robert Baratheon, Lord of Storm's End, is crowned King of the Seven Kingdoms in the great throne room of the Red Keep. He never wanted the throne — he wanted Lyanna Stark, and she is dead. He will spend the next fifteen years growing fat, drinking deep, and hunting, while the realm is administered by others. He holds the throne, but he never truly rules it."
      }
    ]
  },
  {
    name: "The War of the Five Kings",
    period: "297–300 AC",
    color: "#8b0000",
    icon: "💀",
    events: [
      {
        year: "297 AC",
        title: "Death of Jon Arryn",
        desc: "The Hand of the King — Robert Baratheon's most trusted advisor and the man who raised both Robert and Eddard Stark — is poisoned by his own wife Lysa, manipulated by Petyr Baelish who convinced her the Lannisters were responsible. His dying words, passed to no one: 'The seed is strong.' He had discovered that Joffrey, Myrcella, and Tommen were not Robert's children. The game of thrones begins its endgame."
      },
      {
        year: "298 AC",
        title: "Eddard Stark Named Hand",
        desc: "King Robert rides north to Winterfell in a great procession to ask his oldest friend Eddard Stark to serve as Hand of the King. Ned is reluctant; his wife Catelyn begs him not to go. He agrees out of loyalty to Robert and duty to the realm. He takes his daughters south to King's Landing. He leaves his son Bran behind, pushed from a window for seeing too much. He will not survive the year."
      },
      {
        year: "298 AC",
        title: "Ned Stark Executed",
        desc: "Betrayed by Petyr Baelish at the crucial moment, his gold cloaks switching sides, Eddard Stark is taken prisoner. His confession is extracted by promises that he will be allowed to take the black and live. On the steps of the Great Sept of Baelor, before the watching crowd, King Joffrey orders his head struck off regardless. Sansa Stark watches from the crowd. Yoren of the Night's Watch covers Arya Stark's eyes. Illyn Payne swings the sword. Joffrey smiles."
      },
      {
        year: "299 AC",
        title: "Battle of the Blackwater",
        desc: "Stannis Baratheon sails against King's Landing with a fleet of hundreds and an army of thousands — perhaps the most legitimate claimant to the throne, and certainly the most dangerous. Tyrion Lannister, serving as acting Hand, chains the river mouth and floods the channel with wildfire ships. The explosion destroys half Stannis's fleet in green fire. Stannis nearly breaks through anyway — until Tywin Lannister arrives with the full strength of the Westerlands and House Tyrell at his back."
      },
      {
        year: "299 AC",
        title: "The Red Wedding",
        desc: "Robb Stark, the Young Wolf — undefeated in battle, his direwolf Grey Wind at his side — comes to the Twins to make peace with the Freys after breaking his marriage pact. Walder Frey has taken the bread and salt of guest right. The music changes. The doors close. Catelyn Stark watches in horror as crossbow bolts riddle her son. Grey Wind dies in his pen. Catelyn's throat is cut. The North remembers."
      },
      {
        year: "300 AC",
        title: "The Purple Wedding",
        desc: "King Joffrey Baratheon, First of His Name, is poisoned at his own wedding feast in the presence of the entire court. He dies choking and purple-faced, clawing at his own throat, in his mother's arms. Tyrion Lannister is arrested and condemned. In truth the poison — the Strangler — was in a stone in Sansa Stark's hairnet, placed there by Ser Dontos at Littlefinger's instruction. The scheme was Olenna Tyrell's. She and Baelish act together, then apart, to protect themselves."
      },
      {
        year: "300 AC",
        title: "Red Viper vs The Mountain",
        desc: "Tyrion Lannister, condemned to death for the king's murder, demands trial by combat. Oberyn Martell — the Red Viper of Dorne, who has waited decades for vengeance for his sister Elia — volunteers as champion. He faces Ser Gregor Clegane, the Mountain, who killed Elia and her children. Oberyn fights magnificently, his poison-tipped spear finding every gap in the Mountain's armor. He has him beaten. He demands a confession. He leans too close. Gregor's thumb finds his eye."
      },
      {
        year: "300 AC",
        title: "Cersei's Walk of Shame",
        desc: "The High Sparrow, armed with the crown's own legitimacy and the faith of the smallfolk, has Queen Cersei Lannister arrested on charges of fornication, adultery, and incest. Her confession extracted, she is sentenced to a walk of atonement through the streets of King's Landing — stripped naked, her hair shorn, accompanied by a septa ringing a bell and crying 'Shame.' She walks from the Sept of Baelor to the Red Keep through jeering, filth, and hatred. She arrives broken in body. Her mind is already planning."
      },
      {
        year: "300 AC",
        title: "Jon Snow Stabbed",
        desc: "Jon Snow, elected Lord Commander of the Night's Watch, has made unpopular decisions — allowing wildlings through the Wall, forging uneasy alliances with former enemies. In the yard of Castle Black, his steward Olly leads him to a false report of his missing uncle, Benjen Stark. His brothers fall upon him, each driving a blade into his body, each saying 'For the Watch.' He falls in the snow, bleeding out beneath the stars. Ghost howls. The Wall stands. Winter has come."
      }
    ]
  }
];

window.renderHistoryTab = (function () {
  var _stylesInjected = false;

  function injectStyles() {
    if (_stylesInjected) return;
    _stylesInjected = true;

    var style = document.createElement('style');
    style.id = 'hist-timeline-styles';
    style.textContent = [
      '/* ── History Timeline ───────────────────────────────────── */',
      '#history-content {',
      '  font-family: "Palatino Linotype","Book Antiqua",Palatino,serif;',
      '  background: #0d0800;',
      '  color: #c8a96e;',
      '  padding: 0 0 60px 0;',
      '  min-height: 100%;',
      '  box-sizing: border-box;',
      '}',

      /* ── intro banner ── */
      '.hist-intro {',
      '  text-align: center;',
      '  padding: 40px 24px 32px;',
      '  border-bottom: 1px solid #2a1e08;',
      '}',
      '.hist-intro h2 {',
      '  font-size: 1.7rem;',
      '  color: #d4a820;',
      '  letter-spacing: 0.12em;',
      '  text-transform: uppercase;',
      '  margin: 0 0 10px;',
      '  text-shadow: 0 0 18px rgba(212,168,32,0.35);',
      '}',
      '.hist-intro p {',
      '  font-size: 0.95rem;',
      '  color: #8a7050;',
      '  font-style: italic;',
      '  max-width: 600px;',
      '  margin: 0 auto;',
      '  line-height: 1.6;',
      '}',

      /* ── era section ── */
      '.hist-era {',
      '  position: relative;',
      '  padding: 0 0 16px;',
      '}',

      /* era header */
      '.hist-era-header {',
      '  display: flex;',
      '  align-items: center;',
      '  padding: 28px 32px 20px;',
      '  position: relative;',
      '  z-index: 2;',
      '}',
      '.hist-era-icon {',
      '  font-size: 1.8rem;',
      '  margin-right: 14px;',
      '  flex-shrink: 0;',
      '  filter: drop-shadow(0 0 6px currentColor);',
      '}',
      '.hist-era-title-wrap { flex: 1; min-width: 0; }',
      '.hist-era-name {',
      '  font-size: 1.25rem;',
      '  font-weight: bold;',
      '  letter-spacing: 0.08em;',
      '  text-transform: uppercase;',
      '  margin: 0 0 3px;',
      '}',
      '.hist-era-period {',
      '  font-size: 0.82rem;',
      '  color: #7a6040;',
      '  font-style: italic;',
      '  letter-spacing: 0.05em;',
      '}',
      '.hist-era-rule {',
      '  flex: 1;',
      '  height: 1px;',
      '  margin-left: 20px;',
      '  opacity: 0.5;',
      '}',

      /* ── vertical spine ── */
      '.hist-spine-wrap {',
      '  position: relative;',
      '  padding: 0 0 8px;',
      '}',
      '.hist-spine {',
      '  position: absolute;',
      '  left: 50%;',
      '  top: 0;',
      '  bottom: 0;',
      '  width: 2px;',
      '  transform: translateX(-50%);',
      '  background: linear-gradient(to bottom, transparent 0%, #d4a820 8%, #d4a820 92%, transparent 100%);',
      '  opacity: 0.35;',
      '  pointer-events: none;',
      '  z-index: 0;',
      '}',

      /* ── event row ── */
      '.hist-event-row {',
      '  display: flex;',
      '  align-items: flex-start;',
      '  position: relative;',
      '  padding: 4px 32px 4px;',
      '  margin-bottom: 6px;',
      '  z-index: 1;',
      '}',

      /* node on the spine */
      '.hist-node {',
      '  position: absolute;',
      '  left: 50%;',
      '  top: 22px;',
      '  width: 12px;',
      '  height: 12px;',
      '  border-radius: 50%;',
      '  transform: translateX(-50%);',
      '  border: 2px solid #d4a820;',
      '  background: #0d0800;',
      '  box-shadow: 0 0 8px rgba(212,168,32,0.5);',
      '  z-index: 2;',
      '  flex-shrink: 0;',
      '}',

      /* left / right halves */
      '.hist-event-left {',
      '  width: calc(50% - 28px);',
      '  text-align: right;',
      '  padding-right: 28px;',
      '  box-sizing: border-box;',
      '}',
      '.hist-event-right {',
      '  width: calc(50% - 28px);',
      '  text-align: left;',
      '  padding-left: 28px;',
      '  box-sizing: border-box;',
      '}',
      '.hist-event-spacer {',
      '  width: calc(50% - 28px);',
      '}',

      /* card */
      '.hist-card {',
      '  background: linear-gradient(135deg, #110e04 0%, #0f0c02 100%);',
      '  border: 1px solid #2a1e08;',
      '  border-radius: 4px;',
      '  padding: 14px 16px 15px;',
      '  position: relative;',
      '  transition: border-color 0.2s, box-shadow 0.2s;',
      '  cursor: default;',
      '}',
      '.hist-card:hover {',
      '  border-color: #d4a820;',
      '  box-shadow: 0 0 16px rgba(212,168,32,0.18), inset 0 0 20px rgba(212,168,32,0.04);',
      '}',

      /* connector line from card to spine node */
      '.hist-connector {',
      '  position: absolute;',
      '  top: 27px;',
      '  height: 1px;',
      '  background: linear-gradient(to right, #d4a820, transparent);',
      '  opacity: 0.3;',
      '  z-index: 0;',
      '}',
      '.hist-event-row.hist-left .hist-connector {',
      '  right: 0;',
      '  left: calc(50% - 27px);',
      '  background: linear-gradient(to left, #d4a820, transparent);',
      '}',
      '.hist-event-row.hist-right .hist-connector {',
      '  left: 50%;',
      '  right: calc(50% - 27px + 28px);',
      '}',

      '.hist-year {',
      '  font-size: 0.72rem;',
      '  letter-spacing: 0.1em;',
      '  text-transform: uppercase;',
      '  color: #7a6040;',
      '  margin-bottom: 5px;',
      '}',
      '.hist-title {',
      '  font-size: 0.98rem;',
      '  font-weight: bold;',
      '  color: #d4a820;',
      '  margin-bottom: 7px;',
      '  line-height: 1.35;',
      '  text-shadow: 0 0 10px rgba(212,168,32,0.25);',
      '}',
      '.hist-desc {',
      '  font-size: 0.84rem;',
      '  color: #a08050;',
      '  line-height: 1.65;',
      '  font-style: italic;',
      '}',

      /* era-colored accent strip on card */
      '.hist-card::before {',
      '  content: "";',
      '  position: absolute;',
      '  top: 0; left: 0; bottom: 0;',
      '  width: 3px;',
      '  border-radius: 4px 0 0 4px;',
      '  background: var(--era-color, #d4a820);',
      '  opacity: 0.7;',
      '}',
      '.hist-event-left .hist-card::before {',
      '  left: auto; right: 0;',
      '  border-radius: 0 4px 4px 0;',
      '}',

      /* era separator ornament */
      '.hist-era-sep {',
      '  text-align: center;',
      '  padding: 6px 0 2px;',
      '  color: #3a2810;',
      '  font-size: 0.7rem;',
      '  letter-spacing: 0.3em;',
      '  user-select: none;',
      '}',

      /* ── MOBILE: single column ── */
      '@media (max-width: 640px) {',
      '  .hist-spine { left: 20px; }',
      '  .hist-event-row { padding: 4px 12px 4px 44px; flex-direction: column; }',
      '  .hist-event-left,',
      '  .hist-event-right { width: 100%; text-align: left; padding: 0; }',
      '  .hist-event-spacer { display: none; }',
      '  .hist-node { left: 20px; }',
      '  .hist-connector { display: none; }',
      '  .hist-event-left .hist-card::before { left: 0; right: auto; border-radius: 4px 0 0 4px; }',
      '  .hist-era-header { padding: 20px 16px 14px; }',
      '  .hist-era-rule { display: none; }',
      '}'
    ].join('\n');

    document.head.appendChild(style);
  }

  /* ── helpers ───────────────────────────────────────────── */

  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function hexToRgba(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
  }

  function buildEraHTML(era, eraIndex) {
    var color = era.color || '#d4a820';
    var html = '';

    /* era header */
    html += '<div class="hist-era">';
    html += '<div class="hist-era-header">';
    html += '<span class="hist-era-icon">' + era.icon + '</span>';
    html += '<div class="hist-era-title-wrap">';
    html += '<div class="hist-era-name" style="color:' + esc(color) + ';text-shadow:0 0 14px ' + hexToRgba(color, 0.4) + '">' + esc(era.name) + '</div>';
    html += '<div class="hist-era-period">' + esc(era.period) + '</div>';
    html += '</div>';
    html += '<div class="hist-era-rule" style="background:linear-gradient(to right,' + esc(color) + ',transparent)"></div>';
    html += '</div>'; /* /era-header */

    /* events spine */
    html += '<div class="hist-spine-wrap">';
    html += '<div class="hist-spine"></div>';

    var events = era.events || [];
    events.forEach(function (ev, i) {
      var side = (i % 2 === 0) ? 'hist-left' : 'hist-right';
      var isLeft = (i % 2 === 0);

      html += '<div class="hist-event-row ' + side + '">';

      /* connector line */
      html += '<div class="hist-connector"></div>';

      /* node */
      html += '<div class="hist-node" style="border-color:' + esc(color) + ';box-shadow:0 0 8px ' + hexToRgba(color, 0.55) + '"></div>';

      if (isLeft) {
        /* left side: card first, then spacer */
        html += '<div class="hist-event-left">';
        html += buildCard(ev, color);
        html += '</div>';
        html += '<div class="hist-event-spacer"></div>';
      } else {
        /* right side: spacer first, then card */
        html += '<div class="hist-event-spacer"></div>';
        html += '<div class="hist-event-right">';
        html += buildCard(ev, color);
        html += '</div>';
      }

      html += '</div>'; /* /event-row */
    });

    html += '</div>'; /* /spine-wrap */

    /* era separator ornament */
    html += '<div class="hist-era-sep">⸻ ✦ ⸻</div>';

    html += '</div>'; /* /era */

    return html;
  }

  function buildCard(ev, color) {
    return (
      '<div class="hist-card" style="--era-color:' + esc(color) + '">' +
        '<div class="hist-year">' + esc(ev.year) + '</div>' +
        '<div class="hist-title">' + esc(ev.title) + '</div>' +
        '<div class="hist-desc">' + esc(ev.desc) + '</div>' +
      '</div>'
    );
  }

  /* ── main render function ──────────────────────────────── */

  return function renderHistoryTab() {
    injectStyles();

    var container = document.getElementById('history-content');
    if (!container) {
      console.warn('renderHistoryTab: #history-content not found.');
      return;
    }

    var eras = window.HIST_ERAS || [];
    var html = '';

    /* intro banner */
    html += '<div class="hist-intro">';
    html += '<h2>The History of Ice and Fire</h2>';
    html += '<p>From the Dawn Age to the War of the Five Kings — twelve thousand years of war, wonder, and ruin, as told by the maesters of the Citadel and the singers of the North.</p>';
    html += '</div>';

    eras.forEach(function (era, idx) {
      html += buildEraHTML(era, idx);
    });

    container.innerHTML = html;
  };
}());
