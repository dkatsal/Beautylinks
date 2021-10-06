/*
 *
 * CustomerPage reducer
 *
 */
import produce from 'immer';
import * as ActionTypes from './constants';

export const initialState = {
  settings: {
    loaded: false,
    loading: false,
    data: null,
    error: null,
  },
  bookings: {
    loaded: false,
    loading: false,
    data: null,
    error: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const customerPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.SAVE_EMAIL_PASSWORD:
        draft.settings.loading = true;
        draft.settings.loaded = false;
        break;
      case ActionTypes.SAVE_EMAIL_PASSWORD_SUCCESS:
        draft.settings.loading = false;
        draft.settings.loaded = true;
        break;
      case ActionTypes.SAVE_EMAIL_PASSWORD_FAIL:
        draft.settings.loading = true;
        draft.settings.loaded = false;
        draft.settings.error = action.data;
        break;
      case ActionTypes.CHANGE_ACTIVE_STATUS:
        draft.settings.loading = true;
        draft.settings.loaded = false;
        break;
      case ActionTypes.CHANGE_ACTIVE_STATUS_SUCCESS:
        draft.settings.loading = false;
        draft.settings.loaded = true;
        break;
      case ActionTypes.CHANGE_ACTIVE_STATUS_FAIL:
        draft.settings.loading = true;
        draft.settings.loaded = false;
        draft.settings.error = action.data;
        break;
      case ActionTypes.DELETE_USER:
        draft.settings.loading = true;
        draft.settings.loaded = false;
        break;
      case ActionTypes.DELETE_USER_SUCCESS:
        draft.settings.loading = false;
        draft.settings.loaded = true;
        break;
      case ActionTypes.DELETE_USER_FAIL:
        draft.settings.loading = true;
        draft.settings.loaded = false;
        draft.settings.error = action.data;
        break;

      case ActionTypes.GET_USER_BOOKINGS:
        draft.bookings.loading = true;
        draft.bookings.loaded = false;
        break;
      case ActionTypes.GET_USER_BOOKINGS_SUCCESS:
        draft.bookings.loading = false;
        draft.bookings.loaded = true;
        draft.bookings.data = action.data;
        break;
      case ActionTypes.GET_USER_BOOKINGS_FAIL:
        draft.bookings.loading = true;
        draft.bookings.loaded = false;
        draft.bookings.error = action.data;
        break;

      case ActionTypes.PUT_USER_CANCEL_BOOKING:
        draft.bookings.loading = true;
        break;
      case ActionTypes.PUT_USER_CANCEL_BOOKING_SUCCESS:
        draft.bookings.loading = false;
        draft.bookings.data = action.data;
        break;
      case ActionTypes.PUT_USER_CANCEL_BOOKING_FAIL:
        draft.bookings.loading = false;
        draft.bookings.error = action.data;
        break;
    }
  });

export default customerPageReducer;
