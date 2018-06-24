import UserType from '../types/UserType';
import { GraphQLString as StringType, GraphQLObjectType as ObjectType } from 'graphql'
import User from '../models/User'
import bcrypt from 'bcrypt'

const loginUser = {
  type: UserType,
  args: {
    input: {
      type: ObjectType
      // username: { type: StringType},
      // email: { type: StringType},
      // password: { type: StringType},
    }
  },
  resolve(parent, { input }){
    console.log('found args on query', input)
    let user = User.findOne({
      where: {
        $or: [
          {username: {$eq: input.username}},
          {email: {$eq: input.email}}
        ]
      }
    })

    console.log('USER FOUND IS ', user)
    if (user && user.compare_password(input.password)) {
      console.log('matched password, returning user')
      return user
    }

    return null
  }
};

export default loginUser;
