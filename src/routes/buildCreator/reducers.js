import {
  SELECT_BUILDS_BY_HERO_ID
} from './constants';

const initialState = {
  selected_hero_id: 1,
}

const build_viewer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_BUILDS_BY_HERO_ID:
      return {
        ...state,
        selected_hero_id: action.data
      }

    default:
      return state;
  }
}

export default build_viewer;
