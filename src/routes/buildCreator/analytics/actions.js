/* eslint-disable import/prefer-default-export */

import {
  SET_ANALYTICS_HERO_ID
} from './constants';

export const setAnalyticsHeroId = (data) => {
  return { type: SET_ANALYTICS_HERO_ID, data }
}
