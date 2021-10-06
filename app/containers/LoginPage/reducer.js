/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import * as ActionTypes from './constants';

export const initialState = {
  loading: false,
  loaded: false,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.LOGIN:
        draft.loading = true;
        draft.loaded = false;
        draft.error = null;
        break;
      case ActionTypes.LOGIN_SUCCESS:
        draft.loading = false;
        draft.loaded = true;
        draft.error = null;
        break;
      case ActionTypes.LOGIN_FAIL:
        draft.loading = false;
        draft.loaded = false;
        draft.error = action.data;
        break;
    }
  });

export default loginPageReducer;
