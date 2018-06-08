import VersionType from '../types/VersionType';
import {
  GraphQLInt as IntType,
  GraphQLString as StringType,
 } from 'graphql'
import axios from 'axios'
import db from 'sequelize';
// import {resolver} from 'graphql-sequelize';
import Version from '../models/aov/Version'

const version = {
  type: VersionType,
  args: {
    id: {type: IntType}
  },
  resolve(parent, args){
  //   console.log('DB', db)
    console.log('DB MODELS ---------', db.models)
  //
  //   return versions.find(b => b.id === args.id)
  // }
  //   else if (args.id) {
  //     return versions.find(b => b.id === args.id)
  //   }
    return Version.findAll({ limit: 1   })
  }
    // query db with the args.id
    // code to get data from db
  // resolve: resolver(Version)

};

export default version;
