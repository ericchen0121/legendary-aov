import {
  SELECT_LOCAL_FAVORITED_HEROES
} from './constants';

export const selectLocalFavoritedHeroes = (data) => {
  return { type: SELECT_LOCAL_FAVORITED_HEROES, data }
}
