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
import GraphQLJSON from 'graphql-type-json'
import UserType from './UserType'
import User from '../models/User'
import VersionType from './VersionType'
import Version from '../models/aov/Version'

const BuildType = new ObjectType({
  name: 'Build',
  fields: () => ({
    id: { type: IntType },
    name: { type: StringType },
    item_1: { type: IntType },
    item_2: { type: IntType },
    item_3: { type: IntType },
    item_4: { type: IntType },
    item_5: { type: IntType },
    item_6: { type: IntType },
    item_1_alt: { type: ListType(IntType) },
    item_2_alt: { type: ListType(IntType) },
    item_3_alt: { type: ListType(IntType) },
    item_4_alt: { type: ListType(IntType) },
    item_5_alt: { type: ListType(IntType) },
    item_6_alt: { type: ListType(IntType) },
    talent_id: { type: IntType },
    talent_alt: { type: ListType(IntType) },
    arcana: {type: ListType(IntType) },
    hero_id: { type: IntType },
    user_id: { type: IntType },
    game_mode_id: { type: IntType},
    version_id: { type: IntType },
    notes: { type: GraphQLJSON },
    user: {
      type: UserType,
      resolve: (parent, args) => {
        return User.findOne({
          where: {
            id: parent.dataValues.user_id
          }
        })
      }
    },
    version: {
      type: VersionType,
      resolve: (parent, args) => {
        return Version.findOne({
          where: {
            id: parent.dataValues.version_id
          }
        })
      }
    }
  })
});


export default BuildType;
