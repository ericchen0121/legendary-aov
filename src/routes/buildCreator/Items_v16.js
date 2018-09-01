export const ITEMS = [
  {
    id: 1,
    name: 'Spear of Longinus',
    type: 'attack',
    tier: 3,
    cost: 2080,
    folder: 'spearoflonginus',
    effects: [
      {
        type: 'attack damage',
        power: 80,
      },
      {
        type: 'cooldown speed',
        power: 0.15,
      },
      {
        type: 'max hp',
        power: 400,
      },
    ],
    passives: [{
      name: 'Shatter',
      unique: true,
      description: 'Decreases target armor by 50 on hit for 5 seconds. Stacks up to 5 times.',
      type: ['strip']
    }],
  },
  {
    id: 2,
    name: "Fafnir's Talon",
    type: 'attack',
    tier: 3,
    cost: 2040,
    folder: 'fafnirstalon',
    effects: [
      {
        type: 'attack damage',
        power: 60,
      },
      {
        type: 'attack speed',
        power: 0.30,
      },
      {
        type: 'life steal',
        power: 0.1,
      },
    ],
    passives: [{
      name: "Dragon's Breath",
      unique: true,
      description: 'Normal attacks deal additional damage equal to 8% of target’s current HP.',
      type: ['attack damage']
    }]
  },
  {
    id: 3,
    name: "Claves Sancti",
    type: 'attack',
    tier: 3,
    cost: 2250,
    folder: 'clavessancti',
    effects: [
      {
        type: 'attack damage',
        power: 90,
      }
    ],
    passives: [
      {
        name: "Gift of the Swift",
        unique: true,
        description: "Increases hero's movement speed by (3-45) for 1.5 seconds after landing a critical hit. Only usable by ranged heroes.",
        type: ['movement speed']
      },
      {
        name: 'Critical Chance',
        unique: true,
        description: '+25%',
        type: ['critical chance']
      },
      {
        name: 'Critical Damage',
        unique: true,
        description: '+50%',
        type: ['critical damage']
      }
     ]
  },
  {
    id: 4,
    name: "Muramasa",
    type: 'attack',
    tier: 3,
    cost: 1980,
    folder: 'muramasa',
    effects: [
      {
        type: 'attack damage',
        power: 75,
      },
      {
        type: 'cooldown speed',
        power: 0.10,
      },
      {
        type: 'armor pierce',
        power: 0.45,
      },
    ],
    passives: [{
      name: "Armor Pierce",
      unique: true,
      description: '+45%',
      type: ['armor pierce']
    }]
  },
  {
    id: 5,
    name: "The Beast",
    type: 'attack',
    tier: 3,
    cost: 1740,
    folder: 'thebeast',
    effects: [
      {
        type: 'attack damage',
        power: 100,
      },
      {
        type: 'life steal',
        power: 0.25,
      },
    ],
    passives: []
  },
  {
    id: 6,
    name: "Omni Arms",
    type: 'attack',
    tier: 3,
    cost: 2150,
    folder: 'omniarms',
    effects: [
      {
        type: 'attack damage',
        power: 70,
      },
      {
        type: 'attack speed',
        power: 0.15,
      },
      {
        type: 'life steal',
        power: 0.1,
      },
      {
        type: 'cooldown speed',
        power: 0.1,
      },
      {
        type: 'max hp',
        power: 500,
      },
    ],
    passives: [{
      name: "Elemental Power",
      unique: true,
      description: 'After using an ability, the next normal attack within 5 seconds deals 100% more physical damage. 2-second cooldown.',
      type: ['attack damage']
    }]
  },
  {
    id: 7,
    name: "Slikk's Sting",
    type: 'attack',
    tier: 3,
    cost: 2000,
    folder: 'slikkssting',
    effects: [
      {
        type: 'attack speed',
        power: 0.35,
      },
      {
        type: 'critical chance',
        power: 0.25,
      },
      {
        type: 'movement speed %',
        power: 0.07,
      },
    ],
    passives: [{
      name: "Blessing of the Wind",
      unique: false,
      description: "Increases hero's resistance by 35% for 2 seconds.",
      type: ['resistance']
    }]
  },
  {
    id: 8,
    name: "Fenrir's Tooth",
    type: 'attack',
    tier: 3,
    cost: 2950,
    folder: 'fenrirstooth',
    effects: [
      {
        type: 'attack damage',
        power: 200,
      },
    ],
    passives: [{
      name: "Fenrir's Tooth",
      unique: true,
      description: "Inreases all damage dealt by 30% when the target's HP is below 50%",
      type: ['attack damage']
    }]
  },
  {
    id: 9,
    name: "Blitz Blade",
    type: 'attack',
    tier: 3,
    cost: 1780,
    folder: 'blitzblade',
    effects: [
      {
        type: 'attack damage',
        power: 50,
      },
      {
        type: 'attack speed',
        power: 0.35,
      },
      {
        type: 'life steal',
        power: 0.1,
      },
      {
        type: 'movement speed %',
        power: 0.05,
      },
    ],
    passives: [{
      name: "Chain Lightning",
      unique: true,
      description: ' Every 4 seconds, the next normal attack triggers a chain lightning that deals 102 (+7 per level) magic damage. Each normal attack also carries Life Steal and reduces cooldown by 1 second on hit. Damage is multipled when used at long range.',
      type: ['attack damage', 'life steal', 'cooldown speed']
    }]
  },
  {
    id: 10,
    name: "Devil's Handshake",
    type: 'attack',
    tier: 3,
    cost: 2070,
    folder: 'devilshandshake',
    effects: [
      {
        type: 'attack speed',
        power: 0.30,
      },
      {
        type: 'critical chance',
        power: 0.20,
      },
      {
        type: 'movement speed %',
        power:  0.05,
      },
    ],
    passives: [{
      name: "Flame Wrath",
      unique: true,
      description: 'Normal attacks increase attack speed by 10% for 2 seconds. Stacks up to 5 times.',
      type: ['attack speed']
    }]
  },
  {
    id: 11,
    name: "Rankbreaker",
    type: 'attack',
    tier: 3,
    cost: 2020,
    folder: 'rankbreaker',
    effects: [
      {
        type: 'attack damage',
        power: 110,
      },
    ],
    passives: [{
      name: "Windwalk",
      unique: true,
      description: 'Increases movement speed by 10% after exiting battle.',
      type: ['exit movement speed']
    },
    {
      name: "Break",
      unique: true,
      description: 'Increases armor pierce by 100 (+10 per level).',
      type: ['armor pierce']
    }]
  },
  {
    id: 12,
    name: "Boomstick",
    type: 'magic',
    tier: 3,
    cost: 2000,
    folder: 'boomstick',
    effects: [
      {
        type: 'ability power',
        power: 240,
      },
    ],
    passives: [{
      name: "Explosion",
      unique: true,
      description: 'Ability hits trigger a small-area explosion that deals 50 (+50% ability power) magic damage. 5-second cooldown.',
      type: ['magic damage']
    }]
  },
  {
    id: 13,
    name: "Hecate's Diadem",
    type: 'magic',
    tier: 3,
    cost: 2300,
    folder: 'hecatesdiadem',
    effects: [
      {
        type: 'ability power',
        power: 240,
      },
      {
        type: 'ability power %',
        power: 0.35,
      },
    ],
    passives: [{
      name: "Warlock",
      unique: true,
      description: 'Ability Power +35%',
      type: ['ability power']
    }]
  },
  {
    id: 14,
    name: "Orb of the Magi",
    type: 'magic',
    tier: 3,
    cost: 2010,
    folder: 'orbofthemagi',
    effects: [
      {
        type: 'ability power',
        power: 140,
      },
      {
        type: 'cooldown speed',
        power: 0.1,
      },
    ],
    passives: [{
      name: "Bide",
      unique: true,
      description: 'Gains 12 ability power and 110 HP every 30 seconds. Stacks up to 10 times.',
      type: ['ability power']
    },
    {
      name: "From the Ashes",
      unique: true,
      description: 'When the hero gains a level, 20% of HP and mana are restored over 3 seconds.',
      type: ['restore']
    }]
  },
  {
    id: 15,
    name: "Rhea's Blessing",
    type: 'magic',
    tier: 3,
    cost: 2220,
    folder: 'rheasblessing',
    effects: [
      {
        type: 'ability power',
        power: 140,
      },
      {
        type: 'cooldown speed',
        power: 0.10,
      },
      {
        type: 'magic life steal',
        power: 0.25,
      },
    ],
    passives: [{
      name: "Life Shield",
      unique: true,
      description: 'Gains a shield that absorbs 450(+50 per level)(+40% ability power) damage when HP falls below 40%. The shield lasts 4 seconds and has a 75-second cooldown.',
      type: ['shield']
    },
    {
      name: "Magic Life Steal",
      unique: true,
      description: '+25%',
      type: ['magic life steal', 'life steal']
    },
    ]
  },
  {
    id: 16,
    name: "Zweihander",
    type: 'magic',
    tier: 3,
    cost: 1970,
    folder: 'zweihander',
    effects: [
      {
        type: 'ability power',
        power: 180,
      },
      {
        type: 'max mana',
        power: 400,
      },
      {
        type: 'movement speed %',
        power: 0.08,
      },
    ],
    passives: [{
      name: "Rapid Blade",
      unique: true,
      description: 'Normal attack hits increase attack speed by 50% for 4 seconds. 10-second cooldown.',
      type: ['attack speed']
    },
    {
      name: "Twilight",
      unique: true,
      description: 'Normal attacks gain additional magic damage equal to 20% of the hero’s ability power.',
      type: ['magic damage']
    }]
  },
  {
    id: 17,
    name: "Frosty's Revenge",
    type: 'magic',
    tier: 3,
    cost: 2020,
    folder: 'frostysrevenge',
    effects: [
      {
        type: 'ability power',
        power: 140,
      },
      {
        type: 'max hp',
        power: 850,
      },
      {
        type: 'movement speed %',
        power: 0.05,
      },
    ],
    passives: [{
      name: "Chill",
      unique: false,
      description: 'Abilities that deal damage will also reduce enemy movement speed by 20% for 2 seconds.',
      type: ['slow']
    }]
  },
  {
    id: 18,
    name: "Berith's Agony",
    type: 'magic',
    tier: 3,
    cost: 2160,
    folder: 'berithsagony',
    effects: [
      {
        type: 'ability power',
        power: 140,
      },
      {
        type: 'cooldown speed',
        power: 0.10,
      },
      {
        type: 'armor',
        power: 270,
      },
    ],
    passives: [{
      name: "Torture",
      unique: true,
      description: 'Deals magic damage equal to 3% of the target’s current HP per second for 3s(up to 80% against monsters). 1.2-second cooldown.',
      type: ['magic damage']
    }]
  },
  {
    id: 19,
    name: "Apocalypse",
    type: 'magic',
    tier: 3,
    cost: 2190,
    folder: 'apocalypse',
    effects: [
      {
        type: 'ability power',
        power: 200,
      },
      {
        type: 'cooldown speed',
        power: 0.10,
      },
    ],
    passives: [{
      name: "Elemental Power",
      unique: true,
      description: 'After using an ability, the next normal attack deals additional magic damage equal to 30% of attack damage (+80% ability power). 2-second cooldown.',
      type: ['magic damage']
    }]
  },
  {
    id: 20,
    name: "Soaring Aura",
    type: 'magic',
    tier: 3,
    cost: 2020,
    folder: 'soaringaura',
    effects: [
      {
        type: 'ability power',
        power: 140,
      },
      {
        type: 'max hp',
        power: 1050,
      },
    ],
    passives: [{
      name: "Protection",
      unique: true,
      description: 'Reduces magic defense of enemies within 800 units by 75(+5 per level).',
      type: ['strip']
    }]
  },
  {
    id: 21,
    name: "Holy of Holies",
    type: 'magic',
    tier: 3,
    cost: 2020,
    folder: 'holyofholies',
    effects: [
      {
        type: 'ability power',
        power: 400,
      },
      {
        type: 'max hp',
        power: 1400,
      },
    ],
    passives: [{
      name: "Enlightenment",
      unique: true,
      description: 'Increases maximum HP by 1400',
      type: ['max hp']
    }]
  },
  {
    id: 22,
    name: "Mantle of Ra",
    type: 'defense',
    tier: 3,
    cost: 1950,
    folder: 'mantleofra',
    effects: [
      {
        type: 'attack damage',
        power: 80,
      },
      {
        type: 'armor',
        power: 330,
      },
    ],
    passives: [{
      name: "Burn",
      unique: true,
      description: 'Deals 100 (+4 per level) magic damage to nearby enemies (150 units) every second.',
      type: ['magic damage']
    }]
  },
  {
    id: 23,
    name: "Shield of the Lost",
    type: 'defense',
    tier: 3,
    cost: 2100,
    folder: 'shieldofthelost',
    effects: [
      {
        type: 'armor',
        power: 360,
      },
      {
        type: 'max hp',
        power: 1200,
      },
    ],
    passives: [{
      name: "Spirit Bond",
      unique: true,
      description: 'Reduces the attack speed of nearby enemies (200 units) by 30%',
      type: ['strip']
    }]
  },
  {
    id: 24,
    name: "The Aegis",
    type: 'defense',
    tier: 3,
    cost: 2180,
    folder: 'theaegis',
    effects: [
      {
        type: 'cooldown speed',
        power: 0.20,
      },
      {
        type: 'max mana',
        power: 400,
      },
      {
        type: 'armor',
        power: 360,
      },
    ],
    passives: [{
      name: "Spirit Bond",
      unique: true,
      description: 'When taking damage, reduces the attacker’s attack speed by 30% and movement speed by 15% for 3 seconds.',
      type: ['strip', 'slow']
    }]
  },
  {
    id: 25,
    name: "Gaia's Standard",
    type: 'defense',
    tier: 3,
    cost: 1960,
    folder: 'gaiasstandard',
    effects: [
      {
        type: 'magic defense',
        power: 240,
      },
      {
        type: 'max hp',
        power: 1200,
      },
      {
        type: 'movement speed %',
        power: 0.05,
      },
    ],
    passives: [{
      name: "Regenerate",
      unique: true,
      description: 'When taking damage, restores 8% HP over 2 seconds. 10-second cooldown.',
      type: ['healing']
    }]
  },
  {
    id: 26,
    name: "Medallion of Troy",
    type: 'defense',
    tier: 3,
    cost: 2220,
    folder: 'medallionoftroy',
    effects: [
      {
        type: 'cooldown speed',
        power: 0.1,
      },
      {
        type: 'magic defense',
        power: 360,
      },
      {
        type: 'max hp',
        power: 1000,
      },
    ],
    passives: [{
      name: "Blessed",
      unique: true,
      description: 'Gains a shield that absorbs 300(+50 per level) magic damage every 18 seconds.',
      type: ['shield']
    }]
  },
  {
    id: 27,
    name: "Crimson Banner",
    type: 'defense',
    tier: 3,
    cost: 2090,
    folder: 'crimsonbanner',
    effects: [
      {
        type: 'armor',
        power: 200,
      },
      {
        type: 'max hp',
        power: 1500,
      },
    ],
    passives: [{
      name: "Bloody Battle",
      unique: true,
      description: 'Restores 20% HP over 5 seconds after earning a kill or assist. 10-second cooldown.',
      type: ['healing']
    }]
  },
  {
    id: 28,
    name: "Hyoga's Edge",
    type: 'defense',
    tier: 3,
    cost: 1950,
    folder: 'hyogasedge',
    effects: [
      {
        type: 'armor',
        power: 100,
      },
      {
        type: 'magic defense',
        power: 100,
      },
      {
        type: 'max hp',
        power: 1200,
      },
    ],
    passives: [{
      name: "Biting Cold",
      unique: true,
      description: 'Normal attacks increase the wearer’s movement speed by 10% and reduce target’s movement speed by 25% for 2 seconds.',
      type: ['movement, slow']
    }]
  },
  {
    id: 29,
    name: "Ancestral Glory",
    type: 'defense',
    tier: 3,
    cost: 1950,
    folder: 'ancestralglory',
    active: false,
    alternative_id: 68,
    effects: [
      {
        type: 'max hp',
        power: 1000,
      },
    ],
    passives: [{
      name: "Resurrect",
      unique: true,
      description: 'Revives wearer 4 seconds after death with 3000 HP. 150-second cooldown.',
      type: ['revive']
    }]
  },
  {
    id: 30,
    name: "Frost Cape",
    type: 'defense',
    tier: 3,
    cost: 1970,
    folder: 'frostcape',
    effects: [
      {
        type: 'cooldown speed',
        power: 0.1,
      },
      {
        type: 'armor',
        power: 200,
      },
      {
        type: 'max hp',
        power: 800,
      },
    ],
    passives: [{
      name: "Elemental Power",
      unique: true,
      description: 'After using an ability, the next normal attack reduces movement speed by 30% and deals 150 physical damage (20 additional damage for each level gained) to an area. 3-second cooldown.',
      type: ['slow', 'attack damage']
    }]
  },
  {
    id: 31,
    name: "Amulet of Longevity",
    type: 'defense',
    tier: 3,
    cost: 2680,
    folder: 'amuletoflongevity',
    effects: [
      {
        type: 'max hp',
        power: 1700,
      },
      {
        type: 'hp',
        power: 100,
        detail: 'per 5 seconds'
      },
    ],
    passives: [{
      name: "I'm Golden",
      unique: true,
      description: 'Increases healing taken by 20%.',
      type: ['healing']
    },
    {
      name: "Longevity",
      unique: true,
      description: 'Increases maximum HP by 10%',
      type: ['max hp']
    }]
  },
  {
    id: 32,
    name: "Sonic Boots",
    type: 'movement',
    tier: 2,
    cost: 700,
    folder: 'sonicboots',
    effects: [
      {
        type: 'armor',
        power: 110,
      },
      {
        type: 'movement speed',
        power: 60,
      },
    ],
    passives: [{
      name: "Movement Speed",
      unique: true,
      description: 'Movement Speed +60',
      type: ['boots']
    },
    {
      name: "Boots",
      unique: true,
      description: 'Reduces attack damage taken by 15%',
      type: ['reduce damage', 'buff']
    }]
  },
  {
    id: 33,
    name: "Gilded Greaves",
    type: 'movement',
    tier: 2,
    cost: 690,
    folder: 'gildedgreaves',
    effects: [
      {
        type: 'magic defense',
        power: 110,
      },
      {
        type: 'movement speed',
        power: 60,
      },
      {
        type: 'resistance %',
        power: 0.35,
      },
    ],
    passives: [{
      name: "Movement Speed",
      unique: true,
      description: 'Movement Speed +60',
      type: ['boots']
    },
    {
      name: "Resistance",
      unique: true,
      description: '+35%',
      type: ['reduce slows']
    }]
  },
  {
    id: 34,
    name: "Flashy Boots",
    type: 'movement',
    tier: 2,
    cost: 710,
    folder: 'flashyboots',
    effects: [
      {
        type: 'cooldown speed',
        power: 0.15,
      },
      {
        type: 'movement speed',
        power: 60,
      },
    ],
    passives: [{
      name: "Movement Speed",
      unique: true,
      description: 'Movement Speed +60',
      type: ['boots']
    },]
  },
  {
    id: 35,
    name: "Enchanted Kicks",
    type: 'movement',
    tier: 2,
    cost: 790,
    folder: 'enchantedkicks',
    effects: [
      {
        type: 'magic pierce',
        power: 75,
      },
      {
        type: 'movement speed',
        power: 60,
      },
    ],
    passives: [{
      name: "Movement Speed",
      unique: true,
      description: 'Movement Speed +60',
      type: ['boots']
    },
    {
      name: "Magic Pierce",
      description: '+75',
      power: 75,
    }]
  },
  {
    id: 36,
    name: "War Boots",
    type: 'movement',
    tier: 2,
    cost: 660,
    folder: 'warboots',
    effects: [
      {
        type: 'attack speed',
        power: 0.25,
      },
      {
        type: 'movement speed',
        power: 60,
      },
    ],
    passives: [{
      name: "Movement Speed",
      unique: true,
      description: 'Movement Speed +60',
      type: ['boots']
    },]
  },
  {
    id: 37,
    name: "Loki's Curse",
    type: 'jungling',
    tier: 3,
    cost: 1750,
    folder: 'lokiscurse',
    effects: [
      {
        type: 'ability power',
        power: 150,
      },
      {
        type: 'max hp',
        power: 400,
      },
    ],
    passives: [{
      name: "Curse Power",
      unique: true,
      description: 'After using an ability, the next normal attack deals additional damage equal to 35% attack damage (+45% ability power). 2-second cooldown.',
      type: ['attack damage', 'ability power']
    },
    {
      name: "Hunter",
      unique: true,
      description: 'Deals 35% extra damage to monsters and receives 30% more experience from killing monsters.',
      type: ['monster attack damage', 'monster experience']
    },
    {
      name: "Seek and Destroy",
      unique: true,
      description: 'Gains 8 ability power and 30 maximum mana for every monster killed. Stacks up to 15 times.',
      type: ['ability power', 'mana regen']
    },
  ]
  },
  {
    id: 38,
    name: "Leviathan",
    type: 'jungling',
    tier: 3,
    cost: 1750,
    folder: 'leviathan',
    effects: [
      {
        type: 'armor',
        power: 100,
      },
      {
        type: 'max hp',
        power: 750,
      },
    ],
    passives: [
      {
        name: "Flame Magic",
        unique: true,
        description: 'Deals 90 (+5 per level) magic damage to nearby enemies every second.',
        type: ['magic damage']
      },
      {
        name: "Hunter",
        unique: true,
        description: 'Deals 35% extra damage to monsters and receives 30% more experience from killing monsters.',
        type: ['monster attack damage', 'monster experience']
      },
      {
        name: "Wild",
        unique: true,
        description: 'Increases maximum HP by 70 for every monster killed. Stacks up to 15 times.',
        type: ['monster max hp']
      },
    ]
  },
  {
    id: 39,
    name: "Soulreaver",
    type: 'jungling',
    tier: 3,
    cost: 1750,
    folder: 'soulreaver',
    effects: [
      {
        type: 'attack damage',
        power: 90,
      },
      {
        type: 'cooldown speed',
        power: 0.15,
      },
    ],
    passives: [
      {
        name: "Hunter",
        unique: true,
        description: 'Deals 35% extra damage to monsters and receives 30% more experience from killing monsters.',
        type: ['monster attack damage', 'monster experience']
      },
      {
        name: "Wild",
        unique: true,
        description: 'Increases maximum HP by 70 for every monster killed. Stacks up to 15 times.',
        type: ['monster max hp']
      },
    ]
  },
  {
    id: 40,
    name: "Scorching Wind",
    type: 'jungling',
    tier: 3,
    cost: 1750,
    folder: 'scorchingwind',
    effects: [
      {
        type: 'attack damage',
        power: 15,
      },
      {
        type: 'attack speed',
        power: 0.2,
      },
      {
        type: 'life steal',
        power: 0.1,
      },
    ],
    passives: [
      {
        name: "Fire Storm",
        unique: true,unique: true,
        description: 'Normal attacks place a mark on the target, dealing (18 + levelx0.5) magic damage each stack (ranged attacks deal 75% of the damage), up to 6 stacks.',
        type: ['magic damage']
      },
      {
        name: "Hunter",
        unique: true,
        description: 'Deals 35% extra damage to monsters and receives 30% more experience from killing monsters.',
        type: ['monster attack damage', 'monster experience']
      },
      {
        name: "Wild",
        unique: true,
        description: 'Increases maximum HP by 70 for every monster killed. Stacks up to 15 times.',
        type: ['monster max hp']
      },
    ]
  },
  {
    id: 41,
    name: "Mail of Pain",
    type: 'defense',
    tier: 2,
    cost: 1940,
    folder: 'mailofpain',
    effects: [
      {
        type: 'armor',
        power: 300,
      },
      {
        type: 'max hp',
        power: 1200,
      },
      {
        type: 'magic damage %',
        power: 0.15
      },
    ],
    passives: [
      {
        name: "Riposte",
        unique: true,
        description: '15% of the physical damage taken is deflected to the enemy as magic damage (calulation is based on damage before damage reduction).',
        type: ['magic damage']
      },
    ]
  },
  {
    id: 42,
    name: "Hercules Madness",
    type: 'defense',
    tier: 2,
    cost: 2000,
    folder: 'herculesmadness',
    effects: [
      {
        type: 'attack damage',
        power: 50,
      },
      {
        type: 'armor',
        power: 180,
      },
      {
        type: 'magic defense',
        power: 150,
      },
    ],
    passives: [
      {
        name: "Berserk",
        unique: true,
        description: 'Increases attack damage by 40 and gains a shield for 8 seconds when HP is below 40%. 90-second cooldown.',
        type: ['attack damage', 'shield']
      },
    ]
  },
  {
    id: 43,
    name: "Arctic Orb",
    type: 'magic',
    tier: 3,
    cost: 2000,
    folder: 'arcticorb',
    effects: [
      {
        type: 'ability power',
        power: 200,
      },
    ],
    passives: [
      {
        name: "Impervious",
        unique: true,
        description: 'Immune to all effects for 1.5 seconds, but cannot move or use abilities. 90-second cooldown.',
        type: ['immunity']
      },
    ]
  },
  {
    id: 44,
    name: "Staff of Nuul",
    type: 'magic',
    tier: 2,
    cost: 2050,
    folder: 'staffofnuul',
    effects: [
      {
        type: 'ability power',
        power: 180,
      },
      {
        type: 'cooldown speed',
        power: .1,
      },
      {
        type: 'magic pierce %',
        power: .4,
      },
    ],
    passives: [
      {
        name: "Magic Pierce",
        unique: true,
        description: '+40%',
        type: ['magic pierce']
      },
    ]
  },
  {
    id: 45,
    name: "Bow of Slaughter",
    type: 'attack',
    tier: 2,
    cost: 2400,
    folder: 'bowofslaughter',
    effects: [
      {
        type: 'attack damage',
        power: 90,
      },
      {
        type: 'critical change',
        power: .2,
      },
      {
        type: 'life steal',
        power: .1,
      },
    ],
    passives: [
      {
        name: "Blood Thirst",
        unique: true,
        description: 'Increases Life Steal by 90% fo 3 seconds. 60-second cooldown. Only usable by ranged heroes.',
        type: ['life steal']
      },
    ]
  },
  {
    id: 46,
    name: "Vlad's Impaler",
    type: 'magic',
    tier: 2,
    cost: 1130,
    folder: 'vladsimpaler',
    effects: [
      {
        type: 'ability power',
        power: 90,
      },
      {
        type: 'magic life steal',
        power: .15,
      },
    ],
    passives: [
      {
        name: "Magic Life Steal",
        unique: true,
        description: '+15%',
        type: ['magic life steal']
      },
    ]
  },
  {
    id: 47,
    name: "Tome of the Reaper",
    type: 'magic',
    tier: 2,
    cost: 2050,
    folder: 'tomeofthereaper',
    effects: [
      {
        type: 'ability power',
        power: 240,
      },
      {
        type: 'max hp',
        power: 500,
      },
    ],
    passives: [
      {
        name: "Soul Prison",
        unique: true,
        description: "On dealing damage, reduces target’s HP regeneration by 50% for 1.5 seconds. If this is triggered by normal attacks, the duration is extended to 3 seconds.",
        type: ['reduces target HP regen']
      },
    ]
  },
  {
    id: 48,
    name: "Virtues Bracelet",
    type: 'magic',
    tier: 2,
    cost: 720,
    folder: 'virtuesbracelet',
    effects: [
      {
        type: 'ability power',
        power: 60,
      },
      {
        type: 'cooldown speed',
        power: .05,
      },
      {
        type: 'mana',
        power: '+20/5 sec',
      }
    ],
    passives: [
      {
        name: "Soaring Spirit",
        unique: true,
        description: "Restores 20% mana after earning a kill or assist.",
        type: ['mana regen']
      },
    ]
  },
  {
    id: 49,
    name: "Knights Plate",
    type: 'defense',
    tier: 2,
    cost: 730,
    folder: 'knightsplate',
    effects: [
      {
        type: 'armor',
        power: 210,
      },
    ],
    passives: [
      {
        name: "Spirit Bond",
        description: "When taking damage, reduces the attacker’s attack speed by 30%.",
        type: ['reduce attackers speed']
      },
    ]
  },
  {
    id: 50,
    active: false,
    alternative_id: 0,
    name: "Asterion's Buckler",
    type: 'defense',
    tier: 2,
    cost: 1600,
    folder: 'asterionsbuckler',
    effects: [
      {
        type: 'max hp',
        power: 1000,
      },
      {
        type: 'hp',
        power: '+60 / 5 sec',
      },
    ],
    passives: [
      {
        name: "War Cry",
        unique: true,
        description: "Increases damage dealt and damage reduction of nearby friendly units by 5% and 10%, respectively. [samurai gamers: Getting within 200 units of an ally will trigger War Cry for 2-3 seconds]",
        type: ['buff']
      },
    ]
  },
  {
    id: 51,
    name: "Hermes Select",
    type: 'movement',
    tier: 2,
    cost: 580,
    folder: 'hermesselect',
    effects: [
      {
        type: 'movement speed',
        power: 60,
      },
    ],
    passives: [{
      name: "Swift",
      unique: true,
      description: 'Increases movement speed by 60 after exiting battle.',
      type: ['exit movement speed']
    },
    {
      name: "Movement Speed",
      unique: true,
      description: 'Movement Speed +60',
      type: ['boots']
    },]
  },
  {
    id: 52,
    name: "Phoenix Tear",
    type: 'magic',
    tier: 2,
    cost: 600,
    folder: 'phoenixtear',
    effects: [
      {
        type: 'ability power',
        power: 60,
      },
    ],
    passives: [{
      name: "From the Ashes",
      unique: true,
      description: 'When the hero gains a level, 20% of HP and Mana are restored over 3 seconds.',
      type: ['exit movement speed']
    }]
  },
  {
    id: 54,
    name: "Curse of Death",
    type: 'attack',
    tier: 2,
    cost: 1800,
    folder: 'curseofdeath',
    effects: [
      {
        type: 'attack damage',
        power: 100,
      },
      {
        type: 'life steal',
        power: .1,
      },
    ],
    passives: [{
      name: "Soul Prison",
      unique: true,
      description: "On dealing damage, reduces target's HP regeneration by 50% for 1.5 seconds. If this is triggered by normal attacks, the duration is extended to 3 seconds.",
      type: ['reduce HP regen']
    }]
  },
  {
    id: 53,
    name: "Spoopy Mask",
    type: 'magic',
    tier: 2,
    cost: 960,
    folder: 'spoopymask',
    effects: [
      {
        type: 'ability power',
        power: 100,
      },
      {
        type: 'magic pierce',
        power: 75,
      },
    ],
    passives: [{
      name: "Magic Pierce",
      unique: true,
      description: "Magic Pierce +75%.",
      type: ['magic pierce']
    }]
  },
  {
    id: 55,
    name: "Rock Shield",
    type: 'defense',
    tier: 3,
    cost: 1980,
    folder: 'rockshield',
    effects: [
      {
        type: 'armor',
        power: 150,
      },
      {
        type: 'magic defense',
        power: 150,
      },
      {
        type: 'max hp',
        power: 800,
      },
    ],
    passives: [{
      name: "Rock Shield",
      unique: true,
      description: "3 seconds after activation, the wearer gains a shield with 30% of the damage taken in those 3 seconds (+10% of max HP) for 3 seconds. The player's damage dealt is reduced by 70% for 3 seconds after gaining the shield. 75-second cooldown.",
      type: ['shield']
    }]
  },
  {
    id: 56,
    name: "Odin's Will",
    type: 'defense',
    tier: 2,
    cost: 1820,
    folder: 'odinswill',
    effects: [
      {
        type: 'attack damage',
        power: 60,
      },
      {
        type: 'max hp',
        power: 1000,
      },
    ],
    passives: [{
      name: "Adrenaline",
      unique: true,
      description: 'Increases movement speed by 2% and deals 2% additional damage after taking damage. Stacks up to 5 times.',
      type: ['movement+', 'attack damage'],
    }]
  },
  {
    id: 57,
    name: "Death Sickle",
    type: 'attack',
    tier: 2,
    cost: 2000,
    folder: 'deathsickle',
    effects: [
      {
        type: 'attack damage',
        power: 60,
      },
      {
        type: 'cooldown speed',
        power: .05
      },
    ],
    passives: [{
      name: "Divine Intervention",
      unique: true,
      description: 'Prevents damage from a potential killing blow, then increases movement speed by 20% for 1 second. 90-second cooldown.',
      type: ['movement+', 'buff'],
    }]
  },
  {
    id: 58,
    name: "Wind Stone",
    type: 'support',
    tier: 1,
    cost: 800,
    folder: 'windstone',
    effects: [
      {
        type: 'movement speed %',
        power: .05,
      },
      {
        type: 'mana / sec',
        power: 8
      },
    ],
    passives: [{
      name: "Wage",
      unique: true,
      description: 'Gain 5 gold and experience every 3 seconds if your gold or experience is the lowest on the team.',
      type: ['farm'],
    }]
  },
  {
    id: 59,
    name: "Water Stone",
    type: 'support',
    tier: 1,
    cost: 800,
    folder: 'waterstone',
    effects: [
      {
        type: 'HP / sec',
        power: 20,
      },
      {
        type: 'mana / sec',
        power: 10
      },
    ],
    passives: [{
      name: "Devotion",
      unique: true,
      description: ' Gain a stack of Dedication Buff every 30 seconds. Stacks up to 2 times. If a unit dies within 800 units, consume a stack of Dedication Buff to grant the nearest ally 15 extra gold and 40 experience.',
      type: ['buff'],
    }]
  },
  {
    id: 60,
    name: "Windrider Talisman",
    type: 'support',
    tier: 2,
    cost: 2000,
    folder: 'windridertalisman',
    effects: [
      {
        type: 'armor',
        power: 175,
      },
      {
        type: 'hp / sec',
        power: 40
      },
      {
        type: 'mana / sec',
        power: 15
      },
      {
        type: 'Movement Speed %',
        power: .05
      },
    ],
    passives: [{
      name: "Wage",
      unique: true,
      description: 'Gain 5 gold and experience every 3 seconds if your gold or experience is the lowest on the team.',
      type: ['farm'],
      },
      {
      name: "Distinction",
      unique: true,
      description: 'Gain 30% more gold and experience after a kill or assist',
      type: ['farm'],
    }]
  },
  {
    id: 61,
    name: "Ring of Gale",
    type: 'support',
    tier: 2,
    cost: 2000,
    folder: 'ringofgale',
    effects: [
      {
        type: 'ability power',
        power: 60,
      },
      {
        type: 'Movement Speed %',
        power: .05
      },
      {
        type: 'mana / sec',
        power: 20
      },
    ],
    passives: [{
      name: "Wage",
      unique: true,
      description: 'Gain 5 gold and experience every 3 seconds if your gold or experience is the lowest on the team.',
      type: ['farm'],
      },
      {
      name: "Distinction",
      unique: true,
      description: 'Gain 30% more gold and experience after a kill or assist',
      type: ['farm'],
    }]
  },
  {
    id: 62,
    name: "Crystal Talisman",
    type: 'support',
    tier: 2,
    cost: 2000,
    folder: 'crystaltalisman',
    effects: [
      {
        type: 'armor',
        power: 120,
      },
    ],
    passives: [{
      name: "Devotion",
      unique: true,
      description: 'Gain a stack of Dedication Buff every 30 seconds. Stacks up to 2 times. If a unit dies within 800 units, consume a stack of Dedication Buff to grant the nearest ally 15 extra gold and 40 experience.',
      type: ['farm'],
      },
      {
      name: "Tidal Force",
      unique: true,
      description: 'ou and nearby friendly heroes (within 600 units) receive 20 (+1 per level) HP and 10 (+1 per 2 levels) mana per second.',
      type: ['buff'],
    }]
  },
  {
    id: 63,
    name: "Stream Bracers",
    type: 'support',
    tier: 2,
    cost: 2000,
    folder: 'streambracers',
    effects: [
      {
        type: 'cooldown speed',
        power: .1,
      },
    ],
    passives: [{
      name: "Devotion",
      unique: true,
      description: 'Gain a stack of Dedication Buff every 30 seconds. Stacks up to 2 times. If a unit dies within 800 units, consume a stack of Dedication Buff to grant the nearest ally 15 extra gold and 40 experience.',
      type: ['farm'],
      },
      {
      name: "Tidal Force",
      unique: true,
      description: 'You and nearby friendly heroes (within 600 units) receive 20 (+1 per level) HP and 10 (+1 per 2 levels) mana per second.',
      type: ['buff'],
    }]
  },
  {
    id: 64,
    name: "Essence of the Wind",
    type: 'support',
    tier: 3,
    cost: 2000,
    folder: 'essenceofthewind',
    effects: [
      {
        type: 'armor',
        power: 250,
      },
      {
        type: 'health',
        power: 600
      },
      {
        type: 'movement speed %',
        power: .05
      },
      {
        type: 'hp / sec',
        power: 40
      },
      {
        type: 'mana / sec',
        power: 15
      },
    ],
    passives: [{
        name: "Wage",
        unique: true,
        description: 'Gain 5 gold and experience every 3 seconds if your gold or experience is the lowest on the team.',
        type: ['farm'],
      },
      {
        name: "Distinction",
        unique: true,
        description: 'Gain 30% more gold and experience after a kill or assist',
        type: ['farm'],
      },
      {
        name: "Wind Shield (active)",
        unique: true,
        description: 'Provide nearby hero with the lowest HP a (800 + Hero Level x 80) point shield and 30% movement speed boost for 3 seconds. 45 second cooldown',
        type: ['buff'],
      },
    ]
  },
  {
    id: 65,
    name: "Ring of the Fiend",
    type: 'support',
    tier: 3,
    cost: 2000,
    folder: 'ringofthefiend',
    effects: [
      {
        type: 'ability power',
        power: 90,
      },
      {
        type: 'cooldown speed',
        power: .15
      },
      {
        type: 'movement speed %',
        power: .05
      },
      {
        type: 'mana / sec',
        power: 30
      },
    ],
    passives: [{
      name: "Wage",
      unique: true,
      description: 'Gain 5 gold and experience every 3 seconds if your gold or experience is the lowest on the team.',
      type: ['farm'],
      },
      {
        name: "Distinction",
        unique: true,
        description: 'Gain 30% more gold and experience after a kill or assist',
        type: ['farm'],
      },
      {
        name: "Eye of the Fiend (active)",
        unique: true,
        description: 'Gain vision of the nearest enemy for 4 seconds. Cooldown: 30 seconds.',
        type: ['farm'],
      }]
  },
  {
    id: 66,
    name: "Tidecaller's Mark",
    type: 'support',
    tier: 3,
    cost: 2000,
    folder: 'tidecallersmark',
    effects: [
      {
        type: 'armor',
        power: 200,
      },
      {
        type: 'health',
        power: 600
      },
    ],
    passives: [{
        name: "Devotion",
        unique: true,
        description: 'Gain a stack of Dedication Buff every 30 seconds. Stacks up to 2 times. If a unit dies within 800 units, consume a stack of Dedication Buff to grant the nearest ally 15 extra gold and 40 experience.',
        type: ['farm'],
      },
      {
        name: "Tidal Force",
        unique: true,
        description: 'You and nearby friendly heroes (within 600 units) receive 20 (+1 per level) HP and 10 (+1 per 2 levels) mana per second.',
        type: ['buff'],
      },
      {
        name: "Tidecaller",
        unique: true,
        description: ' Increase damage of nearby allies by 5% and damage reduction by 10%.',
        type: ['buff'],
      }]
  },
  {
    id: 67,
    name: "Purifying Bracers",
    type: 'support',
    tier: 3,
    cost: 2000,
    folder: 'purifyingbracers',
    effects: [
      {
        type: 'hp',
        power: 500,
      },
      {
        type: 'cooldown speed',
        power: .15
      },
    ],
    passives: [{
        name: "Devotion",
        unique: true,
        description: 'Gain a stack of Dedication Buff every 30 seconds. Stacks up to 2 times. If a unit dies within 800 units, consume a stack of Dedication Buff to grant the nearest ally 15 extra gold and 40 experience.',
        type: ['farm'],
      },
      {
        name: "Tidal Force",
        unique: true,
        description: 'You and nearby friendly heroes (within 600 units) receive 20 (+1 per level) HP and 10 (+1 per 2 levels) mana per second.',
        type: ['buff'],
      },
      {
        name: "Purification (active)",
        unique: true,
        description: 'Immediately remove any control effects from a nearby allied hero, and restore 160 + (level x 30) HP and increase their movement speed by 20% for 1 second. The affected hero is immune to slows for the next 2 seconds. 90 second cooldown.',
        type: ['debuff', 'buff'],
      }
    ]
  },
  {
    id: 68,
    name: "Blade of Eternity",
    type: 'attack',
    tier: 3,
    cost: 2400,
    folder: 'bladeofeternity',
    effects: [
      {
        type: 'armor',
        power: 120,
      },
    ],
    passives: [{
        name: "Fighting Spirit",
        unique: true,
        description: 'Increases damage by 10%.',
        type: ['damage'],
      },
      {
        name: "Nirvana",
        unique: true,
        description: 'Revive on the spot 2 seconds after death with 2000 + (100 per hero level) HP. 150s cooldown. (This ability can activate up to two times in a single match)',
        type: ['revive'],
      }
    ]
  },
  {
    id: 69,
    name: "Virtues Necklace",
    type: 'magic',
    tier: 2,
    cost: 720,
    folder: 'virtuesnecklace',
    effects: [
      {
        type: 'ability power',
        power: 160,
      },
      {
        type: 'cooldown speed',
        power: .10,
      },
    ],
    passives: [
      {
        name: "Magic Pierce",
        unique: true,
        description: "Magic Pierce +75",
        type: ['magic pierce']
      },
    ]
  }
]

// NEW SUPPORT ITEMS

export const TALENTS = [
  {
    id: 1,
    name: 'Sprint',
    folder: 'sprint',
    active: true,
  },
  {
    id: 2,
    name: 'Execute',
    folder: 'execute',
    active: true,
  },
  {
    id: 3,
    name: 'Punish',
    folder: 'punish',
    active: true,
  },
  {
    id: 4,
    name: 'Roar',
    folder: 'roar',
    active: true,
  },
  {
    id: 5,
    name: 'Heal',
    folder: 'heal',
    active: true,
  },
  {
    id: 6,
    name: 'Disrupt',
    folder: 'disrupt',
    active: true,
  },
  {
    id: 7,
    name: 'Daze',
    folder: 'daze',
    active: true,
  },
  {
    id: 8,
    name: 'Purify',
    folder: 'purify',
    active: true,
  },
  {
    id: 9,
    name: 'Flicker',
    folder: 'flicker',
    active: true,
  },
  {
    id: 10,
    name: 'Endure',
    folder: 'endure',
    active: false
  },
]

// Categories of items to show
export const ITEM_CATEGORIES = [
  'attack',
  'magic',
  'defense',
  'movement',
  'jungling',
  'support'
]

//
export const ITEM_CAPS = {
  'magic life steal': 1,
  'life steal': 1,
  'cooldown speed': .4,
  'attack damage': null,
  'max hp': null,
  'max mp': null,
  'attack speed': 2, //  200%
  'critical chance': 1, // 100%
  'armor pierce': null, // pierce is a unique effect! Enchanted Kicks magic pierce stacks, but Hecates and Spoopy don't
  'magic pierce': null,
  'movement speed': 800, // not %, but to 800 units/sec
  'movement speed reduction %': 1, // 100% reduction cannot go below 120 units/sec (1/3 base)
  'critical damage': null,
  'ability power': null,
  'armor': null,
  'magic defense': null,
  'resistance': .6 // according to SG (boots and max's liftoff)
}

export function find_item_by_id(id) {
  return ITEMS.find(i => i.id === id)
}

export function find_talent_by_id(id) {
  return TALENTS.find(i => i.id === id)
}
