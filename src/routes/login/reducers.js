import {
  LOGIN_USER
} from './constants';

const initialState = {
  is_logged_in: false,
  id: null,
  email: null
}

const user_login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        is_logged_in: true,
        id: action.data.id,
        email: action.data.email
      }
    default:
      return state;
  }
}

export default user_login;
