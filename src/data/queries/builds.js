import Build from '../models/aov/Build'
import BuildType from '../types/BuildType';
import {
  GraphQLInt as IntType,
  GraphQLList as ListType
} from 'graphql'

const builds = {
  type: ListType(BuildType),

  resolve(parent, args){
    return Build.findAll()
  }
};

export default builds;
