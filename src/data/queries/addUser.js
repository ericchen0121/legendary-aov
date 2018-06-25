import UserType from '../types/UserType';
import User from '../models/User'
import UserInputType from '../types/UserInputType'
import sequelize from 'sequelize'

const addUser = {
  type: UserType,
  args: {
    input: { type: UserInputType }
  },
  async resolve(parent, { input }){
    let { email, password, username } = input
    return User.create({
      email,
      password,
      username
    })
    .catch(sequelize.ValidationError,  err =>  {
      console.log('SEQUELIZE ERROR!')
      return false
    })
  }
};

export default addUser;
