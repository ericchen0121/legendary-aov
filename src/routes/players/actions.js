/* eslint-disable import/prefer-default-export */
import axios from 'axios';
const TWITCH_CLIENT_ID = 'o1h3rgmepbwfxxa19d9hzx02tuupdh'
const TWITCH_API = 'https://api.twitch.tv/helix/'
axios.defaults.headers.common['Client-ID'] = TWITCH_CLIENT_ID

import {
  FETCH_TWEETS,
  CHECK_LIVE_TWITCH_STATUS,
  STORE_LIVE_TWITCH_STATUS
} from './constants';

export const fetchTweets = (data) => {
  return { type: FETCH_TWEETS, data}
}

// game_id: "498302" // twitch game id for AOV


// `${TWITCH_API}streams?game_id=488552&type=live&first=20&language=en`


export const checkLiveTwitchStatus = (users) => {
  let user_query = 'login=1rain&login=' + users.join('&login=')
  let users_objs
  let stream_query = 'user_login=1rain&user_login=' + users.join('&user_login=')
  let live_users = []

  return dispatch => {
    axios.get(`${TWITCH_API}users?${user_query}`)
      .then((res) => {
        if (res.data.data.length > 0) {
          users_objs = res.data.data
        }
        return axios.get(`${TWITCH_API}streams?${stream_query}`)
      })
      .then((res) => {
        if (res.data.data.length > 0) { live_users = res.data.data.map(s => users_objs.find(u => u.id === s.user_id).login ) }
        dispatch(storeLiveTwitchStatus(live_users))
      })
      .catch((error) => { console.log('error in fetching live twitch status')})
  }
}

export const storeLiveTwitchStatus = (data) => {
  return { type: STORE_LIVE_TWITCH_STATUS, data}
}
