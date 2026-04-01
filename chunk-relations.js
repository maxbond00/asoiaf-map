// ═══════════════════════════════════════════════════════════════════════════════
// CHUNK 7 — RELATIONS: key character connections shown in the character panel
// ═══════════════════════════════════════════════════════════════════════════════
(function(){
  const R = {
    'ned-stark':         [{id:'catelyn-stark',type:'Wife'},{id:'robb-stark',type:'Son'},{id:'sansa-stark',type:'Daughter'},{id:'arya-stark',type:'Daughter'},{id:'bran-stark',type:'Son'},{id:'jon-snow',type:'Son (secret)'},{id:'benjen-stark',type:'Brother'}],
    'catelyn-stark':     [{id:'ned-stark',type:'Husband'},{id:'robb-stark',type:'Son'},{id:'sansa-stark',type:'Daughter'},{id:'arya-stark',type:'Daughter'},{id:'bran-stark',type:'Son'},{id:'lysa-arryn',type:'Sister'},{id:'edmure-tully',type:'Brother'}],
    'robb-stark':        [{id:'ned-stark',type:'Father'},{id:'catelyn-stark',type:'Mother'},{id:'grey-wind',type:'Direwolf'},{id:'jeyne-westerling',type:'Wife'},{id:'theon-greyjoy',type:'Ward / Betrayer'}],
    'sansa-stark':       [{id:'ned-stark',type:'Father'},{id:'catelyn-stark',type:'Mother'},{id:'lady',type:'Direwolf'},{id:'petyr-baelish',type:'Protector / Schemer'},{id:'joffrey-baratheon',type:'Ex-betrothed'},{id:'tyrion-lannister',type:'Forced husband'}],
    'arya-stark':        [{id:'ned-stark',type:'Father'},{id:'catelyn-stark',type:'Mother'},{id:'nymeria',type:'Direwolf'},{id:'syrio-forel',type:'Sword teacher'},{id:'sandor-clegane',type:'Captor / Protector'},{id:'jaqen-hghar',type:'Faceless Man'}],
    'bran-stark':        [{id:'ned-stark',type:'Father'},{id:'catelyn-stark',type:'Mother'},{id:'summer',type:'Direwolf'},{id:'hodor',type:'Companion'},{id:'meera-reed',type:'Companion'}],
    'jon-snow':          [{id:'ghost',type:'Direwolf'},{id:'ned-stark',type:'Father (believed)'},{id:'ygritte',type:'Lover'},{id:'samwell-tarly',type:'Best friend'},{id:'stannis-baratheon',type:'Unlikely ally'},{id:'tormund-giantsbane',type:'Ally'}],
    'tyrion-lannister':  [{id:'tywin-lannister',type:'Father'},{id:'cersei-lannister',type:'Sister'},{id:'jaime-lannister',type:'Brother'},{id:'shae',type:'Lover (killed)'},{id:'bronn',type:'Sellsword / Friend'},{id:'varys',type:'Unlikely ally'},{id:'sansa-stark',type:'Forced wife'}],
    'cersei-lannister':  [{id:'tywin-lannister',type:'Father'},{id:'jaime-lannister',type:'Twin / Lover'},{id:'tyrion-lannister',type:'Despised brother'},{id:'joffrey-baratheon',type:'Son'},{id:'tommen',type:'Son'},{id:'petyr-baelish',type:'Political rival'}],
    'jaime-lannister':   [{id:'cersei-lannister',type:'Twin / Lover'},{id:'tyrion-lannister',type:'Brother'},{id:'tywin-lannister',type:'Father'},{id:'brienne-of-tarth',type:'Oath-bound companion'},{id:'beric-dondarrion',type:'Enemy'}],
    'tywin-lannister':   [{id:'cersei-lannister',type:'Daughter'},{id:'jaime-lannister',type:'Son'},{id:'tyrion-lannister',type:'Son (despised)'},{id:'kevan-lannister',type:'Brother'}],
    'joffrey-baratheon': [{id:'cersei-lannister',type:'Mother'},{id:'king-robert',type:'Father (believed)'},{id:'jaime-lannister',type:'True father'},{id:'sansa-stark',type:'Ex-betrothed'},{id:'margaery-tyrell',type:'Wife'}],
    'daenerys':          [{id:'viserys',type:'Brother (dead)'},{id:'jorah-mormont',type:'Advisor'},{id:'daario-naharis',type:'Lover'},{id:'barristan-selmy',type:'Kingsguard'},{id:'missandei',type:'Advisor / Friend'},{id:'drogon',type:'Dragon'},{id:'rhaegal',type:'Dragon'},{id:'viserion',type:'Dragon'}],
    'stannis-baratheon': [{id:'melisandre',type:'Red priestess'},{id:'davos-seaworth',type:'Hand of the King'},{id:'selyse-baratheon',type:'Wife'},{id:'shireen-baratheon',type:'Daughter'},{id:'renly-baratheon',type:'Brother (enemy)'}],
    'petyr-baelish':     [{id:'lysa-arryn',type:'Wife (murdered)'},{id:'sansa-stark',type:'Protégée / Pawn'},{id:'cersei-lannister',type:'Political ally'},{id:'varys',type:'Rival'},{id:'catelyn-stark',type:'Lost love'}],
    'varys':             [{id:'petyr-baelish',type:'Rival'},{id:'tyrion-lannister',type:'Unlikely ally'},{id:'daenerys',type:'Secret patron'}],
    'melisandre':        [{id:'stannis-baratheon',type:'King she serves'},{id:'davos-seaworth',type:'Enemy / Rival'},{id:'jon-snow',type:'Resurrected'}],
    'davos-seaworth':    [{id:'stannis-baratheon',type:'King'},{id:'melisandre',type:'Distrusted rival'},{id:'shireen-baratheon',type:'Friend / Teacher'}],
    'theon-greyjoy':     [{id:'robb-stark',type:'Ward / Betrayed him'},{id:'balon-greyjoy',type:'Father'},{id:'yara-greyjoy',type:'Sister'},{id:'ramsay-bolton',type:'Captor / Torturer'}],
    'jorah-mormont':     [{id:'daenerys',type:'Queen he serves'},{id:'jeor-mormont',type:'Estranged father'},{id:'daario-naharis',type:'Rival'}],
    'brienne-of-tarth':  [{id:'jaime-lannister',type:'Oath-bound companion'},{id:'catelyn-stark',type:'Sworn to'},{id:'sansa-stark',type:'Sworn to protect'},{id:'podrick-payne',type:'Squire'}],
    'sandor-clegane':    [{id:'gregor-clegane',type:'Hated brother'},{id:'arya-stark',type:'Captor / Protector'},{id:'joffrey-baratheon',type:'Served'}],
    'samwell-tarly':     [{id:'jon-snow',type:'Best friend'},{id:'jeor-mormont',type:'Commander'},{id:'gilly',type:'Lover'}],
    'ygritte':           [{id:'jon-snow',type:'Lover'},{id:'tormund-giantsbane',type:'Leader'}],
    'ramsay-bolton':     [{id:'roose-bolton',type:'Father'},{id:'theon-greyjoy',type:'Prisoner / Toy'}],
    'roose-bolton':      [{id:'ramsay-bolton',type:'Son'},{id:'robb-stark',type:'Betrayed / Murdered'}],
    'oberyn-martell':    [{id:'ellaria-sand',type:'Paramour'},{id:'doran-martell',type:'Brother'},{id:'gregor-clegane',type:'Nemesis / Killer'}],
    'drogon':            [{id:'daenerys',type:'Dragon-mother'},{id:'rhaegal',type:'Brother'},{id:'viserion',type:'Brother'}],
    'ghost':             [{id:'jon-snow',type:'Warg-bond'}],
    'grey-wind':         [{id:'robb-stark',type:'Warg-bond'}],
    'summer':            [{id:'bran-stark',type:'Warg-bond'}],
    'nymeria':           [{id:'arya-stark',type:'Warg-bond'}],
    'lady':              [{id:'sansa-stark',type:'Warg-bond'}],
    'shaggydog':         [{id:'rickon-stark',type:'Warg-bond'}],
  };
  Object.entries(R).forEach(([id,rels])=>{
    if(window.CHARS&&window.CHARS[id]) window.CHARS[id].relations=rels;
    if(window.CREATURES&&window.CREATURES[id]) window.CREATURES[id].relations=rels;
  });
})();
