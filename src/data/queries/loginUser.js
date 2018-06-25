import UserType from '../types/UserType';
import { GraphQLString as StringType, GraphQLObjectType as ObjectType } from 'graphql'
import User, { compare_password } from '../models/User'
import bcrypt from 'bcrypt'
import UserInputType from '../types/UserInputType'

const loginUser = {
  type: UserType,
  args: {
    input: {type: UserInputType}
  },
  resolve(parent, {input}){
    return User.findOne({
      where: {
        $or: [
          {username: {$eq: input.username}},
          {email: {$eq: input.email}}
        ]
      }
    }).then(user => {
      // user object returned in dataValues key
      if (user && compare_password(input.password, user.dataValues.password)) {
        return user
      }
    })
  }
};

export default loginUser;
