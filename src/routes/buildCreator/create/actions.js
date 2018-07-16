/* eslint-disable import/prefer-default-export */

import {
  FILTER_ITEM_CATEGORY,
  SELECTED_ITEM,
  HOVERED_ITEM,
  CLEAR_HOVERED_ITEM,
  INSERT_ITEM_TO_BUILD,
  REMOVE_ITEM_FROM_BUILD,
  INSERT_TALENT_TO_BUILD,
  SET_HERO_ID,
  NAME_BUILD,
  RESET_BUILD,
  TOGGLE_ADD_NOTES_OPEN,
  ADD_NOTES,
  SELECTED_ARCANA,
  HOVERED_ARCANA,
  CLEAR_HOVERED_ARCANA,
  INSERT_ARCANA_TO_BUILD,
  REMOVE_ARCANA_FROM_BUILD,
} from '../../../constants';

export const selectItem = (data) => {
  return { type: SELECTED_ITEM, data }
}

export const hoverItem = (data) => {
  return { type: HOVERED_ITEM, data }
}

export const clearHoverItem = (data) => {
  return { type: CLEAR_HOVERED_ITEM, data }
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

export const insertTalentToBuild = (data) => {
  return { type: INSERT_TALENT_TO_BUILD, data }
}

export const setHeroId = (data) => {
  return { type: SET_HERO_ID, data }
}

export const nameBuild = (data) => {
  return { type: NAME_BUILD, data }
}

export const resetBuild = (data) => {
  return { type: RESET_BUILD, data }
}

export const toggleAddNotesOpen = (data) => {
  return { type: TOGGLE_ADD_NOTES_OPEN, data }
}

export const addNotes = (data) => {
  return { type: ADD_NOTES, data}
}

export const selectArcana = (data) => {
  return { type: SELECTED_ARCANA, data}
}

export const hoverArcana = (data) => {
  return { type: HOVERED_ARCANA, data }
}

export const clearHoverArcana = (data) => {
  return { type: CLEAR_HOVERED_ARCANA, data }
}

export const insertArcanaToBuild = (data) => {
  return { type: INSERT_ARCANA_TO_BUILD, data }
}

export const removeArcanaFromBuild = (data) => {
  return { type: REMOVE_ARCANA_FROM_BUILD, data }
}
