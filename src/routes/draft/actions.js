/* eslint-disable import/prefer-default-export */
import axios from 'axios';
const YT_API_KEY = 'AIzaSyC9VH79Z6SuUTtJKznyEjs3KuxjNxS1kZ8'
const YT_API_URL = 'https://www.googleapis.com/youtube/v3'
const YT_MAX_RESULTS = 50

import {
  SELECT_HERO,
  TOGGLE_AUTOPLAY,
  FETCH_YOUTUBE_LIST,
  FETCH_YOUTUBE_LIST_START,
  FETCH_YOUTUBE_LIST_RESULTS,
  FETCH_YOUTUBE_LIST_ERROR,
  SELECT_YOUTUBE_VIDEO,
  QUEUE_NEXT_VIDEO
} from '../../constants';

export const selectHero = (data) => {
  return { type: SELECT_HERO, data }
}

export const toggleAutoplay = (data) => {
  return { type: TOGGLE_AUTOPLAY, data }
}

export const fetchYoutubeList = (query) => {
    return dispatch => {
        dispatch(fetchYoutubeListStart())
        axios.get(`${YT_API_URL}/search?key=${YT_API_KEY}&type=video&part=snippet&q=${query}&maxResults=${YT_MAX_RESULTS}`)
          .then(res => dispatch(fetchYoutubeListResults(res.data)))
          .catch(err => dispatch(fetchYoutubeListError(err)))
    }
}

export const fetchYoutubeListStart = () => {
    return {
      type: FETCH_YOUTUBE_LIST_START
     }
}

export const fetchYoutubeListResults = (data) => {
    return { type: FETCH_YOUTUBE_LIST_RESULTS, data }
}

export const fetchYoutubeListError = (data) => {
    return { type: FETCH_YOUTUBE_LIST_ERROR, data }
}

export const selectYoutubeVideo = (data) => {
  return { type: SELECT_YOUTUBE_VIDEO, data }
}

export const queueNextVideo = (data) => {
  return { type: QUEUE_NEXT_VIDEO, data }
}
