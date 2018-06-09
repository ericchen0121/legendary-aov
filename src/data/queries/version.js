import VersionType from '../types/VersionType';
import {
  GraphQLInt as IntType,
  GraphQLString as StringType,
 } from 'graphql'
import axios from 'axios'
// import {resolver} from 'graphql-sequelize';
import Version from '../models/aov/Version'

const version = {
  type: VersionType,
  args: {
    id: {type: IntType}
  },
  resolve(parent, args){
    return Version.findOne({
      where: {
        id: args.id
      }
    })
  }
};

export default version;
