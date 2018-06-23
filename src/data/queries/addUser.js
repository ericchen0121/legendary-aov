import UserType from '../types/UserType';
import User from '../models/User'
import UserInputType from '../types/UserInputType'
import {
  GraphQLInt as IntType,
  GraphQLList as ListType
} from 'graphql'
import bcrypt from 'bcrypt'

const addUser = {
  type: UserType,
  args: {
    input: { type: UserInputType }
  },
  async resolve(parent, { input }){
    let { email, password } = input

    return bcrypt.hash(password, 8).then(hash => {
      return User.create({
       email: email,
       password: hash
     })
    })
  }
};

export default addUser;
