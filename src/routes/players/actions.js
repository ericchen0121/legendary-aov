/* eslint-disable import/prefer-default-export */

import {
  FETCH_TWEETS
} from './constants';

export const fetchTweets = (data) => {
  return { type: FETCH_TWEETS, data}
}
