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
} from 'graphql';

const ArcanaType = new ObjectType({
  name: 'Arcana',
  fields: () => ({
    id: { type: IntType },
    name: { type: StringType },
    tier: { type: IntType }
  })
});


export default ArcanaType;
