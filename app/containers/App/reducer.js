/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import * as ActionTypes from './constants';

// The initial state of the App
export const initialState = {
  theme: 'light',
  mainTitle: '',
  serviceCategories: {
    loading: false,
    loaded: false,
    data: [],
    error: null,
  },
  user: {
    data: {},
    loading: false,
    loaded: false,
    error: null,
  },
  address: '',
  notification: { open: false, text: '', variant: '' },
  regStep: {
    data: 0,
    loading: false,
    error: null,
  },
  favoriteMasters: {
    loaded: false,
    loading: false,
    data: [],
    error: null,
  },
  booking: {
    loading: false,
    loaded: false,
    data: null,
    error: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.CHANGE_THEME:
        draft.theme = action.theme;
        break;
      case ActionTypes.GET_USER_INFO:
        draft.user.loading = true;
        break;
      case ActionTypes.GET_USER_INFO_SUCCESS:
        draft.user = {
          data: action.data,
          loading: false,
          loaded: true,
          error: null,
        };
        break;
      case ActionTypes.GET_USER_INFO_FAIL:
        draft.user = {
          loading: false,
          loaded: false,
          error: action.message,
        };
        break;
      case ActionTypes.GET_SERVICE_CATEGORIES:
        draft.serviceCategories.loading = true;
        draft.serviceCategories.loaded = false;
        break;
      case ActionTypes.GET_SERVICE_CATEGORIES_SUCCESS:
        draft.serviceCategories.loading = false;
        draft.serviceCategories.loaded = true;
        draft.serviceCategories.data = action.data;
        break;
      case ActionTypes.GET_SERVICE_CATEGORIES_FAIL:
        draft.serviceCategories.loading = false;
        draft.serviceCategories.error = action.message;
        break;
      case ActionTypes.GET_MASTER_REG_STEP:
        draft.regStep.loading = true;
        draft.regStep.loaded = false;
        break;
      case ActionTypes.GET_MASTER_REG_STEP_SUCCESS:
        draft.regStep.loading = false;
        draft.regStep.loaded = true;
        draft.regStep.data = action.data;
        break;
      case ActionTypes.GET_MASTER_REG_STEP_FAIL:
        draft.regStep.loading = false;
        draft.regStep.error = action.message;
        break;
      case ActionTypes.SET_FILTER_ADDRESS:
        draft.address = action.value;
        break;
      case ActionTypes.OPEN_NOTIFICATION:
        draft.notification.open = true;
        draft.notification.text = action.data;
        draft.notification.variant = 'success';
        break;
      case ActionTypes.OPEN_ERROR_NOTIFICATION:
        draft.notification.open = true;
        draft.notification.text = action.data;
        draft.notification.variant = 'error';
        break;
      case ActionTypes.CLOSE_NOTIFICATION:
        draft.notification.open = false;
        draft.notification.text = null;
        break;
      case ActionTypes.GET_USER_FAVORITE_MASTERS:
        draft.favoriteMasters.loading = true;
        draft.favoriteMasters.loaded = false;
        break;
      case ActionTypes.GET_USER_FAVORITE_MASTERS_SUCCESS:
        draft.favoriteMasters.loading = false;
        draft.favoriteMasters.loaded = true;
        draft.favoriteMasters.data = action.data;
        break;
      case ActionTypes.GET_USER_FAVORITE_MASTERS_FAIL:
        draft.favoriteMasters.loading = true;
        draft.favoriteMasters.loaded = false;
        draft.favoriteMasters.error = action.data;
        break;
      case ActionTypes.CREATE_BOOKING:
        draft.booking.loading = true;
        draft.booking.loaded = false;
        break;
      case ActionTypes.CREATE_BOOKING_SUCCESS:
        draft.booking.loading = false;
        draft.booking.loaded = true;
        draft.booking.data = action.data;
        break;
      case ActionTypes.CREATE_BOOKING_FAIL:
        draft.booking.loading = true;
        draft.booking.loaded = false;
        draft.booking.error = action.data;
        break;
      case ActionTypes.CLEAR_BOOKING:
        draft.booking = initialState.booking;
        break;
    }
  });

export default appReducer;
