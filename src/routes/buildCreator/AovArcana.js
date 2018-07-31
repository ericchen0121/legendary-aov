const ARCANA = [
  {
    id: 1,
    name: 'atrocity',
    tier: 3,
    color: 'red',
    types: ['critical chance'],
    effects: [
      {
        type: 'critical chance',
        power_type: 'percentage',
        power: 1.6
      }
    ]

  },
  {
    id: 2,
    name: 'blitz',
    tier: 3,
    color: 'red',
    types: ['attack speed', 'critical chance'],
    effects: [
      {
        type: 'attack speed',
        power_type: 'percentage',
        power: 1.6
      },
      {
        type: 'critical chance',
        power_type: 'percentage',
        power: 0.5
      }
    ]
  },
  {
    id: 3,
    name: 'conjure',
    tier: 3,
    color: 'red',
    types: ['attack'],
    effects: [
      {
        type: 'ability power',
        power: 4.2
      },
      {
        type: 'attack speed',
        power_type: 'percentage',
        power: 0.6
      }
    ]
  },
  {
    id: 4,
    name: 'enlightened',
    tier: 3,
    color: 'red',
    types: ['attack'],
    effects: [
      {
        type: 'ability power',
        power: 5.3
      }
    ]
  },
  {
    id: 5,
    name: 'indomitable',
    tier: 3,
    color: 'red',
    types: ['hp', 'defense', 'attack speed'],
    effects: [
      {
        type: 'attack speed',
        power_type: 'percentage',
        power: 1
      },
      {
        type: 'max hp',
        power: 33.7
      },
      {
        type: 'armor',
        power: 2.3
      }
    ]
  },
  {
    id: 6,
    name: 'obliterate',
    tier: 3,
    color: 'red',
    types: ['attack'],
    effects: [
      {
        type: 'attack damage',
        power: 3.2
      }
    ]
  },
  {
    id: 7,
    name: 'rampage',
    tier: 3,
    color: 'red',
    types: ['critical chance'],
    effects: [
      {
        type: 'critical chance',
        power_type: 'percentage',
        power: 0.7
      },
      {
        type: 'critical damage',
        power_type: 'percentage',
        power: 3.6
      }
    ]
  },
  {
    id: 8,
    name: 'violate',
    tier: 3,
    color: 'red',
    types: ['attack', 'piercing'],
    effects: [
      {
        type: 'ability power',
        power: 4.2
      },
      {
        type: 'magic pierce',
        power: 2.4
      }
    ]
  },
  {
    id: 9,
    name: 'assassinate',
    tier: 3,
    color: 'purple',
    types: ['attack', 'ability'],
    effects: [
      {
        type: 'attack damage',
        power: 1.6
      },
      {
        type: 'movement speed',
        power_type: 'percentage',
        power: 1
      }
    ]
  },
  {
    id: 10,
    name: 'benevolence',
    tier: 3,
    color: 'purple',
    types: ['hp', 'ability'],
    effects: [
      {
        type: 'max hp',
        power: 45
      },
      {
        type: 'hp / 5 sec',
        power: 5.2
      },
      {
        type: 'movement speed',
        type: 'percentage',
        power: 0.4
      }
    ]
  },
  {
    id: 11,
    name: 'colossus',
    tier: 3,
    color: 'purple',
    types: ['hp'],
    effects: [
      {
        type: 'max hp',
        power: 75
      }
    ]
  },

  {
    id: 12,
    name: 'devour',
    tier: 3,
    color: 'purple',
    types: ['attack', 'life steal'],
    effects: [
      {
        type: 'ability power',
        power: 2.4
      },
      {
        type: 'magic life steal',
        power_type: 'percentage',
        power: 1
      }
    ]
  },
  {
    id: 13,
    name: 'guerrilla',
    tier: 3,
    color: 'purple',
    types: ['ability', 'attack speed'],
    effects: [
      {
        type: 'attack speed',
        power_type: 'percentage',
        power: 1
      },
      {
        type: 'movement speed',
        power_type: 'percentage',
        power: 1
      }
    ]
  },
  {
    id: 14,
    name: 'sap',
    tier: 3,
    color: 'purple',
    types: ['life steal'],
    effects: [
      {
        type: 'magic life steal',
        power_type: 'percentage',
        power: 1.6
      }
    ]
  },
  {
    id: 15,
    name: 'consume',
    tier: 3,
    color: 'green',
    types: ['defense', 'life steal'],
    effects: [
      {
        type: 'magic life steal',
        power_type: 'percentage',
        power: 0.7
      },
      {
        type: 'armor',
        power: 5.9
      }
    ]
  },
  {
    id: 16,
    name: 'flurry',
    tier: 3,
    color: 'green',
    types: ['attack speed', 'piercing'],
    effects: [
      {
        type: 'attack speed',
        power_type: 'percentage',
        power: 0.6
      },
      {
        type: 'magic pierce',
        power: 6.4
      }
    ]
  },
  {
    id: 17,
    name: 'focus',
    tier: 3,
    color: 'green',
    types: ['ability'],
    effects: [
      {
        type: 'cooldown speed',
        power_type: 'percentage',
        power: 1
      }
    ]
  },
  {
    id: 18,
    name: 'hex',
    tier: 3,
    color: 'green',
    types: ['attack', 'ability'],
    effects: [
      {
        type: 'ability power',
        power: 2.4
      },
      {
        type: 'cooldown speed',
        power_type: 'percentage',
        power: 0.7
      }
    ]
  },
  {
    id: 19,
    name: 'skewer',
    tier: 3,
    color: 'green',
    types: ['attack', 'piercing'],
    effects: [
      {
        type: 'attack damage',
        power: 0.9
      },
      {
        type: 'armor pierce',
        power: 6.4
      }
    ]
  },
  {
    id: 20,
    name: 'valiance',
    tier: 3,
    color: 'green',
    types: ['hp', 'ability'],
    effects: [
      {
        type: 'max hp',
        power: 37.5
      },
      {
        type: 'cooldown speed',
        power_type: 'percentage',
        power: 0.6
      }
    ]
  },
  {
    id: 21,
    name: 'onslaught',
    tier: 3,
    color: 'red',
    types: ['attack', 'piercing'],
    effects: [
      {
        type: 'attack damage',
        power: 2
      },
      {
        type: 'armor pierce',
        power: 3.6
      }
    ]
  },
  {
    id: 22,
    name: 'bloodlust',
    tier: 3,
    color: 'red',
    types: ['attack', 'life steal'],
    effects: [
      {
        type: 'attack damage',
        power: 2.5
      },
      {
        type: 'life steal',
        power_type: 'percentage',
        power: .5 // +0.5%
      }
    ]
  },
  {
    id: 23,
    name: 'tyrant',
    tier: 3,
    color: 'purple',
    types: ['hp', 'critical chance'],
    effects: [
      {
        type: 'critical chance',
        power_type: 'percentage',
        power: 0.5
      },
      {
        type: 'max hp',
        power: 60
      }
    ]
  },
  {
    id: 24,
    name: 'undying',
    tier: 3,
    color: 'purple',
    types: ['hp'],
    effects: [
      {
        type: 'max hp',
        power: 60
      },
      {
        type: 'hp / 5 sec',
        power: 4.5
      }
    ]
  },
  {
    id: 25,
    name: 'feast',
    tier: 3,
    color: 'purple',
    types: ['defense', 'life steal'],
    effects: [
      {
        type: 'life steal',
        power_type: 'percentage',
        power: 1
      },
      {
        type: 'magic defense',
        power: 4.1
      }
    ]
  },
  {
    id: 26,
    name: 'bastion',
    tier: 3,
    color: 'green',
    types: ['defense'],
    effects: [
      {
        type: 'armor',
        power: 9
      }
    ]
  },
  {
    id: 27,
    name: 'mythril',
    tier: 3,
    color: 'green',
    types: ['defense'],
    effects: [
      {
        type: 'armor',
        power: 5
      },
      {
        type: 'magic defense',
        power: 5
      }
    ]
  },
  {
    id: 28,
    name: 'prowess',
    tier: 3,
    color: 'green',
    types: ['defense'],
    effects: [
      {
        type: 'magic defense',
        power: 9
      }
    ]
  },
  {
    id: 29,
    name: 'crusader',
    tier: 3,
    color: 'green',
    types: ['defense', 'ability'],
    effects: [
      {
        type: 'armor',
        power: 2.7
      },
      {
        type: 'magic defense',
        power: 2.7
      },
      {
        type: 'cooldown speed',
        power_type: 'percentage',
        power: 0.6
      }
    ]
  },
  {
    id: 30,
    name: 'reave',
    tier: 3,
    color: 'purple',
    types: ['life steal'],
    effects: [
      {
        type: 'life steal',
        power_type: 'percentage',
        power: 1.6
      }
    ]
  },
]

export const CLASS_ARCANA = [
  {
    class: 'mage',
    arcana: [
      {
      arcana_id: 8,
      count: 10
      },
      {
        arcana_id: 13,
        count: 10
      },
      {
        arcana_id: 19,
        count: 10
      }
    ]
  },
  {
    class: 'mage',
    arcana: [
      {
      arcana_id: 8,
      count: 10
      },
      {
        arcana_id: 12,
        count: 10
      },
      {
        arcana_id: 16,
        count: 10
      }
    ]
  },
  {
    class: 'jungle',
    arcana: [
      {
      arcana_id: 21,
      count: 10
      },
      {
        arcana_id: 13,
        count: 10
      },
      {
        arcana_id: 19,
        count: 10
      }
    ]
  },
  {
    class: 'tank',
    arcana: [
      {
      arcana_id: 6,
      count: 10
      },
      {
        arcana_id: 9,
        count: 10
      },
      {
        arcana_id: 20,
        count: 10
      }
    ]
  },
  {
    class: 'support',
    arcana: [
      {
      arcana_id: 8,
      count: 10
      },
      {
        arcana_id: 10,
        count: 10
      },
      {
        arcana_id: 20,
        count: 10
      }
    ]
  },
  {
    class: 'warrior',
    arcana: [
      {
      arcana_id: 21,
      count: 10
      },
      {
        arcana_id: 9,
        count: 10
      },
      {
        arcana_id: 19,
        count: 10
      }
    ]
  },
  {
    class: 'marksman',
    arcana: [
      {
      arcana_id: 1,
      count: 10
      },
      {
        arcana_id: 13,
        count: 10
      },
      {
        arcana_id: 19,
        count: 10
      }
    ]
  },
]

export const ARCANA_PERCENTAGE_TYPES = [
  'critical chance',
  'attack speed',
  'critical damage',
  'movement speed',
  'magic life steal',
  'cooldown speed',
  'life steal'
]

function get_arcana_count_by_key(list, key) { // returns { 'value': 1, 'value2': 2, 'value3': 2}
  return list.reduce((prev, curr) => {
    let count = prev.get(curr.color) || 0
    prev.set(curr.color, count + 1)
    return prev
  }, new Map())
}


export function find_arcana_by_id(id) {
  return ARCANA.find(a => a.id === id)
}

export function get_avg_arcana_counts(current_arcana) {
  let all_arcana = []
  let all_arcana_avg_counts = []
  for (let id of current_arcana) {
    let arcana = find_arcana_by_id(id)
    all_arcana.push(arcana)
  }

  // Calculate the total effects power of each arcana, given an assumption of AVG count over 10 arcana

  let color_counts = get_arcana_count_by_key(all_arcana, 'color')
  let get_count = (color) => color_counts.get(color)


  for (let a of all_arcana) {
    let avg_arcana_count_for_build = 10/get_count(a.color)
    a['avg_count'] = avg_arcana_count_for_build
    all_arcana_avg_counts.push(a)
  }
  return all_arcana_avg_counts
}

export function get_all_arcana_effects(current_arcana) {
  let all_effects = []
  let all_arcana = []
  for (let id of current_arcana) {
    let arcana = find_arcana_by_id(id)
    all_arcana.push(arcana)
  }

  // Calculate the total effects power of each arcana, given an assumption of AVG count over 10 arcana

  let color_counts = get_arcana_count_by_key(all_arcana, 'color')
  let get_count = (color) => color_counts.get(color)


  for (let a of all_arcana) {
    // 1. Calculates the avg number of a given color of arcana based on color
    let avg_arcana_count_for_build = 10/get_count(a.color)

    // 2. Multiples this count with the power
    a.effects.map((e,i) => {
      a.effects[i]['total_effect'] = avg_arcana_count_for_build * e.power
    })

    all_effects.push(...a.effects)
  }

  // Create a map of all unique effects, and the combined power
  // Create Map, and reduce https://stackoverflow.com/questions/19233283/sum-javascript-object-propertya-values-with-same-object-propertyb-in-array-of-ob
  let all_effects_map = all_effects.reduce((prev, curr) => {
    let count = prev.get(curr.type) || 0;
    prev.set(curr.type, curr.total_effect + count) // averages arcana count over number of colored arcana
    return prev;
  }, new Map());

  // then, map your counts object back to an array
  let all_effects_counts = [...all_effects_map].map(([type, power]) => {
    return {type, power}
  })

  return all_effects_counts
}

export default ARCANA
