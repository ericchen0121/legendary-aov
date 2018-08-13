import {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString as StringType,
  GraphQLInt as IntType,
} from 'graphql';
import UserHeroType from '../types/UserHeroType';

const UserHeroInputType = new GraphQLInputObjectType({
  name: 'UserHeroInputType',
  type: UserHeroType,
  fields: {
    user_id: { type: IntType },
    hero_id: { type: IntType },
    type: { type: StringType }
  },
})

export default UserHeroInputType;
