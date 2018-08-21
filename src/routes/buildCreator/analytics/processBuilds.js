import {ITEMS} from '../Items'

export default function analyze_builds(builds) {
  if(builds) {
    let count = builds.length || 0
    let item_counts = ITEMS

    // just a bucket of all items
    let all_items = []
    for(let b of builds){
      all_items.push(b.item_1, b.item_2, b.item_3, b.item_4, b.item_5, b.item_6)
    }

    // get counts in this format -- { item_id: count, ...}
    let all_item_counts = all_items.reduce(
      (totals, i) => ({ ...totals, [i]: (totals[i] || 0 ) + 1 }),
      {}
    )

    // get counts in this format -- { type: count, ...}
    let all_type_counts = all_items.reduce(
        (totals, i) => {
          let item = ITEMS.find(item => item.id === i)
          return {
            ...totals,
            [item.type]: (totals[item.type] || 0) + 1
          }
        },
        {}
    )

    // get format items into:
    // {
    //   magic: {
    //     1: 10,
    //     2: 4,
    //     3: 10,
    //     41: 0
    //   },
    //   defense: {...},
    //   movement: {...},
    //   ...
    // }
    let all_type_item_counts = all_items.reduce(
        (totals, i) => {
          let item = ITEMS.find(item => item.id === i)
          return {
            ...totals,
            [item.type]: {
              ...totals[item.type],
              [item.id]: ( (totals[item.type] && totals[item.type][item.id]) ? totals[item.type][item.id] : 0 ) + 1
            }
          }
        },
        {}
    )

    return {
      count: builds.length,
      builds: builds,
      item_counts: all_item_counts,
      type_counts: all_type_counts,
      type_item_counts: all_type_item_counts,
    }
  }

  return {
    count: null,
    builds: null,
    item_counts: null,
    type_counts: null,
    type_item_counts: null,
  }
}
