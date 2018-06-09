import BuildType from '../types/BuildType';
import {
  GraphQLInt as IntType,
  GraphQLList as ListType
} from 'graphql'
import Build from '../models/aov/Build'

const builds = {
  type: ListType(BuildType),

  resolve(parent, args){
    return Build.findAll()
  }
};

export default builds;
