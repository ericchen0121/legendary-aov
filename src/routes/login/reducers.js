import {
  LOGIN_USER,
  REGISTER_USER
} from './constants';

const initialState = {
  is_logged_in: false,
  id: null,
  email: null,
  username: null,
  is_new_user: false
}

const user_login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      if (action.data) {
        return {
          ...state,
          is_logged_in: true,
          id: action.data.id,
          email: action.data.email,
          username: action.data.username,
        }
      } else {
        return state
      }
    case REGISTER_USER:
      if (action.data) {
        return {
          ...state,
          is_logged_in: true,
          id: action.data.id,
          email: action.data.email,
          username: action.data.username,
          is_new_user: true
        }
      } else {
        return state
      }
    default:
      return state;
  }
}

export default user_login;
