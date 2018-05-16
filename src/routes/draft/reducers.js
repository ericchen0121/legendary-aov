import {
  SELECT_HERO,
  FETCH_YOUTUBE_LIST_RESULTS,
  FETCH_YOUTUBE_LIST_ERROR,
  SELECT_YOUTUBE_VIDEO,
} from '../../constants';

const initialState = {
  data: [],
  selected_video: null,
  selected_hero: null
}

const youtube_list = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_YOUTUBE_LIST_RESULTS:
      return {
        ...state,
        data: action.data.items,   // items is an Array of YT Video objects
        selected_video: action.data.items[0], // autoselect the first video
      }
    case SELECT_YOUTUBE_VIDEO:
      return {
        ...state,
        selected_video: action.data
      }
    case SELECT_HERO:
    return {
      ...state,
      selected_hero: action.data
    }
    default:
      return state;
  }
}

export default youtube_list;
