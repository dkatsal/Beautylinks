/*
 *
 * ResetPassword reducer
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
const resetPasswordReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.RESET_PASSWORD:
        draft.loading = true;
        draft.loaded = false;
        draft.error = null;
        break;
      case ActionTypes.RESET_PASSWORD_SUCCESS:
        draft.loading = false;
        draft.loaded = true;
        draft.data = action.data;
        break;
      case ActionTypes.RESET_PASSWORD_FAIL:
        draft.loading = false;
        draft.loaded = false;
        draft.error = action.data;
        break;
    }
  });

export default resetPasswordReducer;
