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
import deleteBuild from './queries/deleteBuild'
import addHero from './queries/addHero';
import addUser from './queries/addUser';
import loginUser from './queries/loginUser'
import buildCount from './queries/buildCount'
import userHeroes from './queries/userHeroes'
import addUserHero from './queries/addUserHero'

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
      teams,
      userHeroes,
      buildCount
    },
  }),
  mutation: new ObjectType({
    name: 'Mutation',
    fields: {
      addBuild,
      editBuild,
      deleteBuild,
      addHero,
      addUser,
      loginUser,
      addUserHero,
    }
  })
});

export default schema;
