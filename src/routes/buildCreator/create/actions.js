/* eslint-disable import/prefer-default-export */

import {
  FILTER_ITEM_CATEGORY,
  SELECTED_ITEM,
  INSERT_ITEM_TO_BUILD,
  REMOVE_ITEM_FROM_BUILD,
  SET_HERO_ID
} from '../../../constants';

export const selectItem = (data) => {
  return { type: SELECTED_ITEM, data }
}

export const filterItemCategory = (data) => {
  return {
    type: FILTER_ITEM_CATEGORY, data
   }
}

export const editCurrentBuild = (data) => {
  return { type: EDIT_CURRENT_BUILD, data }
}

export const insertItemToBuild = (data) => {
  return { type: INSERT_ITEM_TO_BUILD, data }
}

export const removeItemFromBuild = (data) => {
  return { type: REMOVE_ITEM_FROM_BUILD, data }
}

export const setHeroId = (data) => {
  return { type: SET_HERO_ID, data }
}
