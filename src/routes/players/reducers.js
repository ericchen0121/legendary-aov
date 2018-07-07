import {
  FETCH_TWEETS
} from './constants';


const initialState = {
  tweets: []
}

const twitter = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TWEETS:
      return state

    default:
      return state;
  }
}

export default twitter;
