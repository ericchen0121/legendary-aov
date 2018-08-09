import UserHeroType from '../types/UserHeroType';
import UserHero from '../models/aov/UserHero'
import {
  GraphQLInt as IntType,
  GraphQLList as ListType
} from 'graphql'

const userHeroes = {
  type: ListType(UserHeroType),
  args: {
    user_id: {type: IntType}
  },
  resolve(parent, args){
    return UserHero.findAll({
      where: {
        user_id: args.user_id
      }
    })
  }
};

export default userHeroes;
