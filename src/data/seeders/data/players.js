// SK GAMING: http://www.sk-gaming.com/content/1870532-sk-gaming-enters-arena-of-valor

let PLAYERS = [
  //
  // Flipsid3
  //
  {
    name: 'alwaysgr33n',
    role: 'support',
    real_name: "Drew Miller",
    twitter: 'alwaysgr33n',
    email: 'always.gr33n.gaming@gmail.com',
    team_id: 1
  },
  {
    name: 'dualspirals',
    real_name: "Martin Chaney",
    role: 'midlane',
    twitch: 'dualspirals',
    twitter: 'dualspirals',
    email: 'dualspiralsf@gmail.com',
    team_id: 1
  },
  {
    name: 'vaor',
    real_name: "Arick Jacobsen",
    twitter: 'AoV_Vaor',
    team_id: 1
  },
  {
    name: 'Zelph',
    real_name: "Alexi Wolinski",
    email: 'thezelphtwitch@gmail.com',
    twitch: 'thezelph',
    team_id: 1
  },
  {
    name: 'bruticus',
    role: 'sidelaner',
    real_name: "Kaden Smith",
    twitter: 'F3Bruticus',
    team_id: 1
  },
  {
    name: 'Cheesy',
    real_name: "Joe Barrett",
    twitter: 'CheeeeeeeesyGG',
    twitch: 'cheeeeeeeesy',
    team_id: 1
  },
  //
  // Allegiance ALG
  //
  {
    name: 'rocker',
    twitter: 'AovRocker',
    team_id: 2
  },
  {
    name: 'sleepy',
    twitter: 'Sleepy1105',
    team_id: 2
  },
  {
    name: 'mts',
    twitter: 'mtsamazing',
    role: 'toplane',
    team_id: 2
  },
  {
    name: 'rest',
    real_name: 'Tanner Scadden',
    twitter: 'RestAOV',
    twitch: 'RestAOV',
    team_id: 2
  },
  {
    name: 'pyu',
    team_id: 2
  },
  {
    name: 'ko',
    role: 'toplane',
    twitter: 'ImtheKO1',
    team_id: 2
  },
  //
  // Immortals IMT
  //
  {
    name: 'Dave',
    real_name: "David Mao",
    twitter: 'Assassin_Dave',
    youtube: 'UCSKlX7a2woYDF22KDAj4m8Q',
    team_id: 3
  },
  {
    name: 'BoBo',
    team_id: 3
  },
  {
    name: 'KzFox',
    twitter: 'KevinzFox',
    team_id: 3
  },
  {
    name: '80sHero',
    role: 'midlane',
    twitter: '80sHero_',
    twitch: '80sHero',
    team_id: 3
  },
  {
    name: 'xTears',
    team_id: 3
  },
  {
    name: 'Beg',
    team_id: 3
  },
  {
    name: 'Neo',
    team_id: 3
  },
  //
  // Dino Riders
  //
  {
    name: 'CL\'z',
    twitter: 'drCLz',
    team_id: 4,
  },
  {
    name: 'ZK',
    team_id: 4,
  },
  {
    name: 'YikeZ',
    twitter: 'DrYikeZ',
    email: 'AovAmir@icloud.com',
    team_id: 4,
  },
  {
    name: 'HooN',
    team_id: 4,
  },
  {
    name: 'Beast',
    team_id: 4,
  },
  {
    name: 'Shozen',
    team_id: 4,
  },
  //
  // Nova
  //
  {
    name: 'iFlekzz',
    team_id: 5,
    youtube: 'iFlekzz',
    twitter: 'iFlekzz'
  },
  {
    name: 'Darkbreaker',
    team_id: 5,
    twitter: 'HieuNguyen995',
    youtube: 'UCb-1HjL0QKvyijvsqEQIaGg'
  },
  {
    name: 'y01',
    team_id: 5,
    twitter: 'whyohone'
  },
  {
    name: 'CEBKAje',
    team_id: 5,
    twitter: 'Cebkaje'
  },
  {
    name: 'Crayen',
    team_id: 5,
    twitter: '_crayen'
  },
  {
    name: 'Poseidon',
    real_name: 'Vladyslav Maksymchuk',
    team_id: 5,
    twitter: 'roksen09',
    email: 'vlat618@gmail.com'
  },
  //
  // SK Gaming
  //
  {
    name: 'EDU',
    real_name: "Okan Hapakaz",
    team_id: 6,
    twitter: 'OkanHpkz',
    twitch: 'VivaxEDU',
    youtube: 'UCJ5YTbSYNTVuJuitH8Kqv-A' // channel
  },
  {
    name: 'Knight',
    real_name: "Halil Berke Öztürk",
    team_id: 6,
    twitter: 'Allenkys911',
    instagram: 'berkeozturk09'
  },
  {
    name: 'Light',
    real_name: "Yusuf Onat",
    team_id: 6,
    twitter: 'Yusufonat15',
    instagram: 'yusuf.onat2',
    youtube: 'UCxjXcbz9RyEOIxBdqgcUFXQ'
  },
  {
    name: 'Lui',
    real_name: "Yunus Ataş",
    team_id: 6,
    twitter: 'Luiyunus'
  },
  {
    name: 'Pich',
    real_name: "Yunus Saral",
    team_id: 6,
    twitter: 'PichSK',
    facebook: 'PichMoba',
    youtube: 'UC5cS6OGrmpWkYKp-nLO8cHw'
  },
  //
  // For the Dream
  //
  {
    name: 'shurko',
    role: 'midlane',
    team_id: 7,
    twitter: 'shurkotv',
    twitch: 'shurkotv',
    youtube: 'UCJCvhnTVGhTUFCHw_iu9XkQ'
  },
  {
    name: 'Arena of Violet',
    role: 'jungler',
    twitter: 'ArenaofViolet',
    team_id: 7,
  },
  {
    name: 'Grizzlyq',
    team_id: 7,
  },
  {
    name: 'simjo',
    twitter: 'SimjoYt',
    twitch: 'simjotv',
    team_id: 7,
  },
  {
    name: 'Rezz',
    role: 'solo lane',
    twitter: 'TheRealRezz',
    facebook: 'RezzGaming',
    twitch: 'rezzlove',
    youtube: 'UCbg0u5-U4FF8sXCVG_xJ47w',
    team_id: 7,
  },
  //
  // Team Royal
  //
  {
    name: 'Bobbykart',
    team_id: 8,
  },
  {
    name: 'Hakai',
    team_id: 8,
  },
  {
    name: 'Lee',
    role: 'jungler',
    youtube: 'UC78sG8xRRiYDIBBbj1Y9nYw',
    twitter: 'AovLee',
    team_id: 8,
  },
  {
    name: 'Memorized',
    twitter: 'AoV_V8',
    team_id: 8,
  },
  {
    name: 'V8',
    twitter: 'AoV_V8',
    team_id: 8,
  },
  // Vitality
  //
  {
    name: 'Flow',
    real_name: 'Florian Frisch',
    twitter: 'Vitality_Flow',
    team_id: 9
  },
  {
    name: 'Redemption',
    team_id: 9
  },
  {
    name: 'Suitaro',
    twitter: 'VitalitySuitaro',
    team_id: 9
  },
  {
    name: 'Ika',
    team_id: 9
  },
  {
    name: 'Azure',
    role: 'support',
    twitter: 'Vitality_Azure',
    youtube: 'UC2f_wAanlOibzPUT-i5R8xw',
    team_id: 9
  },
  {
    name: 'Moon',
    team_id: 9
  },
  {
    name: 'King',
    twitter: 'KingYeXiu',
    team_id: 9
  },
  {
    name: 'Redemption',
    role: 'jungler',
    twitter: 'REDemption_Kh',
    team_id: 9
  },
  //
  // JT
  //
  // https://tw.esports.yahoo.com/realm-of-valor/teams/still-moving-under-gunfire-1042/matches/still-moving-under-gunfire-vs-j-team-5779/
  {
    name: 'Yuzon',
    team_id: 10,
    role: 'sidelane',
  },
  {
    name: 'Neil',
    team_id: 10,
  },
  {
    name: 'Winds',
    team_id: 10,
  },
  {
    name: 'Star',
    team_id: 10,
  },
  {
    name: 'Benny',
    team_id: 10,
  },
  {
    name: 'Chawan',
    team_id: 10,
  },
  {
    name: 'Tuna',
    team_id: 10,
  },
  //
  // SMG
  // https://tw.esports.yahoo.com/realm-of-valor/videos
  {
    name: 'Liang',
    real_name: 'Liang-Chih Chen',
    team_id: 11,
  },
  {
    name: 'Chichi',
    real_name: 'Chun-Chi li',
    team_id: 11
  },
  {
    name: 'Hanzo',
    real_name: 'Cheng-Tsai Huang',
    team_id: 11,
    facebook: 'SMGHanzo1205',
    garena: 'smghanzo',
    role: 'midlane',
  },
  {
    name: 'Sirenia',
    real_name: 'Wei-Chia Hung'
,    team_id: 11,
  },
  {
    name: 'Genji',
    real_name: 'Chih-Lung Cheng',
    garena: 'smggenji',
    youtube: 'UCIp9jUV47yfBFmrEsS69E-w',
    team_id: 11,
    role: 'jungler',
  },
  {
    name: 'Wayyn',
    real_name: 'Sung-Lin Hsieh',
    team_id: 11,
  },
]

export default PLAYERS
