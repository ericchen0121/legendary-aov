// From CBS.com NFL Draft page
// copied table into TSV -> JSON converter
 //
const STREAMS = [
  {
    "name": 'Tulen',
    "nickname": 'The Pure',
    "classes": ['mage'],
    'lanes': ['mid', 'jungle'],
    'roles': ['finisher', 'harass'],
    'tier': 's',
    "folder": 'tulen'
  },
  {
    "name": 'Airi',
    "nickname": '',
    "classes": ['warrior', 'assassin'],
    'lanes': ['solo', 'roam'],
    'roles': ['mobility'],
    'tier': 'b',
    "folder": 'airi'
  },
  {
    "name": 'Aleister',
    "nickname": '',
    "classes": ['mage'],
    'lanes': [],
    'roles': ['control'],
    'tier': 'c',
    "folder": 'aleister'
  },
  {
    "name": 'Alice',
    "nickname": '',
    "classes": ['support'],
    'lanes': [],
    'roles': ['control', 'buffs'],
    'tier': 'b',
    "folder": 'alice'
  },
  {
    "name": 'Arduin',
    "nickname": '',
    "classes": ['warrior', 'tank'],
    'lanes': [],
    'roles': ['mobility', 'control'],
    'tier': 'c',
    "folder": 'arduin'
  },
  {
    "name": "Azzen'Ka",
    "nickname": '',
    "classes": ['mage'],
    'lanes': [],
    'roles': ['control'],
    'tier': 'c',
    "folder": 'azzenka'
  },
  {
    "name": 'Batman',
    "nickname": '',
    "classes": ['assassin'],
    'lanes': [],
    'roles': ['mobility'],
    'tier': 'c',
    "folder": 'batman',
    "regions": ['eu']
  },
  {
    "name": 'Butterfly',
    "nickname": '',
    "classes": ['assassin', 'warrior'],
    'lanes': [],
    'roles': ['mobility', 'finisher'],
    'tier': 'b',
    "folder": 'butterfly'
  },
  {
    "name": 'Chaugnar',
    "nickname": '',
    "classes": ['support', 'tank'],
    'lanes': [],
    'roles': ['buffs'],
    'tier': 'b',
    "folder": 'chaugnar'
  },
  {
    "name": 'Cresht',
    "nickname": '',
    "classes": ['tank'],
    'lanes': [],
    'roles': ['control'],
    'tier': 'b',
    "folder": 'cresht'
  },
  {
    "name": 'Diao Chan',
    "nickname": '',
    "classes": ['Mage'],
    'lanes': [],
    'roles': ['control'],
    'tier': 'c',
    "folder": 'diaochan'
  },
  {
    "name": 'Fennik',
    "nickname": '',
    "classes": ['marksman'],
    'lanes': [],
    'roles': ['mobility'],
    'tier': 'b',
    "folder": 'fennik'
  },
  {
    "name": 'Gildur',
    "nickname": '',
    "classes": ['tank'],
    'lanes': [],
    'roles': ['mobility'],
    'tier': 'c',
    "folder": 'gildur'
  },
  {
    "name": 'Grakk',
    "nickname": '',
    "classes": ['tank', 'mage'],
    'lanes': [],
    'roles': ['control'],
    'tier': 'c',
    "folder": 'grakk'
  },
  {
    "name": 'Ignis',
    "nickname": '',
    "classes": ['mage'],
    'lanes': [],
    'roles': ['harass'],
    'tier': 'c',
    "folder": 'ignis'
  },
  {
    "name": 'Ilumia',
    "nickname": '',
    "classes": ['mage'],
    'lanes': [],
    'roles': ['control', 'harass'],
    'tier': 'c',
    "folder": 'ilumia'
  },
  {
    "name": 'Jinnar',
    "nickname": '',
    "classes": ['mage'],
    'lanes': [],
    'roles': ['harass'],
    'tier': 'c',
    "folder": 'jinnar'
  },
  {
    "name": 'Kahlii',
    "nickname": '',
    "classes": ['mage'],
    'lanes': [],
    'roles': ['harass'],
    'tier': 'b',
    "folder": 'kahlii'
  },
  {
    "name": "Kil'Groth",
    "nickname": '',
    "classes": ['warrior'],
    'lanes': [],
    'roles': ['mobility'],
    'tier': 'b',
    "folder": 'kilgroth'
  },
  {
    "name": 'Kriknak',
    "nickname": '',
    "classes": ['warrior'],
    'lanes': [],
    'roles': ['mobility'],
    'tier': 'b',
    "folder": 'kriknak'
  },
  {
    "name": 'Krixi',
    "nickname": '',
    "classes": ['mage'],
    'lanes': [],
    'roles': ['mobility', 'harass'],
    'tier': 'c',
    "folder": 'krixi'
  },
  {
    "name": 'Lauriel',
    "nickname": '',
    "classes": ['mage', 'assassin'],
    'lanes': [],
    'roles': ['mobility'],
    'tier': 'a',
    "folder": 'lauriel'
  },
  {
    "name": 'Liliana',
    "nickname": '',
    "classes": ['mage', 'assassin'],
    'lanes': [],
    'roles': ['mobility', 'finisher'],
    'tier': 's',
    "folder": 'liliana'
  },
  {
    "name": 'Lindis',
    "nickname": '',
    "classes": ['marksman'],
    'lanes': [],
    'roles': ['initiator', 'finisher'],
    'tier': 'b',
    "folder": 'lindis'
  },
  {
    "name": 'Lu Bu',
    "nickname": '',
    "classes": ['warrior'],
    'lanes': [],
    'roles': ['life steal'],
    'tier': 'a',
    "folder": 'lubu'
  },
  {
    "name": 'Lumburr',
    "nickname": '',
    "classes": ['support', 'tank'],
    'lanes': [],
    'roles': ['control', 'buffs'],
    'tier': 'b',
    "folder": 'lumburr'
  },
  {
    "name": 'Maloch',
    "nickname": '',
    "classes": ['warrior', 'tank'],
    'lanes': ['solo', 'roam'],
    'roles': ['finisher', 'life steal'],
    'tier': 'a',
    "folder": 'maloch'
  },
  {
    "name": 'Max',
    "nickname": '',
    "classes": ['tank', 'warrior'],
    'lanes': ['solo'],
    'roles': ['mobility', 'initiator', 'finisher'],
    'tier': 'b',
    "folder": 'max'
  },
  {
    "name": 'Mganga',
    "nickname": '',
    "classes": ['mage', 'support'],
    'lanes': [],
    'roles': ['harass', 'healer', 'life steal'],
    'tier': 'c',
    "folder": 'mganga'
  },
  {
    "name": 'Mina',
    "nickname": '',
    "classes": ['tank'],
    'lanes': [],
    'roles': ['control'],
    'tier': 'b',
    "folder": 'mina'
  },
  {
    "name": 'Moren',
    "nickname": '',
    "classes": ['marksman'],
    'lanes': ['solo'],
    'roles': ['mobility', 'jungle'],
    'tier': 'b',
    "folder": 'moren'
  },
  {
    "name": 'Murad',
    "nickname": '',
    "classes": ['assassin'],
    'lanes': ['jungle'],
    'roles': ['mobility'],
    'tier': 'a',
    "folder": 'murad'
  },
  {
    "name": 'Nakroth',
    "nickname": '',
    "classes": ['assassin'],
    'lanes': [],
    'roles': ['mobility'],
    'tier': 'b',
    "folder": 'nakroth'
  },
  {
    "name": 'Natalya',
    "nickname": '',
    "classes": ['mage'],
    'lanes': ['mid'],
    'roles': ['harass'],
    'tier': 'c',
    "folder": 'natalya'
  },
  {
    "name": 'Omega',
    "nickname": '',
    "classes": ['tank'],
    'lanes': [],
    'roles': ['control'],
    'tier': 'c',
    "folder": 'omega'
  },
  {
    "name": 'Omen',
    "nickname": '',
    "classes": ['warrior'],
    'lanes': [],
    'roles': ['mobility'],
    'tier': 'b',
    "folder": 'omen'
  },
  {
    "name": 'Ormarr',
    "nickname": '',
    "classes": ['tank', 'warrior'],
    'lanes': ['roam'],
    'roles': ['control', 'mobility'],
    'tier': 'b',
    "folder": 'ormarr'
  },
  {
    "name": 'Peura',
    "nickname": '',
    "classes": ['support'],
    'lanes': [],
    'roles': ['buffs'],
    'tier': 'c',
    "folder": 'peura'
  },
  {
    "name": 'Preyta',
    "nickname": '',
    "classes": ['mage'],
    'lanes': ['mid'],
    'roles': ['harass'],
    'tier': 'b',
    "folder": 'preyta'
  },
  {
    "name": 'Raz',
    "nickname": '',
    "classes": ['mage', 'assassin'],
    'lanes': ['mid', 'solo'],
    'roles': ['harass'],
    'tier': 'b',
    "folder": 'raz'
  },
  {
    "name": 'Ryoma',
    "nickname": '',
    "classes": ['warrior'],
    'lanes': ['solo'],
    'roles': ['harass', 'finisher'],
    'tier': 's',
    "folder": 'ryoma'
  },
  {
    "name": 'Skud',
    "nickname": '',
    "classes": ['warrior', 'tank'],
    'lanes': [],
    'roles': ['mobility', 'control'],
    'tier': 'c',
    "folder": 'skud'
  },
  {
    "name": 'Slimz',
    "nickname": '',
    "classes": ['marksman'],
    'lanes': ['solo'],
    'roles': ['mobility', 'initiator'],
    'tier': 'b',
    "folder": 'slimz'
  },
  {
    "name": 'Superman',
    "nickname": '',
    "classes": ['warrior', 'tank'],
    'lanes': ['roam', 'solo'],
    'roles': ['mobility', 'initiator'],
    'tier': 's',
    "folder": 'superman'
  },
  {
    "name": 'Taara',
    "nickname": '',
    "classes": ['tank', 'warrior'],
    'lanes': [],
    'roles': ['mobility', 'healer', 'life steal'],
    'tier': 'c',
    "folder": 'taara'
  },
  {
    "name": 'TeeMee',
    "nickname": '',
    "classes": ['support', 'tank'],
    'lanes': [],
    'roles': ['initiator', 'mobility'],
    'tier': 'b',
    "folder": 'teemee'
  },
  {
    "name": "Tel'Annas",
    "nickname": '',
    "classes": ['marksman'],
    'lanes': [],
    'roles': ['finisher'],
    'tier': 'c',
    "folder": 'telannas'
  },
  {
    "name": 'Thane',
    "nickname": '',
    "classes": ['tank', 'warrior'],
    'lanes': [],
    'roles': ['control', 'initiator'],
    'tier': 'b',
    "folder": 'thane'
  },
  {
    "name": 'Flash',
    "nickname": '',
    "classes": ['mage', 'assassin'],
    'lanes': ['roam', 'mid', 'solo'],
    'roles': ['mobility', 'initiator'],
    'tier': 'a',
    "folder": 'flash'
  },
  {
    "name": 'Joker',
    "nickname": '',
    "classes": ['marksman'],
    'lanes': [],
    'roles': ['harass'],
    'tier': 'b',
    "folder": 'joker'
  },
  {
    "name": 'Toro',
    "nickname": '',
    "classes": ['tank'],
    'lanes': [],
    'roles': ['control', 'initiator'],
    'tier': 'd',
    "folder": 'toro'
  },
  {
    "name": 'Valhein',
    "nickname": '',
    "classes": ['marksman'],
    'lanes': [],
    'roles': ['harass'],
    'tier': 'c',
    "folder": 'valhein'
  },
  {
    "name": 'Veera',
    "nickname": '',
    "classes": ['mage'],
    'lanes': [],
    'roles': ['initiator'],
    'tier': 'c',
    "folder": 'veera'
  },
  {
    "name": 'Violet',
    "nickname": '',
    "classes": ['marksman'],
    'lanes': [],
    'roles': ['mobility', 'finisher'],
    'tier': 's',
    "folder": 'violet'
  },
  {
    "name": 'Wisp',
    "nickname": '',
    "classes": ['marksman'],
    'lanes': [],
    'roles': [],
    'tier': 'b',
    "folder": 'wisp'
  },
  {
    "name": 'Wonder Woman',
    "nickname": '',
    "classes": ['warrior'],
    'lanes': ['solo'],
    'roles': ['control'],
    'tier': 'a',
    "folder": 'wonderwoman'
  },
  {
    "name": 'Wukong',
    "nickname": '',
    "classes": ['assassin', 'warrior'],
    'lanes': [],
    'roles': ['mobility'],
    'tier': 'b',
    "folder": 'wukong'
  },
  {
    "name": 'Xeniel',
    "nickname": '',
    "classes": ['tank', 'support'],
    'lanes': [],
    'roles': ['control', 'healer'],
    'tier': 'a',
    "folder": 'xeniel'
  },
  {
    "name": 'Yorn',
    "nickname": '',
    "classes": ['marskman'],
    'lanes': [],
    'roles': ['harass'],
    'tier': 'c',
    "folder": 'yorn'
  },
  {
    "name": 'Zanis',
    "nickname": '',
    "classes": ['warrior'],
    'lanes': [],
    'roles': ['finisher'],
    'tier': 'c',
    "folder": 'zanis'
  },
  {
    "name": 'Zephys',
    "nickname": '',
    "classes": ['warrior', 'assassin'],
    'lanes': [],
    'roles': ['mobility'],
    'tier': 'a',
    "folder": 'zephys'
  },
  {
    "name": 'Zill',
    "nickname": '',
    "classes": ['mage', 'assassin'],
    'lanes': [],
    'roles': ['mobility'],
    'tier': 'a',
    "folder": 'zill'
  },
  {
    "name": 'Zuka',
    "nickname": '',
    "classes": ['warrior', 'assassin'],
    'lanes': [],
    'roles': ['mobility'],
    'tier': 'c',
    "folder": 'zuka'
  }
]

export default STREAMS
