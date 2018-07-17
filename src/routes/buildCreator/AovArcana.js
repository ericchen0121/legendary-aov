const ARCANA = [
  {
    id: 1,
    name: 'atrocity',
    tier: 3,
    color: 'red'
  },
  {
    id: 2,
    name: 'blitz',
    tier: 3,
    color: 'red'
  },
  {
    id: 3,
    name: 'conjure',
    tier: 3,
    color: 'red'
  },
  {
    id: 4,
    name: 'enlightened',
    tier: 3,
    color: 'red'
  },
  {
    id: 5,
    name: 'indomitable',
    tier: 3,
    color: 'red'
  },
  {
    id: 6,
    name: 'obliterate',
    tier: 3,
    color: 'red'
  },
  {
    id: 7,
    name: 'rampage',
    tier: 3,
    color: 'red'
  },
  {
    id: 8,
    name: 'violate',
    tier: 3,
    color: 'red'
  },
  {
    id: 9,
    name: 'assassinate',
    tier: 3,
    color: 'purple'
  },
  {
    id: 10,
    name: 'benevolence',
    tier: 3,
    color: 'purple'
  },
  {
    id: 11,
    name: 'colossus',
    tier: 3,
    color: 'purple'
  },

  {
    id: 12,
    name: 'devour',
    tier: 3,
    color: 'purple'
  },
  {
    id: 13,
    name: 'guerrilla',
    tier: 3,
    color: 'purple'
  },
  {
    id: 14,
    name: 'sap',
    tier: 3,
    color: 'purple'
  },
  {
    id: 15,
    name: 'consume',
    tier: 3,
    color: 'green'
  },
  {
    id: 16,
    name: 'flurry',
    tier: 3,
    color: 'green'
  },
  {
    id: 17,
    name: 'focus',
    tier: 3,
    color: 'green'
  },
  {
    id: 18,
    name: 'hex',
    tier: 3,
    color: 'green'
  },
  {
    id: 19,
    name: 'skewer',
    tier: 3,
    color: 'green'
  },
  {
    id: 20,
    name: 'valiance',
    tier: 3,
    color: 'green'
  },
  {
    id: 21,
    name: 'onslaught',
    tier: 3,
    color: 'red'
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


export default ARCANA
export function find_arcana_by_id(id) {
  return ARCANA.find(a => a.id === id)
}
