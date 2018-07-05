import {
  FETCH_TWEETS
} from './constants';


const initialState = {
  tweets: []
}

const twitter = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TWEETS:
      return T.get('search/tweets',
        { q: 'banana since:2011-07-11', count: 100 },
        (err, data, response) => {
          console.log(data)
          return {
            ...state,
            tweets: data
        }
      })

    default:
      return state;
  }
}

export default twitter;
