import {
  GraphQLInt as IntType,
  GraphQLList as ListType
} from 'graphql'
import UserHero from '../models/aov/UserHero'
import UserHeroType from '../types/UserHeroType';
import UserHeroInputType from '../types/UserHeroInputType'

const addUserHero = {
  type: UserHeroType,
  args: {
    input: { type: UserHeroInputType }
  },
  async resolve(parent, { input }){
    return UserHero.create({
     user_id: input.user_id,
     hero_id:  input.hero_id,
     type: input.type
    })
 }
};

export default addUserHero;
