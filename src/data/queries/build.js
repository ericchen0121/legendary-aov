import BuildType from '../types/BuildType';
import { GraphQLInt as IntType } from 'graphql'
import Build from '../models/aov/Build'

const build = {
  type: BuildType,
  args: {
    id: {type: IntType}
  },
  resolve(parent, args){
    return Build.findOne({
      where: {
        id: args.id
      }
    })
  }
};

export default build;
