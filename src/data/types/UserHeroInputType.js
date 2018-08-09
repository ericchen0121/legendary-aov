import {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString as StringType,
  GraphQLInteger as IntegerType,
} from 'graphql';
import UserHeroType from '../types/UserType';

const UserHeroInputType = new GraphQLInputObjectType({
  name: 'UserHeroInputType',
  type: UserHeroType,
  description: 'Input UserHero payload',
  fields: {
    user_id: { type: IntType },
    hero_id: { type: IntType },
    type: { type: StringType }
  },
});

export default UserHeroInputType;
