import BuildType from '../types/BuildType';
import {
  GraphQLInt as IntType,
} from 'graphql'
import Build from '../models/aov/Build'

const deleteBuild = {
  type: IntType,
  args: {
    id: {type: IntType}
  },
  resolve(parent, args){
    return Build.destroy({
      where: {
        id: args.id
      }
    })
  }
};

export default deleteBuild;
