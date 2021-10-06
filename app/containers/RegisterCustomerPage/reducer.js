/*
 *
 * RegisterCustomerPage reducer
 *
 */
import produce from 'immer';
import * as ActionTypes from './constants';

export const initialState = {
  loading: false,
  loaded: false,
  error: null,
  data: {
    status: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const registerCustomerPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.CUSTOMER_PREREGISTER:
        draft.loading = true;
        draft.loaded = false;
        draft.error = null;
        draft.data = action.data;
        break;
      case ActionTypes.USER_EXISTS:
        draft.loading = true;
        draft.loaded = false;
        draft.error = null;
        break;
      case ActionTypes.USER_EXISTS_SUCCESS:
        draft.loading = false;
        draft.loaded = true;
        draft.error = null;
        draft.data = action.data;
        break;
      case ActionTypes.USER_EXISTS_FAIL:
        draft.loading = false;
        draft.loaded = false;
        draft.error = action.data.message;
        draft.data = { status: false }
        break;
    }
  });

export default registerCustomerPageReducer;
