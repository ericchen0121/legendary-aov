import {
  FETCH_TWEETS,
  CHECK_LIVE_TWITCH_STATUS,
  STORE_LIVE_TWITCH_STATUS
} from './constants';


const initialState = {
  tweets: [],
  live_twitch_users: []
}

const twitter = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case FETCH_TWEETS:
      return state
    case STORE_LIVE_TWITCH_STATUS:
      // return state
      return {
        ...state,
        live_twitch_users: action.data
      }
    default:
      return state;
  }
}

export default twitter;
