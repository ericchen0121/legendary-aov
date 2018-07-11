import {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString as StringType,
} from 'graphql';
import UserType from '../types/UserType';

const UserInputType = new GraphQLInputObjectType({
  name: 'UserInputType',
  type: UserType,
  description: 'Input User payload',
  fields: {
    email: { type: StringType },
    password: { type: StringType },
    username: { type: StringType }
  },
});

export default UserInputType;
