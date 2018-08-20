import { combineReducers } from 'redux';
import runtime from './runtime';
import youtube_list from '../routes/draft/reducers';
import utilities from '../components/Utilities/reducers';
import build_creator from '../routes/buildCreator/create/reducers';
import build_analytics from '../routes/buildCreator/analytics/reducers';
import build_viewer from '../routes/buildCreator/reducers'
import user_login from '../routes/login/reducers'
import players from '../routes/players/reducers'
import heroes_page from '../routes/hero/reducers'

export default combineReducers({
  user_login,
  runtime,
  youtube_list,
  utilities,
  build_creator,
  build_viewer,
  build_analytics,
  players,
  heroes_page
});
