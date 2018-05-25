import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import youtube_list from '../routes/draft/reducers';
import utilities from '../components/Utilities/reducers';

export default combineReducers({
  user,
  runtime,
  youtube_list,
  utilities,
});
