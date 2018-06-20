import {
  SELECT_BUILDS_BY_HERO_ID
} from './constants'

export const selectBuildsByHeroId = (data) => {
  return { type: SELECT_BUILDS_BY_HERO_ID, data }
}
