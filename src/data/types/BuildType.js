/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLList as ListType,
} from 'graphql';

const BuildType = new ObjectType({
  name: 'Build',
  fields: () => ({
    hero_id: { type: IntType },
    game_mode: { type: IntType}
  })
});

console.log('BUILDTYPE', BuildType)
// fields: () => ({
//   hero_id: { type: IntType },
//   user_id: { type: IntType },
//   game_mode: { type: IntType },
//   item_1: { type: IntType },
//   item_2: { type: IntType },
//   item_3: { type: IntType },
//   item_4: { type: IntType },
//   item_5: { type: IntType },
//   item_6: { type: IntType },
//   item_1_alt: { type: ListType },
//   item_2_alt: { type: ListType },
//   item_3_alt: { type: ListType },
//   item_4_alt: { type: ListType },
//   item_5_alt: { type: ListType },
//   item_6_alt: { type: ListType },
// })

export default BuildType;
