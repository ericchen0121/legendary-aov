// From CBS.com NFL Draft page
// copied table into TSV -> JSON converter
 //
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
        type: 'life steal %',
        power: 0.1,
      },
    ],
    passives: [{
      name: "Dragon's Breath",
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
        power: 100,
      },
      {
        type: 'critical chance',
        power: 0.3,
      }
    ],
    passives: [
      {
        name: "Gift of the Swift",
        description: "After dealing a critical hit, movement speed increases by 3 per hero's level. Lasts for 1.5 seconds (only effective when using a ranged hero).",
        type: ['movement speed']
      },
      {
        name: 'Critical Chance',
        description: '+30%',
        type: ['critical chance']
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
        power: 70,
      },
      {
        type: 'cooldown speed',
        power: 0.10,
      },
      {
        type: 'armor pierce',
        power: 0.4,
      },
    ],
    passives: [{
      name: "Armor Pierce",
      description: '+40%',
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
        type: 'life steal %',
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
        type: 'life steal %',
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
      description: 'After using an ability, the next normal attack within 5 seconds deals 100% more physical damage. 2-second cooldown.',
      type: ['attack damage']
    }]
  },
  {
    id: 7,
    name: "Slikk's Sting",
    type: 'attack',
    tier: 3,
    cost: 2050,
    folder: 'slikkssting',
    effects: [
      {
        type: 'attack speed',
        power: 0.30,
      },
      {
        type: 'critical chance',
        power: 0.2,
      },
      {
        type: 'movement speed %',
        power: 0.05,
      },
      {
        type: 'critical damage',
        power: 0.5,
      },
    ],
    passives: [{
      name: "Hurricane",
      description: 'Increase critical damage by 50%.',
      type: ['critical damage']
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
      description: "Inreases all damage dealt by 30% when the target's HP is below 50%",
      type: ['attack damage']
    }]
  },
  {
    id: 9,
    name: "Blitz Blade",
    type: 'attack',
    tier: 3,
    cost: 2020,
    folder: 'blitzblade',
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
        type: 'life steal %',
        power: 0.1,
      },
      {
        type: 'movement speed %',
        power: 0.05,
      },
    ],
    passives: [{
      name: "Chain Lightning",
      description: ' Every 8 seconds, the next normal attack triggers a chain lightning that deals 150 (+20% attack damage) physical damage. Each normal attack also carries Life Steal and reduces cooldown by 1 second on hit.',
      type: ['attack damage', 'life steal %', 'cooldown speed']
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
      description: 'Increases movement speed by 10% after exiting battle.',
      type: ['exit movement speed']
    },
    {
      name: "Break",
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
        power: 110,
      },
      {
        type: 'cooldown speed',
        power: 0.1,
      },
    ],
    passives: [{
      name: "Bide",
      description: 'Gains 12 ability power and 110 HP every 30 seconds. Stacks up to 10 times.',
      type: ['ability power']
    },
    {
      name: "From the Ashes",
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
      description: 'Gains a shield that absorbs 450(+50 per level)(+40% ability power) damage when HP falls below 40%. The shield lasts 4 seconds and has a 75-second cooldown.',
      type: ['shield']
    },
    {
      name: "Magic Life Steal",
      description: '+25%',
      type: ['magic life steal', 'life steal %']
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
      description: 'Normal attack hits increase attack speed by 50% for 4 seconds. 10-second cooldown.',
      type: ['attack speed']
    },
    {
      name: "Twilight",
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
      description: 'Deals magic damage equal to 4% of the target’s current HP (up to 80 against monsters). 1.2-second cooldown.',
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
        power: 180,
      },
      {
        type: 'max hp',
        power: 1100,
      },
      {
        type: 'movement speed %',
        power: 0.05,
      },
    ],
    passives: [{
      name: "Regenerate",
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
    effects: [
      {
        type: 'max hp',
        power: 1000,
      },
    ],
    passives: [{
      name: "Resurrect",
      description: 'Revives wearer 3 seconds after death with 40% HP. 3-minute cooldown.',
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
      name: "Burn",
      description: 'Deals 100 (+4 per level) magic damage to nearby enemies every second.',
      type: ['magic damage']
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
      name: "",
      description: 'Reduces attack damage taken by 15%',
      type: ['reduce damage']
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
      name: "Resistance",
      description: '+35%',
      type: ['reduce slows']
    }]
  },
  {
    id: 34,
    name: "Flashy Boots",
    type: 'movement',
    tier: 2,
    cost: 760,
    folder: 'flashyboots',
    effects: [
      {
        type: 'cooldown speed',
        power: 0.1,
      },
      {
        type: 'movement speed',
        power: 60,
      },
    ],
    passives: []
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
    passives: []
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
      description: 'After using an ability, the next normal attack deals additional damage equal to 35% attack damage (+45% ability power). 2-second cooldown.',
      type: ['attack damage', 'ability power']
    },
    {
      name: "Hunter",
      description: 'Deals 30% extra damage to monsters and receives 30% more experience from killing monsters.',
      type: ['monster attack damage', 'monster experience']
    },
    {
      name: "Seek and Destroy",
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
        description: 'Deals 90 (+5 per level) magic damage to nearby enemies every second.',
        type: ['magic damage']
      },
      {
        name: "Hunter",
        description: 'Deals 30% extra damage to monsters and receives 30% more experience from killing monsters.',
        type: ['monster attack damage', 'monster experience']
      },
      {
        name: "Wild",
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
        description: 'Deals 30% extra damage to monsters and receives 30% more experience from killing monsters.',
        type: ['monster attack damage', 'monster experience']
      },
      {
        name: "Wild",
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
        type: 'life steal %',
        power: 0.1,
      },
    ],
    passives: [
      {
        name: "Fire Storm",
        description: 'Normal attacks place a mark on the target, dealing (18 + levelx0.5) magic damage each stack (ranged attacks deal 75% of the damage), up to 6 stacks.',
        type: ['magic damage']
      },
      {
        name: "Hunter",
        description: 'Deals 30% extra damage to monsters and receives 30% more experience from killing monsters.',
        type: ['monster attack damage', 'monster experience']
      },
      {
        name: "Wild",
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
    cost: 2300,
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
        type: 'life steal %',
        power: .1,
      },
    ],
    passives: [
      {
        name: "Blood Thirst",
        description: 'Increases Life Steal by 90% fo 3 seconds. 60-second cooldown. Only usable by ranged heroes.',
        type: ['life steal %']
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
        type: 'magic life steal %',
        power: .15,
      },
    ],
    passives: [
      {
        name: "Magic Life Steal",
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
    cost: 1020,
    folder: 'virtuesbracelet',
    effects: [
      {
        type: 'ability power',
        power: 60,
      },
      {
        type: 'cooldown speed',
        power: .1,
      },
      {
        type: 'mana',
        power: '+20/5 sec',
      }
    ],
    passives: [
      {
        name: "Soaring Spirit",
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
    }]
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
    passives: []
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
]

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

export const ITEM_CATEGORIES  = [
  'attack',
  'magic',
  'defense',
  'movement',
  'jungling'
]

export function find_item_by_id(id) {
  return ITEMS.find(i => i.id === id)
}

export function find_talent_by_id(id) {
  return TALENTS.find(i => i.id === id)
}
