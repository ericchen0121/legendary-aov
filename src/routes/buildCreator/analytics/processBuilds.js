import {ITEMS} from '../Items'

export default function analyze_builds(builds) {
  if(builds) {
    let build_count = builds.length || 0
    let item_counts = ITEMS

    let all_items = []
    for(let b of builds){
      all_items.push(b.item_1, b.item_2, b.item_3, b.item_4, b.item_5, b.item_6)
    }

    console.log('all', all_items)

    let all_item_counts = all_items.reduce(
      (totals, i) => ({ ...totals, [i]: (totals[i] || 0 ) + 1}),
      {}
    )

    console.log(all_item_counts)
    //most chosen magic, ,defense, boots
    // {
    //   magic: {
    //     1: 10,
    //     2: 4,
    //     3: 10,
    //     41: 0
    //   }
    // }
    // avg count of types of items (2 defense, 1 magic, etc.)
    return builds
  }

  return {}
}
