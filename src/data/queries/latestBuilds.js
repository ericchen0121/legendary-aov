import Build from '../models/aov/Build'
import BuildType from '../types/BuildType';
import {
  GraphQLInt as IntType,
  GraphQLList as ListType
} from 'graphql'

const latestBuilds = {
  type: ListType(BuildType),

  resolve(parent, args){
    return Build.findAll({
      limit: 5,
      order: [['id', 'DESC']]
    })
  }
};

export default latestBuilds;
