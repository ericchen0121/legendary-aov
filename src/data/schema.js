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
import myBuilds from './queries/myBuilds';
import latestBuilds from './queries/latestBuilds';
import buildsByHero from './queries/buildsByHero';
import hero from './queries/hero';
import item from './queries/item';
import items from './queries/items';
import version from './queries/version';
import players from './queries/players'
import teams from './queries/teams'
import arcana from './queries/arcana'

import addBuild from './queries/addBuild';
import editBuild from './queries/editBuild';
import addHero from './queries/addHero';
import addUser from './queries/addUser';
import loginUser from './queries/loginUser'


const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      me,
      news,
      build,
      builds,
      buildsByHero,
      latestBuilds,
      hero,
      item,
      items,
      arcana,
      version,
      myBuilds,
      players,
      teams
    },
  }),
  mutation: new ObjectType({
    name: 'Mutation',
    fields: {
      addBuild,
      editBuild,
      addHero,
      addUser,
      loginUser
    }
  })
});

export default schema;
