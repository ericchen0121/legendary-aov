import {
  SELECT_LOCAL_FAVORITED_HEROES
} from './constants';

const initialState = {
  local_favorited_heroes: []
}

const heroes_page = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LOCAL_FAVORITED_HEROES:
      return {
        ...state,
        local_favorited_heroes: [...state.local_favorited_heroes, action.data],
      }

    default:
      return state;
  }
}

export default heroes_page;
