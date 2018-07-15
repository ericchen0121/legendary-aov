import {
  SELECT_HERO,
  FETCH_YOUTUBE_LIST_RESULTS,
  FETCH_YOUTUBE_LIST_ERROR,
  SELECT_YOUTUBE_VIDEO,
  QUEUE_NEXT_VIDEO
} from '../../constants';

const initialState = {
  data: [],
  selected_video: null,
  selected_hero: null,
  current_video_index: 0
}

let sort_recent = (list) => {
  return list.sort((a,b) => {
    new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)
  })
}

const youtube_list = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_YOUTUBE_LIST_RESULTS:
      // let list = sort_recent(action.data.items)

      return {
        ...state,
        data: action.data.items,   // items is an Array of YT Video objects
        selected_video: action.data.items[state.current_video_index] // autoselect first item
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
    case QUEUE_NEXT_VIDEO:
      if (state.data) {
        return {
         ...state,
         selected_video: state.data[state.current_video_index + 1],
         current_video_index: state.current_video_index + 1
       }
      }
      else { return state }


    default:
      return state;
  }
}

export default youtube_list;
