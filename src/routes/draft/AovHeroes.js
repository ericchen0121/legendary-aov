const HEROES = [
  {
    "id": 1,
    "name": 'Tulen',
    'alt_names': ['Tulen'],
    "nickname": 'Pure',
    "classes": ['mage'],
    'lanes': ['mid', 'jungle', 'roam'],
    'roles': ['finisher', 'harass'],
    'tier': 's',
    'tier_index': 2,
    "folder": 'tulen',
    "version_number": 13
  },
  {
    "id": 2,
    "name": 'Airi',
    'alt_names': ['Airi'],
    "nickname": 'Kunoichi',
    "classes": ['warrior', 'assassin'],
    'lanes': ['solo', 'ds', 'jungle'],
    'roles': ['mobility'],
    'tier': 'a',
    'tier_index': 3,
    "folder": 'airi',
    "version_number": 13
  },
  {
    "id": 3,
    "name": 'Aleister',
    'alt_names': ['Aleister'],
    "nickname": 'Lord of Mischief',
    "classes": ['mage'],
    'lanes': ['support', 'roam'],
    'roles': ['control'],
    'tier': 'c',
    'tier_index': 5,
    "folder": 'aleister',
    "version_number": 13
  },
  {
    "id": 4,
    "name": 'Alice',
    'alt_names': ['Alice'],
    "nickname": 'Adorable Mystic',
    "classes": ['support'],
    'lanes': ['support', 'roam'],
    'roles': ['control', 'buffs'],
    'tier': 'b',
    'tier_index': 4,
    "folder": 'alice',
    "version_number": 13
  },
  {
    "id": 5,
    "name": 'Arduin',
    'alt_names': ['Arduin'],
    "nickname": 'Spirit',
    "classes": ['warrior', 'tank'],
    'lanes': ['ds', 'solo', 'roam'],
    'roles': ['mobility', 'control'],
    'tier': 'c',
    'tier_index': 5,
    "folder": 'arduin',
    "version_number": 13
  },
  {
    "id": 6,
    "name": 'Arthur',
    'alt_names': ['Arthur'],
    "nickname": 'Chosen',
    "classes": ['warrior', 'tank'],
    'lanes': ['ds', 'solo', 'roam'],
    'roles': ['initiator', 'mobility'],
    'tier': 'a',
    'tier_index': 3,
    "folder": 'arthur',
    "version_number": 13
  },
  {
    "id": 7,
    "name": 'Astrid',
    'alt_names': ['Astrid'],
    "nickname": 'Indomitable',
    "classes": ['warrior', 'tank'],
    'lanes': ['ds', 'solo', 'roam'],
    'roles': ['initiator'],
    'tier': 'a',
    'tier_index': 3,
    "folder": 'astrid',
    "version_number": 13
  },
  {
    "id": 8,
    "name": "Azzen'Ka",
    'alt_names': ["Azzen'Ka", 'azzenka', 'azzen'],
    "nickname": 'Forgotten',
    "classes": ['mage'],
    'lanes': ['damage', 'roam'],
    'roles': ['control'],
    'tier': 'c',
    'tier_index': 5,
    "folder": 'azzenka',
    "version_number": 13
  },
  {
    "id": 9,
    "name": 'Batman',
    'alt_names': ['Batman'],
    "nickname": 'Dark Knight',
    "classes": ['assassin'],
    'lanes': ['jungle', 'roam'],
    'roles': ['mobility'],
    'tier': 'a',
    'tier_index': 3,
    "folder": 'batman',
    "version_number": 13
  },
  {
    "id": 10,
    "name": 'Butterfly',
    'alt_names': ['Butterfly', 'bf', 'butter'],
    "nickname": "Death's Whisper",
    "classes": ['assassin', 'warrior'],
    'lanes': ['jungle'],
    'roles': ['mobility', 'finisher'],
    'tier': 'b',
    'tier_index': 4,
    "folder": 'butterfly',
    "version_number": 13
  },
  {
    "id": 11,
    "name": 'Chaugnar',
    'alt_names': ['Chaugnar', 'chaug'],
    "nickname": 'Herald of the Void',
    "classes": ['support', 'tank'],
    'lanes': ['support', 'roam'],
    'roles': ['buffs'],
    'tier': 's',
    'tier_index': 2,
    "folder": 'chaugnar',
    "version_number": 13
  },
  {
    "id": 12,
    "name": 'Cresht',
    'alt_names': ['Cresht'],
    "nickname": 'Mermidon',
    "classes": ['tank', 'support'],
    'lanes': ['ds', 'solo', 'support'],
    'roles': ['control'],
    'tier': 'a',
    'tier_index': 3,
    "folder": 'cresht',
    "version_number": 13
  },
  {
    "id": 13,
    "name": 'Diaochan',
    'alt_names': ['Diaochan', 'diao'],
    "nickname": 'Crystal Lotus',
    "classes": ['Mage'],
    'lanes': ['damage', 'roam', 'support'],
    'roles': ['control'],
    'tier': 'c',
    'tier_index': 5,
    "folder": 'diaochan',
    "version_number": 13
  },
  {
    "id": 14,
    "name": 'Fennik',
    'alt_names': ['Fennik'],
    "nickname": 'Vulpis Ignis',
    "classes": ['marksman'],
    'lanes': ['damage', 'jungle'],
    'roles': ['mobility'],
    'tier': 'b',
    'tier_index': 4,
    "folder": 'fennik',
    "version_number": 13
  },
  {
    "id": 15,
    "name": 'Gildur',
    'alt_names': ['Gildur'],
    "nickname": 'Gilded',
    "classes": ['tank'],
    'lanes': ['damage', 'roam'],
    'roles': ['mobility'],
    'tier': 'c',
    'tier_index': 5,
    "folder": 'gildur',
    "version_number": 13
  },
  {
    "id": 16,
    "name": 'Grakk',
    'alt_names': ['Grakk', 'grak'],
    "nickname": 'Glutton',
    "classes": ['tank', 'mage'],
    'lanes': ['support', 'roam'],
    'roles': ['control'],
    'tier': 'c',
    'tier_index': 5,
    "folder": 'grakk',
    "version_number": 13
  },
  {
    "id": 17,
    "name": 'Ignis',
    'alt_names': ['Ignis'],
    "nickname": 'Anointed One',
    "classes": ['mage'],
    'lanes': ['roam', 'mid'],
    'roles': ['harass'],
    'tier': 'c',
    'tier_index': 5,
    "folder": 'ignis',
    "version_number": 13
  },
  {
    "id": 18,
    "name": 'Ilumia',
    'alt_names': ['Ilumia', 'illumia'],
    "nickname": 'Seer',
    "classes": ['mage'],
    'lanes': ['damage', 'roam'],
    'roles': ['control', 'harass'],
    'tier': 'c',
    'tier_index': 5,
    "folder": 'ilumia',
    "version_number": 13
  },
  {
    "id": 19,
    "name": 'Jinnar',
    'alt_names': ['Jinnar'],
    "nickname": 'Incorruptible',
    "classes": ['mage'],
    'lanes': ['roam', 'mid'],
    'roles': ['harass'],
    'tier': 'a',
    'tier_index': 3,
    "folder": 'jinnar',
    "version_number": 13
  },
  {
    "id": 20,
    "name": 'Kahlii',
    'alt_names': ['Kahlii'],
    "nickname": 'Ghost Guardian',
    "classes": ['mage'],
    'lanes': ['mid', 'roam'],
    'roles': ['harass'],
    'tier': 'b',
    'tier_index': 4,
    "folder": 'kahlii',
    "version_number": 13
  },
  {
    "id": 21,
    "name": "Kil'Groth",
    'alt_names': ["Kil'Groth", 'kill', 'kilgroth', 'kil'],
    "nickname": 'Terror',
    "classes": ['warrior'],
    'lanes': ['ds', 'jungle'],
    'roles': ['mobility'],
    'tier': 'a',
    'tier_index': 3,
    "folder": 'kilgroth',
    "version_number": 13
  },
  {
    "id": 22,
    "name": 'Kriknak',
    'alt_names': ['Kriknak', 'krik'],
    "nickname": 'Scarabin',
    "classes": ['warrior'],
    'lanes': ['jungle', 'roam'],
    'roles': ['mobility'],
    'tier': 'b',
    'tier_index': 4,
    "folder": 'kriknak',
    "version_number": 13
  },
  {
    "id": 23,
    "name": 'Krixi',
    'alt_names': ['Krixi'],
    "nickname": 'Pixie',
    "classes": ['mage'],
    'lanes': ['damage', 'roam'],
    'roles': ['mobility', 'harass'],
    'tier': 'c',
    'tier_index': 5,
    "folder": 'krixi',
    "version_number": 13
  },
  {
    "id": 24,
    "name": 'Lauriel',
    'alt_names': ['Lauriel', 'laurel'],
    "nickname": 'Archangel',
    "classes": ['mage', 'assassin'],
    'lanes': ['mid', 'roam'],
    'roles': ['mobility'],
    'tier': 's',
    'tier_index': 2,
    "folder": 'lauriel',
    "version_number": 13
  },
  {
    "id": 25,
    "name": 'Liliana',
    'alt_names': ['Liliana', 'lil', 'lilliana'],
    "nickname": 'Elegant',
    "classes": ['mage', 'assassin'],
    'lanes': ['mid', 'roam'],
    'roles': ['mobility', 'finisher'],
    'tier': 's',
    'tier_index': 2,
    "folder": 'liliana',
    "version_number": 13
  },
  {
    "id": 26,
    "name": 'Lindis',
    'alt_names': ['Lindis'],
    "nickname": 'Sentinel',
    "classes": ['marksman'],
    'lanes': ['damage', 'jungle'],
    'roles': ['initiator', 'finisher'],
    'tier': 'b',
    'tier_index': 4,
    "folder": 'lindis',
    "version_number": 13
  },
  {
    "id": 27,
    "name": 'Lu Bu',
    'alt_names': ['Lu Bu', 'lubu'],
    "nickname": 'Great Warlord',
    "classes": ['warrior'],
    'lanes': ['ds', 'solo', 'jungle'],
    'roles': ['life steal'],
    'tier': 'a',
    'tier_index': 3,
    "folder": 'lubu',
    "version_number": 13
  },
  {
    "id": 28,
    "name": 'Lumburr',
    'alt_names': ['Lumburr', 'lumbur'],
    "nickname": 'Elemental',
    "classes": ['support', 'tank'],
    'lanes': ['support', 'roam'],
    'roles': ['control', 'buffs'],
    'tier': 'b',
    'tier_index': 4,
    "folder": 'lumburr',
    "version_number": 13
  },
  {
    "id": 29,
    "name": 'Maloch',
    'alt_names': ['Maloch', 'maloc', 'malock'],
    "nickname": 'Merciless',
    "classes": ['warrior', 'tank'],
    'lanes': ['solo', 'roam', 'ds'],
    'roles': ['finisher', 'life steal'],
    'tier': 's',
    'tier_index': 2,
    "folder": 'maloch',
    "version_number": 13
  },
  {
    "id": 30,
    "name": 'Max',
    'alt_names': ['Max'],
    "nickname": 'Wunderkind',
    "classes": ['tank', 'warrior'],
    'lanes': ['solo', 'ds', 'roam'],
    'roles': ['mobility', 'initiator', 'finisher'],
    'tier': 'b',
    'tier_index': 4,
    "folder": 'max',
    "version_number": 13
  },
  {
    "id": 31,
    "name": 'Mganga',
    'alt_names': ['Mganga', 'mgangster', 'ganga'],
    "nickname": 'Unspeakable',
    "classes": ['mage', 'support'],
    'lanes': ['mid', 'roam'],
    'roles': ['harass', 'healer', 'life steal'],
    'tier': 'c',
    'tier_index': 5,
    "folder": 'mganga',
    "version_number": 13
  },
  {
    "id": 32,
    "name": 'Mina',
    'alt_names': ['Mina'],
    "nickname": 'Reaper Queen',
    "classes": ['tank'],
    'lanes': ['support', 'roam'],
    'roles': ['control'],
    'tier': 'b',
    'tier_index': 4,
    "folder": 'mina',
    "version_number": 13
  },
  {
    "id": 33,
    "name": 'Moren',
    'alt_names': ['Moren'],
    "nickname": 'Technowiz',
    "classes": ['marksman'],
    'lanes': ['damage', 'jungle'],
    'roles': ['mobility', 'jungle'],
    'tier': 'b',
    'tier_index': 4,
    "folder": 'moren',
    "version_number": 13
  },
  {
    "id": 34,
    "name": 'Murad',
    'alt_names': ['Murad'],
    "nickname": 'Wanderer',
    "classes": ['assassin'],
    'lanes': ['jungle'],
    'roles': ['mobility'],
    'tier': 'ss',
    'tier_index': 1,
    "folder": 'murad',
    "version_number": 13
  },
  {
    "id": 35,
    "name": 'Nakroth',
    'alt_names': ['Nakroth', 'nak'],
    "nickname": "Executioner's Blade",
    "classes": ['assassin'],
    'lanes': ['jungle'],
    'roles': ['mobility'],
    'tier': 'b',
    'tier_index': 4,
    "folder": 'nakroth',
    "version_number": 13
  },
  {
    "id": 36,
    "name": 'Natalya',
    'alt_names': ['Natalya', 'nat'],
    "nickname": 'Nether Queen',
    "classes": ['mage'],
    'lanes': ['mid', 'damage', 'roam'],
    'roles': ['harass'],
    'tier': 'b',
    'tier_index': 4,
    "folder": 'natalya',
    "version_number": 13
  },
  {
    "id": 37,
    "name": 'Omega',
    'alt_names': ['Omega'],
    "nickname": 'Awoken Mech',
    "classes": ['tank'],
    'lanes': ['ds', 'solo', 'roam'],
    'roles': ['control'],
    'tier': 'd',
    'tier_index': 6,
    "folder": 'omega',
    "version_number": 13
  },
  {
    "id": 38,
    "name": 'Omen',
    'alt_names': ['Omen'],
    "nickname": 'Insatiable',
    "classes": ['warrior'],
    'lanes': ['ds', 'solo', 'jungle'],
    'roles': ['mobility'],
    'tier': 'a',
    'tier_index': 3,
    "folder": 'omen',
    "version_number": 13
  },
  {
    "id": 39,
    "name": 'Ormarr',
    'alt_names': ['Ormarr', 'ormar', 'omar'],
    "nickname": 'Frenzy',
    "classes": ['tank', 'warrior'],
    'lanes': ['roam', 'support'],
    'roles': ['control', 'mobility'],
    'tier': 'a',
    'tier_index': 3,
    "folder": 'ormarr',
    "version_number": 13
  },
  {
    "id": 40,
    "name": 'Peura',
    'alt_names': ['Peura', 'pura'],
    "nickname": 'Guardian of the Glade',
    "classes": ['support'],
    'lanes': ['support', 'roam'],
    'roles': ['buffs'],
    'tier': 'b',
    'tier_index': 4,
    "folder": 'peura',
    "version_number": 13
  },
  {
    "id": 41,
    "name": 'Preyta',
    'alt_names': ['Preyta'],
    "nickname": 'Illest',
    "classes": ['mage'],
    'lanes': ['mid', 'roam'],
    'roles': ['harass'],
    'tier': 'a',
    'tier_index': 3,
    "folder": 'preyta',
    "version_number": 13
  },
  {
    "id": 42,
    "name": 'Raz',
    'alt_names': ['Raz'],
    "nickname": 'Fist',
    "classes": ['mage', 'assassin'],
    'lanes': ['mid', 'solo', 'roam'],
    'roles': ['harass'],
    'tier': 's',
    'tier_index': 2,
    "folder": 'raz',
    "version_number": 13
  },
  {
    "id": 43,
    "name": 'Ryoma',
    'alt_names': ['Ryoma', 'rioma'],
    "nickname": 'Ronin',
    "classes": ['warrior'],
    'lanes': ['ds', 'jungle'],
    'roles': ['harass', 'finisher'],
    'tier': 'ss',
    'tier_index': 1,
    "folder": 'ryoma',
    "version_number": 13
  },
  {
    "id": 44,
    "name": 'Skud',
    'alt_names': ['Skud'],
    "nickname": 'Smasher',
    "classes": ['warrior', 'tank'],
    'lanes': ['support', 'ds', 'solo'],
    'roles': ['mobility', 'control'],
    'tier': 'b',
    'tier_index': 4,
    "folder": 'skud',
    "version_number": 13
  },
  {
    "id": 45,
    "name": 'Slimz',
    'alt_names': ['Slimz', 'slims'],
    "nickname": 'Trustworthy',
    "classes": ['marksman'],
    'lanes': ['solo', 'jungle', 'damage'],
    'roles': ['mobility', 'initiator'],
    'tier': 'b',
    'tier_index': 4,
    "folder": 'slimz',
    "version_number": 13
  },
  {
    "id": 46,
    "name": 'Superman',
    'alt_names': ['Superman', 'super', 'sm'],
    "nickname": 'Man of Steel',
    "classes": ['warrior', 'tank'],
    'lanes': ['roam', 'ds'],
    'roles': ['mobility', 'initiator'],
    'tier': 'ss',
    'tier_index': 1,
    "folder": 'superman',
    "version_number": 13
  },
  {
    "id": 47,
    "name": 'Taara',
    'alt_names': ['Taara', 'tara'],
    "nickname": 'War Hammer',
    "classes": ['tank', 'warrior'],
    'lanes': [],
    'roles': ['mobility', 'healer', 'life steal'],
    'tier': 'c',
    'tier_index': 5,
    "folder": 'taara',
    "version_number": 13
  },
  {
    "id": 48,
    "name": 'TeeMee',
    'alt_names': ['TeeMee', 'tee', 'teme'],
    "nickname": 'Stalwart Twins',
    "classes": ['support', 'tank'],
    'lanes': ['support', 'roam'],
    'roles': ['initiator', 'mobility'],
    'tier': 's',
    'tier_index': 2,
    "folder": 'teemee',
    "version_number": 13
  },
  {
    "id": 49,
    "name": "Tel'Annas",
    'alt_names': ["Tel'Annas", 'tel', 'telannas', 'telanas'],
    "nickname": 'Ageless',
    "classes": ['marksman'],
    'lanes': ['roam', 'damage'],
    'roles': ['finisher'],
    'tier': 'a',
    'tier_index': 3,
    "folder": 'telannas',
    "version_number": 13
  },
  {
    "id": 50,
    "name": 'Thane',
    'alt_names': ['Thane'],
    "nickname": 'Protector',
    "classes": ['tank', 'warrior'],
    'lanes': ['support', 'roam'],
    'roles': ['control', 'initiator'],
    'tier': 'a',
    'tier_index': 3,
    "folder": 'thane',
    "version_number": 13
  },
  {
    "id": 51,
    "name": 'Flash',
    'alt_names': ['Flash'],
    "nickname": 'Fastest Man Alive',
    "classes": ['mage', 'assassin'],
    'lanes': ['roam', 'mid', 'solo'],
    'roles': ['mobility', 'initiator'],
    'tier': 'a',
    'tier_index': 3,
    "folder": 'flash',
    "version_number": 13
  },
  {
    "id": 52,
    "name": 'Joker',
    'alt_names': ['Joker'],
    "nickname": 'Clown Prince of Crime',
    "classes": ['marksman'],
    'lanes': ['mid', 'jungle'],
    'roles': ['harass'],
    'tier': 'a',
    'tier_index': 3,
    "folder": 'joker',
    "version_number": 13
  },
  {
    "id": 53,
    "name": 'Toro',
    'alt_names': ['Toro'],
    "nickname": '',
    "classes": ['tank'],
    'lanes': ['ds', 'solo'],
    'roles': ['control', 'initiator'],
    'tier': 'd',
    'tier_index': 6,
    "folder": 'toro',
    "version_number": 13
  },
  {
    "id": 54,
    "name": 'Valhein',
    'alt_names': ['Valhein', 'val'],
    "nickname": 'Demon Hunter',
    "classes": ['marksman'],
    'lanes': ['damage'],
    'roles': ['harass'],
    'tier': 'd',
    'tier_index': 6,
    "folder": 'valhein',
    "version_number": 13
  },
  {
    "id": 55,
    "name": 'Veera',
    'alt_names': ['Veera', 'vera'],
    "nickname": 'Soul Harvester',
    "classes": ['mage'],
    'lanes': ['damage', 'roam'],
    'roles': ['initiator'],
    'tier': 'd',
    'tier_index': 6,
    "folder": 'veera',
    "version_number": 13
  },
  {
    "id": 56,
    "name": 'Violet',
    'alt_names': ['Violet', 'vio'],
    "nickname": 'Pistol Assassin',
    "classes": ['marksman'],
    'lanes': ['solo', 'jungle'],
    'roles': ['mobility', 'finisher'],
    'tier': 'ss',
    'tier_index': 1,
    "folder": 'violet',
    "version_number": 13
  },
  {
    "id": 57,
    "name": 'Wisp',
    'alt_names': ['Wisp'],
    "nickname": 'Mischievous',
    "classes": ['marksman'],
    'lanes': ['damage', 'jungle'],
    'roles': [],
    'tier': 'b',
    'tier_index': 4,
    "folder": 'wisp',
    "version_number": 13
  },
  {
    "id": 58,
    "name": 'Wonder Woman',
    'alt_names': ['Wonder Woman', 'wonderwoman', 'ww', 'wonder'],
    "nickname": 'Amazon of Themyscira',
    "classes": ['warrior'],
    'lanes': ['solo', 'ds', 'roam'],
    'roles': ['control'],
    'tier': 'a',
    'tier_index': 3,
    "folder": 'wonderwoman',
    "version_number": 13
  },
  {
    "id": 59,
    "name": 'Wukong',
    'alt_names': ['Wukong', 'monkey'],
    "nickname": 'Monkey King',
    "classes": ['assassin', 'warrior'],
    'lanes': ['jungle'],
    'roles': ['mobility'],
    'tier': 'a',
    'tier_index': 3,
    "folder": 'wukong',
    "version_number": 13
  },
  {
    "id": 60,
    "name": 'Xeniel',
    'alt_names': ['Xeniel', 'xenel', 'x'],
    "nickname": 'Immaculate',
    "classes": ['tank', 'support'],
    'lanes': ['ds', 'solo'],
    'roles': ['control', 'healer'],
    'tier': 'a',
    'tier_index': 3,
    "folder": 'xeniel',
    "version_number": 13
  },
  {
    "id": 61,
    "name": 'Yorn',
    'alt_names': ['Yorn'],
    "nickname": 'Hotshot',
    "classes": ['marskman'],
    'lanes': ['damage', 'mid'],
    'roles': ['harass'],
    'tier': 'b',
    'tier_index': 4,
    "folder": 'yorn',
    "version_number": 13
  },
  {
    "id": 62,
    "name": 'Zanis',
    'alt_names': ['Zanis'],
    "nickname": 'Dragoon',
    "classes": ['warrior'],
    'lanes': ['jungle', 'roam'],
    'roles': ['finisher'],
    'tier': 'c',
    'tier_index': 5,
    "folder": 'zanis',
    "version_number": 13
  },
  {
    "id": 63,
    "name": 'Zephys',
    'alt_names': ['Zephys', 'zephis'],
    "nickname": 'Doomspear',
    "classes": ['warrior', 'assassin'],
    'lanes': ['jungle', 'roam'],
    'roles': ['mobility'],
    'tier': 's',
    'tier_index': 2,
    "folder": 'zephys',
    "version_number": 13
  },
  {
    "id": 64,
    "name": 'Zill',
    'alt_names': ['Zill'],
    "nickname": 'Tempest',
    "classes": ['mage', 'assassin'],
    'lanes': [],
    'roles': ['mobility'],
    'tier': 'a',
    'tier_index': 3,
    "folder": 'zill',
    "version_number": 13
  },
  {
    "id": 65,
    "name": 'Zuka',
    'alt_names': ['Zuka'],
    "nickname": 'Pandharma Master',
    "classes": ['warrior', 'assassin'],
    'lanes': ['jungle', 'solo', 'ds'],
    'roles': ['mobility'],
    'tier': 'a',
    'tier_index': 3,
    "folder": 'zuka',
    "version_number": 13
  },
  {
    "id": 66,
    "name": 'Rourke',
    'alt_names': ['rorke'],
    "nickname": 'The Captain',
    "classes": ['warrior', 'marksman'],
    'lanes': ['solo', 'dragon'],
    'roles': ['mobility', 'finisher'],
    'tier': 'b',
    'tier_index': 3,
    "folder": 'rourke',
    "version_number": 13
  },
  {
    "id": 67,
    "name": 'Arum',
    'alt_names': ['Arum'],
    "nickname": 'Conjurer',
    "classes": ['tank'],
    'lanes': ['roam'],
    'roles': ['life steal', 'initiator'],
    'tier': 's',
    'tier_index': 2,
    "folder": 'arum',
    "version_number": 14
  },
  {
    "id": 68,
    "name": 'Marja',
    'alt_names': ['Marja'],
    "nickname": 'Ash Weaver',
    "classes": ['mage', 'tank'],
    'lanes': ['roam'],
    'roles': ['life steal'],
    'tier': 'a',
    'tier_index': 2,
    "folder": 'marja',
    "version_number": 15
  },
  {
    "id": 69,
    "name": 'Baldum',
    'alt_names': ['Baldum'],
    "nickname": 'Monolith',
    "classes": ['tank'],
    'lanes': ['roam'],
    'roles': ['control', 'initiator'],
    'tier': 'a',
    'tier_index': 2,
    "folder": 'baldum',
    "version_number": 15
  },
  {
    "id": 70,
    "name": 'Roxie',
    'alt_names': ['Roxie', 'Roxi'],
    "nickname": 'Adventurer',
    "classes": ['tank', 'warrior'],
    'lanes': ['roam'],
    'roles': ['control'],
    'tier': 'a',
    'tier_index': 1,
    "folder": 'roxie',
    "version_number": 15
  },
]

export default HEROES

export function find_hero_by_id(id) {
  return HEROES.find(h => h.id === id)
}

export function find_hero_by_name(name) {
  return HEROES.filter(hero_obj =>
    hero_obj.alt_names.findIndex(
      alt_name => alt_name.toLowerCase() === name.toLowerCase(),
    ) > -1,
  )[0] // get first object that matches the filter ;)
}

function sortResultsAlpha(heroes) {
  heroes = heroes.sort((a, b) => a.name.localeCompare(b.name));
  return heroes;
}

export const HEROES_ALPHA = sortResultsAlpha(HEROES)
