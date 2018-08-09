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

const UserHeroType = new ObjectType({
  name: 'UserHero',
  fields: () => ({
    id: { type: IntType },
    user_id: { type: IntType },
    hero_id: { type: IntType },
    type: { type: StringType },
  })
});

export default UserHeroType;
