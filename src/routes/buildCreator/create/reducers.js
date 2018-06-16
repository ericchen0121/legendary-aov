import {
  FILTER_ITEM_CATEGORY,
  SELECTED_ITEM,
  INSERT_ITEM_TO_BUILD,
  REMOVE_ITEM_FROM_BUILD,
  SET_HERO_ID
} from '../../../constants';

import { ITEM_CATEGORIES } from '../Items'

const initialState = {
  item_filter: ITEM_CATEGORIES[0],
  selected_item: null,
  current_build: {
    hero_id: 1,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    talent_id: 1,
    game_mode_id: 1
  }
}

const build_creator = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_ITEM_CATEGORY:
      return {
        ...state,
        item_filter: action.data
      }
    case SELECTED_ITEM:
      return {
        ...state,
        selected_item: action.data
      }
    case INSERT_ITEM_TO_BUILD:
      return {
        ...state,
        current_build: {
          ...state.current_build,
          [action.data.pos]: action.data.item_id
        }
      }
    case REMOVE_ITEM_FROM_BUILD:
      return {
        ...state,
        current_build: {
          ...state.current_build,
          [action.data.pos]: null
        }
      }
    case SET_HERO_ID:
      console.log({
        ...state,
        current_build: {
          ...state.current_build,
          hero_id: action.data
        }
      })

      return {
        ...state,
        current_build: {
          ...state.current_build,
          hero_id: action.data
        }
      }
    default:
      return state;
  }
}

export default build_creator;