import {
  SET_ANALYTICS_HERO_ID
} from './constants';

const initialState = {
  hero_id: null
}

const build_analytics = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANALYTICS_HERO_ID:
      return {
        ...state,
        hero_id: action.data
      }

    default:
      return state;
  }
}

export default build_analytics;
