import BuildType from '../types/BuildType';
import {
  GraphQLInt as IntType,
  GraphQLList as ListType
} from 'graphql'
import Build from '../models/aov/Build'

const buildsByHero = {
  type: ListType(BuildType),
  args: {
    hero_id: {type: IntType}
  },
  resolve(parent, args){
    return Build.findAll({
      where: {
        hero_id: args.hero_id
      }
    })
  }
};

export default buildsByHero;
