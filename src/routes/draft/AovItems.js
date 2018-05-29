// From CBS.com NFL Draft page
// copied table into TSV -> JSON converter
 //
const ITEMS = [
  {
    name: 'Spear of Longinus',
    type: 'attack',
    tier: 3,
    cost: 2060,
    effects: [
      {
        type: 'attack damage',
        power: 80
      },
      {
        type: 'cooldown speed',
        power: .15
      },
      {
        type: 'armor',
        power: 150
      },
    ],
    passives: [{
      name: 'Shatter',
      description: 'Decreases target armor by 50 on hit for 5 seconds. Stacks up to 5 times.',
      type: ['strip']
    }],
  },
  {
    name: "Fafnir's Talon",
    type: 'attack',
    tier: 3,
    cost: 2040,
    effects: [
      {
        type: 'attack damage',
        power: 60
      },
      {
        type: 'attack speed',
        power: .30
      },
      {
        type: 'life steal',
        power: .1
      },
    ],
    passives: [{
      name: "Dragon's Breath",
      description: 'Normal attacks deal additional damage equal to 8% of target’s current HP.',
      type: ['attack damage']
    }]
  },
  {
    name: "Claves Sancti",
    type: 'attack',
    tier: 3,
    cost: 2250,
    effects: [
      {
        type: 'attack damage',
        power: 100
      },
      {
        type: 'critical chance',
        power: .3
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
    name: "Muramasa",
    type: 'attack',
    tier: 3,
    cost: 1980,
    effects: [
      {
        type: 'attack damage',
        power: 70
      },
      {
        type: 'cooldown speed',
        power: .10
      },
      {
        type: 'armor pierce',
        power: .4
      },
    ],
    passives: [{
      name: "Armor Pierce",
      description: '+40%',
      type: ['armor pierce']
    }]
  },
  {
    name: "The Beast",
    type: 'attack',
    tier: 3,
    cost: 1740,
    effects: [
      {
        type: 'attack damage',
        power: 100
      },
      {
        type: 'life steal',
        power: .25
      },
    ],
    passives: []
  },
  {
    name: "Omni Arms",
    type: 'attack',
    tier: 3,
    cost: 2150,
    effects: [
      {
        type: 'attack damage',
        power: 70
      },
      {
        type: 'attack speed',
        power: .15
      },
      {
        type: 'life steal',
        power: .1
      },
      {
        type: 'cooldown speed',
        power: .1
      },
      {
        type: 'max hp',
        power: 500
      },
    ],
    passives: [{
      name: "Elemental Power",
      description: 'After using an ability, the net normal attack within 5 seconds deals 100% more physical damage. 2-second cooldown.',
      type: ['attack damage']
    }]
  },
  {
    name: "Slikk's Sting",
    type: 'attack',
    tier: 3,
    cost: 2050,
    effects: [
      {
        type: 'attack speed',
        power: .30
      },
      {
        type: 'cricial chance',
        power: .2
      },
      {
        type: 'movement speed',
        power: .05
      },
      {
        type: 'critical damage',
        power: .5
      },
    ],
    passives: [{
      name: "Hurricane",
      description: 'Increase critical damage by 50%.',
      type: ['critical damage']
    }]
  },
  {
    name: "Fenrir's Tooth",
    type: 'attack',
    tier: 3,
    cost: 2950,
    effects: [
      {
        type: 'attack damage',
        power: 200
      },
    ],
    passives: [{
      name: "Fenrir's Tooth",
      description: "Inreases all damage dealt by 30% when the target's HP is below 50%",
      type: ['attack damage']
    }]
  },
  {
    name: "Blitz Blade",
    type: 'attack',
    tier: 3,
    cost: 2020,
    effects: [
      {
        type: 'attack damage',
        power: 60
      },
      {
        type: 'attack speed',
        power: .30
      },
      {
        type: 'life steal',
        power: .1
      },
      {
        type: 'movement speed',
        power: .05
      },
    ],
    passives: [{
      name: "Chain Lightning",
      description: ' Every 8 seconds, the next normal attack triggers a chain lightning that deals 150 (+20% attack damage) physical damage. Each normal attack also carries Life Steal and reduces cooldown by 1 second on hit.',
      type: ['attack damage', 'life steal', 'cooldown speed']
    }]
  },
  {
    name: "Devil's Handshake",
    type: 'attack',
    tier: 3,
    cost: 2070,
    effects: [
      {
        type: 'attack speed',
        power: .30
      },
      {
        type: 'critical chance',
        power: .20
      },
      {
        type: 'movement speed',
        power: .05
      },
    ],
    passives: [{
      name: "Flame Wrath",
      description: 'Normal attacks increase attack speed by 10% for 2 seconds. Stacks up to 5 times.',
      type: ['attack speed']
    }]
  },
  {
    name: "Rankbreaker",
    type: 'attack',
    tier: 3,
    cost: 2020,
    effects: [
      {
        type: 'attack damage',
        power: 110
      },
      {
        type: 'attack speed',
        power: .30
      },
      {
        type: 'life steal',
        power: .1
      },
      {
        type: 'movement speed',
        power: .05
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
    name: "Boomstick",
    type: 'magic',
    tier: 3,
    cost: 2000,
    effects: [
      {
        type: 'ability power',
        power: 240
      },
    ],
    passives: [{
      name: "Explosion",
      description: 'Ability hits trigger a small-area explosion that deals 50 (+50% ability power) magic damage. 5-second cooldown.',
      type: ['magic damage']
    }]
  },
  {
    name: "Hecate's Diadem",
    type: 'magic',
    tier: 3,
    cost: 2300,
    effects: [
      {
        type: 'attack damage',
        power: 200
      },
      {
        type: 'ability power',
        power: .35
      },
      {
        type: 'magic pierce',
        power: .75
      }
    ],
    passives: [{
      name: "Warlock",
      description: 'Ability Power +35%',
      type: ['ability power']
    },
    {
      name: "Magic Pierce",
      description: '+75',
      type: ['magic pierce']
    }]
  },
  {
    name: "Orb of the Magi",
    type: 'magic',
    tier: 3,
    cost: 2010,
    effects: [
      {
        type: 'ability power',
        power: 110
      },
      {
        type: 'cooldown speed',
        power: .1
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
    name: "Rhea's Blessing",
    type: 'magic',
    tier: 3,
    cost: 2220,
    effects: [
      {
        type: 'ability power',
        power: 140
      },
      {
        type: 'cooldown speed',
        power: .10
      },
      {
        type: 'magic life steal',
        power: .25
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
      type: ['magic life steal', 'life steal']
    },
    ]
  },
  {
    name: "Zweihander",
    type: 'magic',
    tier: 3,
    cost: 1970,
    effects: [
      {
        type: 'ability power',
        power: 180
      },
      {
        type: 'max mana',
        power: 400
      },
      {
        type: 'movement speed',
        power: .08
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
    name: "Frosty's Revenge",
    type: 'magic',
    tier: 3,
    cost: 1780,
    effects: [
      {
        type: 'ability power',
        power: 140
      },
      {
        type: 'magic defense',
        power: 220
      },
      {
        type: 'movement speed',
        power: .07
      },
    ],
    passives: [{
      name: "Chill",
      description: 'Abilities that deal damage will also reduce enemy movement speed by 25% for 2 seconds.',
      type: ['slow']
    }]
  },
  {
    name: "Berith's Agony",
    type: 'magic',
    tier: 3,
    cost: 2160,
    effects: [
      {
        type: 'ability power',
        power: 140
      },
      {
        type: 'cooldown speed',
        power: .10
      },
      {
        type: 'armor',
        power: 270
      },
    ],
    passives: [{
      name: "Torture",
      description: 'Deals magic damage equal to 4% of the target’s current HP (up to 80 against monsters). 1.2-second cooldown.',
      type: ['magic damage']
    }]
  },
  {
    name: "Apocalypse",
    type: 'magic',
    tier: 3,
    cost: 2190,
    effects: [
      {
        type: 'ability power',
        power: 200
      },
      {
        type: 'cooldown speed',
        power: .10
      },
    ],
    passives: [{
      name: "Elemental Power",
      description: 'After using an ability, the next normal attack deals additional magic damage equal to 30% of attack damage (+80% ability power). 2-second cooldown.',
      type: ['magic damage']
    }]
  },
  {
    name: "Soaring Aura",
    type: 'magic',
    tier: 3,
    cost: 2020,
    effects: [
      {
        type: 'ability power',
        power: 140
      },
      {
        type: 'max hp',
        power: 1050
      },
    ],
    passives: [{
      name: "Protection",
      description: 'Reduces magic defense of enemies within 800 units by 75(+5 per level).',
      type: ['strip']
    }]
  },
  {
    name: "Holy of Holies",
    type: 'magic',
    tier: 3,
    cost: 2020,
    effects: [
      {
        type: 'ability power',
        power: 400
      },
      {
        type: 'max hp',
        power: 1400
      },
    ],
    passives: [{
      name: "Enlightenment",
      description: 'Increases maximum HP by 1400',
      type: ['max hp']
    }]
  },
  {
    name: "Mantle of Ra",
    type: 'defense',
    tier: 3,
    cost: 1950,
    effects: [
      {
        type: 'attack damage',
        power: 80
      },
      {
        type: 'armor',
        power: 330
      },
    ],
    passives: [{
      name: "Burn",
      description: 'Deals 100 (+4 per level) magic damage to nearby enemies (150 units) every second.',
      type: ['magic damage']
    }]
  },
  {
    name: "Shield of the Lost",
    type: 'defense',
    tier: 3,
    cost: 2100,
    effects: [
      {
        type: 'armor',
        power: 360
      },
      {
        type: 'max hp',
        power: 1200
      },
    ],
    passives: [{
      name: "Spirit Bond",
      description: 'Reduces the attack speed of nearby enemies (200 units) by 30%',
      type: ['strip']
    }]
  },
  {
    name: "The Aegis",
    type: 'defense',
    tier: 3,
    cost: 2180,
    effects: [
      {
        type: 'cooldown speed',
        power: .20
      },
      {
        type: 'max mana',
        power: 400
      },
      {
        type: 'armor',
        power: 360
      },
    ],
    passives: [{
      name: "Spirit Bond",
      description: 'When taking damage, reduces the attacker’s attack speed by 30% and movement speed by 15% for 3 seconds.',
      type: ['strip', 'slow']
    }]
  },
  {
    name: "Gaia's Standard",
    type: 'defense',
    tier: 3,
    cost: 1960,
    effects: [
      {
        type: 'magic defense',
        power: 180
      },
      {
        type: 'max hp',
        power: 1100
      },
      {
        type: 'movement speed',
        power: .05
      },
    ],
    passives: [{
      name: "Regenerate",
      description: 'When taking damage, restores 8% HP over 2 seconds. 10-second cooldown.',
      type: ['healing']
    }]
  },
  {
    name: "Medallion of Troy",
    type: 'defense',
    tier: 3,
    cost: 2220,
    effects: [
      {
        type: 'cooldown speed',
        power: .1
      },
      {
        type: 'magic defense',
        power: 360
      },
      {
        type: 'max hp',
        power: 1000
      },
    ],
    passives: [{
      name: "Blessed",
      description: 'Gains a shield that absorbs 300(+50 per level) magic damage every 18 seconds.',
      type: ['shield']
    }]
  },
  {
    name: "Crimson Banner",
    type: 'defense',
    tier: 3,
    cost: 2090,
    effects: [
      {
        type: 'armor',
        power: 200
      },
      {
        type: 'max hp',
        power: 1500
      },
    ],
    passives: [{
      name: "Bloody Battle",
      description: 'Restores 20% HP over 5 seconds after earning a kill or assist. 10-second cooldown.',
      type: ['healing']
    }]
  },
  {
    name: "Hyoga's Edge",
    type: 'defense',
    tier: 3,
    cost: 1950,
    effects: [
      {
        type: 'armor',
        power: 100
      },
      {
        type: 'magic defense',
        power: 100
      },
      {
        type: 'max hp',
        power: 1200
      },
    ],
    passives: [{
      name: "Biting Cold",
      description: 'Normal attacks increase the wearer’s movement speed by 10% and reduce target’s movement speed by 25% for 2 seconds.',
      type: ['movement, slow']
    }]
  },
  {
    name: "Ancestral Glory",
    type: 'defense',
    tier: 3,
    cost: 1950,
    effects: [
      {
        type: 'max hp',
        power: 1000
      },
    ],
    passives: [{
      name: "Resurrect",
      description: 'Revives wearer 3 seconds after death with 40% HP. 3-minute cooldown.',
      type: ['revive']
    }]
  },
  {
    name: "Frost Cape",
    type: 'defense',
    tier: 3,
    cost: 2000,
    effects: [
      {
        type: 'cooldown speed',
        power: .1
      },
      {
        type: 'armor',
        power: 250
      },
      {
        type: 'max hp',
        power: 800
      },
    ],
    passives: [{
      name: "Elemental Power",
      description: 'After using an ability, the next normal attack reduces movement speed by 30% and deals 150 physical damage (20 additional damage for each level gained) to an area. 3-second cooldown.',
      type: ['slow', 'attack damage']
    }]
  },
  {
    name: "Amulet of Longevity",
    type: 'defense',
    tier: 3,
    cost: 2680,
    effects: [
      {
        type: 'max hp',
        power: 1700
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
    name: "Sonic Boots",
    type: 'movement',
    tier: 3,
    cost: 700,
    effects: [
      {
        type: 'armor',
        power: 110
      },
      {
        type: 'movement speed',
        power: 60
      },
    ],
    passives: [{
      name: "",
      description: 'Reduces attack damage taken by 15%',
      type: ['reduce damage']
    }]
  },
  {
    name: "Gilded Greaves",
    type: 'movement',
    tier: 3,
    cost: 690,
    effects: [
      {
        type: 'magic defense',
        power: 110
      },
      {
        type: 'movement speed',
        power: 60
      },
      {
        type: 'resistance',
        power: .35
      },
    ],
    passives: [{
      name: "",
      description: 'Resistance +35%',
      type: ['reduce slows']
    }]
  },
  {
    name: "Flashy Boots",
    type: 'movement',
    tier: 3,
    cost: 760,
    effects: [
      {
        type: 'cooldown speed',
        power: .1
      },
      {
        type: 'movement speed',
        power: 60
      },
    ],
    passives: []
  },
  {
    name: "Enchanted Kicks",
    type: 'movement',
    tier: 3,
    cost: 790,
    effects: [
      {
        type: 'Magic Pierce',
        power: 75
      },
      {
        type: 'movement speed',
        power: 60
      },
    ],
    passives: [{
      name: "",
      description: 'Magic Pierce +75',
      type: ['reduce damage']
    }]
  },
  {
    name: "War Boots",
    type: 'movement',
    tier: 3,
    cost: 660,
    effects: [
      {
        type: 'attack speed',
        power: .25
      },
      {
        type: 'movement speed',
        power: 60
      },
    ],
    passives: []
  },
  {
    name: "Loki's Curse",
    type: 'jungling',
    tier: 3,
    cost: 1750,
    effects: [
      {
        type: 'ability power',
        power: 150
      },
      {
        type: 'max hp',
        power: 400
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
    name: "Leviathan",
    type: 'jungling',
    tier: 3,
    cost: 1750,
    effects: [
      {
        type: 'armor',
        power: 120
      },
      {
        type: 'max hp',
        power: 800
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
    name: "Soulreaver",
    type: 'jungling',
    tier: 3,
    cost: 1750,
    effects: [
      {
        type: 'attack damage',
        power: 90
      },
      {
        type: 'cooldown speed',
        power: .15
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
    name: "Scorching Wind",
    type: 'jungling',
    tier: 3,
    cost: 1750,
    effects: [
      {
        type: 'attack damage',
        power: 15
      },
      {
        type: 'attack speed',
        power: .2
      },
      {
        type: 'life steal',
        power: .1
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
]

export default ITEMS
