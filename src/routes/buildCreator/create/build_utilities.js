export function convert_build(build) {
  let new_build

  if (build) {
    new_build = {
      ...build,
      1: build.item_1,
      2: build.item_2,
      3: build.item_3,
      4: build.item_4,
      5: build.item_5,
      6: build.item_6,
      notes: JSON.parse(build.notes),
    }
  }
  return new_build
}
