/*
 *
 * RegisterClientPage reducer
 *
 */
import produce from 'immer';
import * as ActionTypes from './constants';

export const initialState = {
  loading: false,
  loaded: false,
  error: null,
  data: null,
};

/* eslint-disable default-case, no-param-reassign */
const registerClientPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.CLIENT_REGISTER:
        draft.loading = true;
        draft.loaded = false;
        draft.error = null;
        break;
      case ActionTypes.CLIENT_REGISTER_SUCCESS:
        draft.loading = false;
        draft.loaded = true;
        draft.error = null;
        draft.data = action.data;
        break;
      case ActionTypes.CLIENT_REGISTER_FAIL:
        draft.loading = false;
        draft.loaded = false;
        draft.error = action.data;
        break;
    }
  });

export default registerClientPageReducer;
