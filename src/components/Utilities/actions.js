/* eslint-disable import/prefer-default-export */

import { 
  TOGGLE_DARK_MODE,
} from './constants';

export function toggleDarkMode() {
  return { type: TOGGLE_DARK_MODE };
}
