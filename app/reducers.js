/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import globalReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import axios from './utils/axiosConfig';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    language: languageProviderReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  const appReducer = (state, action) => {
    if (action.type === 'LOG_OUT') {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      axios.setXApiKey('');
      // eslint-disable-next-line no-param-reassign
      state = undefined;
    }
    return rootReducer(state, action);
  };
  return appReducer;
}
