import Build from '../models/aov/Build'
import BuildCountType from '../types/BuildCountType';
import {
  GraphQLInt as IntType,
  GraphQLList as ListType
} from 'graphql'

const buildCount = {
  type: BuildCountType,

  resolve(parent, args){
    console.log(Build.findAndCountAll({
      group: ['hero_id', 'id']
    }).then(result=>{
      console.log(result)
      return result
    }).count)
  }
}

export default buildCount;
