/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
  GraphQLInputObjectType as InputObjectType,
} from 'graphql';

import me from './queries/me';
import news from './queries/news';
import build from './queries/build';
import builds from './queries/builds';
import buildsByHero from './queries/buildsByHero';
import hero from './queries/hero';
import item from './queries/item';
import items from './queries/items';
import version from './queries/version';

import addBuild from './queries/addBuild';
import addHero from './queries/addHero';
import addUser from './queries/addUser';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      me,
      news,
      build,
      builds,
      buildsByHero,
      hero,
      item,
      items,
      version
    },
  }),
  mutation: new ObjectType({
    name: 'Mutation',
    fields: {
      addBuild,
      addHero,
      addUser
    }
  })
});

export default schema;
