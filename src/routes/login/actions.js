import {
  LOGIN_USER
} from './constants';

export const loginUser = (data) => {
  return { type: LOGIN_USER, data }
}
