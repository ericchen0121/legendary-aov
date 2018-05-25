import {
  TOGGLE_DARK_MODE,
} from './constants';

const initialState = {
  dark_mode_active: false,
}

const utilities = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        dark_mode_active: !state.dark_mode_active
      }
    default:
      return state;
  }
}

export default utilities;
