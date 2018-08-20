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
import Build from '../models/aov/Build'
import BuildType from './BuildType'

const BuildCountType = new ObjectType({
  name: 'BuildCountType',
  fields: () => ({
    count: {
      type: ListType(IntType)
    }
  })
})


export default BuildCountType;
