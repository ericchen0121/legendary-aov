import {
  FILTER_ITEM_CATEGORY,
  SELECTED_ITEM,
  HOVERED_ITEM,
  CLEAR_HOVERED_ITEM,
  INSERT_TALENT_TO_BUILD,
  INSERT_ITEM_TO_BUILD,
  REMOVE_ITEM_FROM_BUILD,
  SET_HERO_ID,
  NAME_BUILD,
  RESET_BUILD,
  TOGGLE_ADD_NOTES_OPEN,
  ADD_NOTES
} from '../../../constants';

import { ITEM_CATEGORIES } from '../Items'
import {find_hero_by_id} from '../../draft/AovHeroes'

const DEFAULT_HERO_ID = 1
const DEFAULT_TALENT_ID = 1
const DEFAULT_GAME_MODE_ID = 1
const DEFAULT_USER_ID = 1
const DEFAULT_VERSION_ID = 3

const initialState = {
  item_filter: ITEM_CATEGORIES[0],
  selected_item: null,
  hovered_item: null,
  is_notes_open: false,
  current_build: {
    name: `${find_hero_by_id(DEFAULT_HERO_ID).name} Build`,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    hero_id: DEFAULT_HERO_ID,
    talent_id: DEFAULT_TALENT_ID,
    game_mode_id: DEFAULT_GAME_MODE_ID,
    user_id: DEFAULT_USER_ID,
    version_id: DEFAULT_VERSION_ID,
    item_1_alt: [],
    item_2_alt: [],
    item_3_alt: [],
    item_4_alt: [],
    item_5_alt: [],
    item_6_alt: [],
    talent_alt: [],
    notes: {
      summary: '',
      arcana: '',
      items: '',
      matchups: '',
      combos: '',
      video_url: '',
      url: ''
    }
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
    case HOVERED_ITEM:
      return {
        ...state,
        hovered_item: action.data
      }
    case CLEAR_HOVERED_ITEM:
      return {
        ...state,
        hovered_item: null
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
    case INSERT_TALENT_TO_BUILD:
      return {
        ...state,
        current_build: {
          ...state.current_build,
          talent_id: action.data
        }
      }
    case SET_HERO_ID:
      return {
        ...state,
        current_build: {
          ...state.current_build,
          hero_id: action.data,
          name: action.data ? `${find_hero_by_id(action.data).name} Build` : 'Build'
        }
      }
    case NAME_BUILD:
      return {
        ...state,
        current_build: {
          ...state.current_build,
          name: action.data
        }
      }
    case RESET_BUILD:
      return initialState

    case TOGGLE_ADD_NOTES_OPEN:
      return {
        ...state,
        is_notes_open: !state.is_notes_open
      }
    case ADD_NOTES:
      let notes = Object.assign({}, state.notes);
      notes[action.data.field] = action.data.text
      return {
        ...state,
        current_build: {
          ...state.current_build,
          notes: {
            ...state.current_build.notes,
            ...notes
          }
        }
      }
    default:
      return state;
  }
}

export default build_creator;
