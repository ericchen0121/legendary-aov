import UserType from '../types/UserType';
import { GraphQLString as StringType, GraphQLObjectType as ObjectType } from 'graphql'
import User, { compare_password } from '../models/User'
import bcrypt from 'bcrypt'

const loginUser = {
  type: UserType,
  args: {
    username: { type: StringType},
    email: { type: StringType},
    password: { type: StringType},
  },
  resolve(parent, args){
    return User.findOne({
      where: {
        $or: [
          {username: {$eq: args.username}},
          {email: {$eq: args.email}}
        ]
      }
    }).then(user => {
      if (user && compare_password(args.password, user.dataValues.password)) {
        return user
      }
    })
  }
};

export default loginUser;
