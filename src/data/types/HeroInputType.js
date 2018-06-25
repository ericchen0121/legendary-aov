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
  GraphQLInputObjectType as InputObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
} from 'graphql';
import HeroType from '../types/HeroType';

const HeroInputType = new InputObjectType({
  name: 'HeroInputType',
  type: HeroType,
  description: 'Input hero payload',
  fields: () => ({
    name: { type: StringType },
  })
});

export default HeroInputType;
