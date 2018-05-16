// From CBS.com NFL Draft page
// copied table into TSV -> JSON converter
 //
const HEROES = [
  {
    "name": 'Tulen',
    "nickname": 'Pure',
    "classes": ['mage'],
    'lanes': ['mid', 'jungle', 'roam'],
    'roles': ['finisher', 'harass'],
    'tier': 's',
    "folder": 'tulen'
  },
  {
    "name": 'Airi',
    "nickname": 'Kunoichi',
    "classes": ['warrior', 'assassin'],
    'lanes': ['solo', 'ds', 'jungle'],
    'roles': ['mobility'],
    'tier': 'a',
    "folder": 'airi'
  },
  {
    "name": 'Aleister',
    "nickname": 'Lord of Mischief',
    "classes": ['mage'],
    'lanes': ['support', 'roam'],
    'roles': ['control'],
    'tier': 'c',
    "folder": 'aleister'
  },
  {
    "name": 'Alice',
    "nickname": 'Adorable Mystic',
    "classes": ['support'],
    'lanes': ['support', 'roam'],
    'roles': ['control', 'buffs'],
    'tier': 'b',
    "folder": 'alice'
  },
  {
    "name": 'Arduin',
    "nickname": 'Spirit',
    "classes": ['warrior', 'tank'],
    'lanes': ['ds', 'solo', 'roam'],
    'roles': ['mobility', 'control'],
    'tier': 'c',
    "folder": 'arduin'
  },
  {
    "name": 'Arthur',
    "nickname": 'Chosen',
    "classes": ['warrior', 'tank'],
    'lanes': ['ds', 'solo', 'roam'],
    'roles': ['initiator', 'mobility'],
    'tier': 'a',
    "folder": 'arthur'
  },
  {
    "name": 'Astrid',
    "nickname": 'Indomitable',
    "classes": ['warrior', 'tank'],
    'lanes': ['ds', 'solo', 'roam'],
    'roles': ['initiator'],
    'tier': 'a',
    "folder": 'astrid'
  },
  {
    "name": "Azzen'Ka",
    "nickname": 'Forgotten',
    "classes": ['mage'],
    'lanes': ['damage', 'roam'],
    'roles': ['control'],
    'tier': 'c',
    "folder": 'azzenka'
  },
  {
    "name": 'Batman',
    "nickname": 'Dark Knight',
    "classes": ['assassin'],
    'lanes': ['jungle', 'roam'],
    'roles': ['mobility'],
    'tier': 'a',
    "folder": 'batman',
    "regions": ['eu']
  },
  {
    "name": 'Butterfly',
    "nickname": "Death's Whisper",
    "classes": ['assassin', 'warrior'],
    'lanes': ['jungle'],
    'roles': ['mobility', 'finisher'],
    'tier': 'b',
    "folder": 'butterfly'
  },
  {
    "name": 'Chaugnar',
    "nickname": 'Herald of the Void',
    "classes": ['support', 'tank'],
    'lanes': ['support', 'roam'],
    'roles': ['buffs'],
    'tier': 's',
    "folder": 'chaugnar'
  },
  {
    "name": 'Cresht',
    "nickname": 'Mermidon',
    "classes": ['tank', 'support'],
    'lanes': ['ds', 'solo', 'support'],
    'roles': ['control'],
    'tier': 'a',
    "folder": 'cresht'
  },
  {
    "name": 'Diaochan',
    "nickname": 'Crystal Lotus',
    "classes": ['Mage'],
    'lanes': ['damage', 'roam', 'support'],
    'roles': ['control'],
    'tier': 'c',
    "folder": 'diaochan'
  },
  {
    "name": 'Fennik',
    "nickname": 'Vulpis Ignis',
    "classes": ['marksman'],
    'lanes': ['damage', 'jungle'],
    'roles': ['mobility'],
    'tier': 'b',
    "folder": 'fennik'
  },
  {
    "name": 'Gildur',
    "nickname": 'Gilded',
    "classes": ['tank'],
    'lanes': ['damage', 'roam'],
    'roles': ['mobility'],
    'tier': 'c',
    "folder": 'gildur'
  },
  {
    "name": 'Grakk',
    "nickname": 'Glutton',
    "classes": ['tank', 'mage'],
    'lanes': ['support', 'roam'],
    'roles': ['control'],
    'tier': 'c',
    "folder": 'grakk'
  },
  {
    "name": 'Ignis',
    "nickname": 'Anointed One',
    "classes": ['mage'],
    'lanes': ['roam', 'mid'],
    'roles': ['harass'],
    'tier': 'c',
    "folder": 'ignis'
  },
  {
    "name": 'Ilumia',
    "nickname": 'Seer',
    "classes": ['mage'],
    'lanes': ['damage', 'roam'],
    'roles': ['control', 'harass'],
    'tier': 'c',
    "folder": 'ilumia'
  },
  {
    "name": 'Jinnar',
    "nickname": 'Incorruptible',
    "classes": ['mage'],
    'lanes': ['roam', 'mid'],
    'roles': ['harass'],
    'tier': 'a',
    "folder": 'jinnar'
  },
  {
    "name": 'Kahlii',
    "nickname": 'Ghost Guardian',
    "classes": ['mage'],
    'lanes': ['mid', 'roam'],
    'roles': ['harass'],
    'tier': 'b',
    "folder": 'kahlii'
  },
  {
    "name": "Kil'Groth",
    "nickname": 'Terror',
    "classes": ['warrior'],
    'lanes': ['ds', 'jungle'],
    'roles': ['mobility'],
    'tier': 'a',
    "folder": 'kilgroth'
  },
  {
    "name": 'Kriknak',
    "nickname": 'Scarabin',
    "classes": ['warrior'],
    'lanes': ['jungle', 'roam'],
    'roles': ['mobility'],
    'tier': 'b',
    "folder": 'kriknak'
  },
  {
    "name": 'Krixi',
    "nickname": 'Pixie',
    "classes": ['mage'],
    'lanes': ['damage', 'roam'],
    'roles': ['mobility', 'harass'],
    'tier': 'c',
    "folder": 'krixi'
  },
  {
    "name": 'Lauriel',
    "nickname": 'Archangel',
    "classes": ['mage', 'assassin'],
    'lanes': ['mid', 'roam'],
    'roles': ['mobility'],
    'tier': 's',
    "folder": 'lauriel'
  },
  {
    "name": 'Liliana',
    "nickname": 'Elegant',
    "classes": ['mage', 'assassin'],
    'lanes': ['mid', 'roam'],
    'roles': ['mobility', 'finisher'],
    'tier': 's',
    "folder": 'liliana'
  },
  {
    "name": 'Lindis',
    "nickname": 'Sentinel',
    "classes": ['marksman'],
    'lanes': ['damage', 'jungle'],
    'roles': ['initiator', 'finisher'],
    'tier': 'b',
    "folder": 'lindis'
  },
  {
    "name": 'Lu Bu',
    "nickname": 'Great Warlord',
    "classes": ['warrior'],
    'lanes': ['ds', 'solo', 'jungle'],
    'roles': ['life steal'],
    'tier': 'a',
    "folder": 'lubu'
  },
  {
    "name": 'Lumburr',
    "nickname": 'Elemental',
    "classes": ['support', 'tank'],
    'lanes': ['support', 'roam'],
    'roles': ['control', 'buffs'],
    'tier': 'b',
    "folder": 'lumburr'
  },
  {
    "name": 'Maloch',
    "nickname": 'Merciless',
    "classes": ['warrior', 'tank'],
    'lanes': ['solo', 'roam', 'ds'],
    'roles': ['finisher', 'life steal'],
    'tier': 's',
    "folder": 'maloch'
  },
  {
    "name": 'Max',
    "nickname": 'Wunderkind',
    "classes": ['tank', 'warrior'],
    'lanes': ['solo', 'ds', 'roam'],
    'roles': ['mobility', 'initiator', 'finisher'],
    'tier': 'b',
    "folder": 'max'
  },
  {
    "name": 'Mganga',
    "nickname": 'Unspeakable',
    "classes": ['mage', 'support'],
    'lanes': ['mid', 'roam'],
    'roles': ['harass', 'healer', 'life steal'],
    'tier': 'c',
    "folder": 'mganga'
  },
  {
    "name": 'Mina',
    "nickname": 'Reaper Queen',
    "classes": ['tank'],
    'lanes': ['support', 'roam'],
    'roles': ['control'],
    'tier': 'b',
    "folder": 'mina'
  },
  {
    "name": 'Moren',
    "nickname": 'Technowiz',
    "classes": ['marksman'],
    'lanes': ['damage', 'jungle'],
    'roles': ['mobility', 'jungle'],
    'tier': 'b',
    "folder": 'moren'
  },
  {
    "name": 'Murad',
    "nickname": 'Wanderer',
    "classes": ['assassin'],
    'lanes': ['jungle'],
    'roles': ['mobility'],
    'tier': 'ss',
    "folder": 'murad'
  },
  {
    "name": 'Nakroth',
    "nickname": "Executioner's Blade",
    "classes": ['assassin'],
    'lanes': ['jungle'],
    'roles': ['mobility'],
    'tier': 'b',
    "folder": 'nakroth'
  },
  {
    "name": 'Natalya',
    "nickname": 'Nether Queen',
    "classes": ['mage'],
    'lanes': ['mid', 'damage', 'roam'],
    'roles': ['harass'],
    'tier': 'b',
    "folder": 'natalya'
  },
  {
    "name": 'Omega',
    "nickname": 'Awoken Mech',
    "classes": ['tank'],
    'lanes': ['ds', 'solo', 'roam'],
    'roles': ['control'],
    'tier': 'd',
    "folder": 'omega'
  },
  {
    "name": 'Omen',
    "nickname": 'Insatiable',
    "classes": ['warrior'],
    'lanes': ['ds', 'solo', 'jungle'],
    'roles': ['mobility'],
    'tier': 'a',
    "folder": 'omen'
  },
  {
    "name": 'Ormarr',
    "nickname": 'Frenzy',
    "classes": ['tank', 'warrior'],
    'lanes': ['roam', 'support'],
    'roles': ['control', 'mobility'],
    'tier': 'a',
    "folder": 'ormarr'
  },
  {
    "name": 'Peura',
    "nickname": 'Guardian of the Glade',
    "classes": ['support'],
    'lanes': ['support', 'roam'],
    'roles': ['buffs'],
    'tier': 'b',
    "folder": 'peura'
  },
  {
    "name": 'Preyta',
    "nickname": 'Illest',
    "classes": ['mage'],
    'lanes': ['mid', 'roam'],
    'roles': ['harass'],
    'tier': 'a',
    "folder": 'preyta'
  },
  {
    "name": 'Raz',
    "nickname": 'Fist',
    "classes": ['mage', 'assassin'],
    'lanes': ['mid', 'solo', 'roam'],
    'roles': ['harass'],
    'tier': 's',
    "folder": 'raz'
  },
  {
    "name": 'Ryoma',
    "nickname": 'Ronin',
    "classes": ['warrior'],
    'lanes': ['ds', 'jungle'],
    'roles': ['harass', 'finisher'],
    'tier': 'ss',
    "folder": 'ryoma'
  },
  {
    "name": 'Skud',
    "nickname": 'Smasher',
    "classes": ['warrior', 'tank'],
    'lanes': ['support', 'ds', 'solo'],
    'roles': ['mobility', 'control'],
    'tier': 'b',
    "folder": 'skud'
  },
  {
    "name": 'Slimz',
    "nickname": 'Trustworthy',
    "classes": ['marksman'],
    'lanes': ['solo', 'jungle', 'damage'],
    'roles': ['mobility', 'initiator'],
    'tier': 'b',
    "folder": 'slimz'
  },
  {
    "name": 'Superman',
    "nickname": 'Man of Steel',
    "classes": ['warrior', 'tank'],
    'lanes': ['roam', 'ds'],
    'roles': ['mobility', 'initiator'],
    'tier': 'ss',
    "folder": 'superman'
  },
  {
    "name": 'Taara',
    "nickname": 'War Hammer',
    "classes": ['tank', 'warrior'],
    'lanes': [],
    'roles': ['mobility', 'healer', 'life steal'],
    'tier': 'c',
    "folder": 'taara'
  },
  {
    "name": 'TeeMee',
    "nickname": 'Stalwart Twins',
    "classes": ['support', 'tank'],
    'lanes': ['support', 'roam'],
    'roles': ['initiator', 'mobility'],
    'tier': 's',
    "folder": 'teemee'
  },
  {
    "name": "Tel'Annas",
    "nickname": 'Ageless',
    "classes": ['marksman'],
    'lanes': ['roam', 'damage'],
    'roles': ['finisher'],
    'tier': 'a',
    "folder": 'telannas'
  },
  {
    "name": 'Thane',
    "nickname": 'Protector',
    "classes": ['tank', 'warrior'],
    'lanes': ['support', 'roam'],
    'roles': ['control', 'initiator'],
    'tier': 'a',
    "folder": 'thane'
  },
  {
    "name": 'Flash',
    "nickname": 'Fastest Man Alive',
    "classes": ['mage', 'assassin'],
    'lanes': ['roam', 'mid', 'solo'],
    'roles': ['mobility', 'initiator'],
    'tier': 'a',
    "folder": 'flash'
  },
  {
    "name": 'Joker',
    "nickname": 'Clown Prince of Crime',
    "classes": ['marksman'],
    'lanes': ['mid', 'jungle'],
    'roles': ['harass'],
    'tier': 'a',
    "folder": 'joker'
  },
  {
    "name": 'Toro',
    "nickname": '',
    "classes": ['tank'],
    'lanes': ['ds', 'solo'],
    'roles': ['control', 'initiator'],
    'tier': 'd',
    "folder": 'toro'
  },
  {
    "name": 'Valhein',
    "nickname": 'Demon Hunter',
    "classes": ['marksman'],
    'lanes': ['damage'],
    'roles': ['harass'],
    'tier': 'd',
    "folder": 'valhein'
  },
  {
    "name": 'Veera',
    "nickname": 'Soul Harvester',
    "classes": ['mage'],
    'lanes': ['damage', 'roam'],
    'roles': ['initiator'],
    'tier': 'd',
    "folder": 'veera'
  },
  {
    "name": 'Violet',
    "nickname": 'Pistol Assassin',
    "classes": ['marksman'],
    'lanes': ['solo', 'jungle'],
    'roles': ['mobility', 'finisher'],
    'tier': 'ss',
    "folder": 'violet'
  },
  {
    "name": 'Wisp',
    "nickname": 'Mischievous',
    "classes": ['marksman'],
    'lanes': ['damage', 'jungle'],
    'roles': [],
    'tier': 'b',
    "folder": 'wisp'
  },
  {
    "name": 'Wonder Woman',
    "nickname": 'Amazon of Themyscira',
    "classes": ['warrior'],
    'lanes': ['solo', 'ds', 'roam'],
    'roles': ['control'],
    'tier': 'a',
    "folder": 'wonderwoman'
  },
  {
    "name": 'Wukong',
    "nickname": 'Monkey King',
    "classes": ['assassin', 'warrior'],
    'lanes': ['jungle'],
    'roles': ['mobility'],
    'tier': 'a',
    "folder": 'wukong'
  },
  {
    "name": 'Xeniel',
    "nickname": 'Immaculate',
    "classes": ['tank', 'support'],
    'lanes': ['ds', 'solo'],
    'roles': ['control', 'healer'],
    'tier': 'a',
    "folder": 'xeniel'
  },
  {
    "name": 'Yorn',
    "nickname": 'Hotshot',
    "classes": ['marskman'],
    'lanes': ['damage', 'mid'],
    'roles': ['harass'],
    'tier': 'b',
    "folder": 'yorn'
  },
  {
    "name": 'Zanis',
    "nickname": 'Dragoon',
    "classes": ['warrior'],
    'lanes': ['jungle', 'roam'],
    'roles': ['finisher'],
    'tier': 'c',
    "folder": 'zanis'
  },
  {
    "name": 'Zephys',
    "nickname": 'Doomspear',
    "classes": ['warrior', 'assassin'],
    'lanes': ['jungle', 'roam'],
    'roles': ['mobility'],
    'tier': 's',
    "folder": 'zephys'
  },
  {
    "name": 'Zill',
    "nickname": 'Tempest',
    "classes": ['mage', 'assassin'],
    'lanes': [],
    'roles': ['mobility'],
    'tier': 'a',
    "folder": 'zill'
  },
  {
    "name": 'Zuka',
    "nickname": 'Pandharma Master',
    "classes": ['warrior', 'assassin'],
    'lanes': ['jungle', 'solo', 'ds'],
    'roles': ['mobility'],
    'tier': 'a',
    "folder": 'zuka'
  }
]

export default HEROES
