/*
 *
 * Home reducer
 *
 */
import produce from 'immer';
import * as ActionTypes from './constants';

export const initialState = {
  justBooked: {
    loaded: false,
    loading: false,
    data: null,
    error: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.GET_JUST_BOOKED:
        draft.justBooked.loading = true;
        draft.justBooked.loaded = false;
        break;
      case ActionTypes.GET_JUST_BOOKED_SUCCESS:
        draft.justBooked.loading = false;
        draft.justBooked.loaded = true;
        draft.justBooked.data = action.data;
        break;
      case ActionTypes.GET_JUST_BOOKED_FAIL:
        draft.justBooked.loading = true;
        draft.justBooked.loaded = false;
        draft.justBooked.error = action.data;
        break;
    }
  });

export default homeReducer;
