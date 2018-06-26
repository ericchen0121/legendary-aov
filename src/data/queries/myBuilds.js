import BuildType from '../types/BuildType';
import {
  GraphQLInt as IntType,
  GraphQLList as ListType
} from 'graphql'
import Build from '../models/aov/Build'

const myBuilds = {
  type: ListType(BuildType),
  args: {
    user_id: {type: IntType}
  },
  resolve(parent, args){
    return Build.findAll({
      where: {
        user_id: args.user_id
      }
    })
  }
};

export default myBuilds;
