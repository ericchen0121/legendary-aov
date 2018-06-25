import UserType from '../types/UserType';
import User from '../models/User'
import UserInputType from '../types/UserInputType'

const addUser = {
  type: UserType,
  args: {
    input: { type: UserInputType }
  },
  async resolve(parent, { input }){
    let { email, password, username } = input
    User.create({
      email,
      password,
      username
    })
  }
};

export default addUser;
