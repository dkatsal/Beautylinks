/*
 *
 * CustomerProfile reducer
 *
 */
import produce from 'immer';
import * as ActionTypes from './constants';

export const initialState = {
  loading: false,
  loaded: false,
  error:null
};

/* eslint-disable default-case, no-param-reassign */
const customerProfileReducer = (state = initialState, action) =>
  produce(state, draft  => {
    switch (action.type) {
      case ActionTypes.UPDATE_USER_INFO:
        draft.loading = true;
        draft.loaded = false;
        break;
      case ActionTypes.UPDATE_USER_INFO_SUCCESS:
        draft.loading = false;
        draft.loaded = true;
        break;
      case ActionTypes.UPDATE_USER_INFO_FAIL:
        draft.loading = false;
        draft.loaded = true;
        break;
    }
  });

export default customerProfileReducer;
