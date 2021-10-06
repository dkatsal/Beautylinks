/*
 *
 * PractitionerSearch reducer
 *
 */
import produce from 'immer';
import * as ActionTypes from './constants';

export const initialState = {
  loading: false,
  loaded: false,
  data: null,
  error: null,
  availableTime: {
    loading: false,
    loaded: false,
    data: null
  }
};

/* eslint-disable default-case, no-param-reassign */
const practitionerSearchReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.SEARCH_AVAILABLE_MASTERS:
        draft.loading = true;
        draft.loaded = false;
        break;
      case ActionTypes.SEARCH_AVAILABLE_MASTERS_SUCCESS:
        draft.loading = false;
        draft.loaded = true;
        draft.data = action.data;
        break;
      case ActionTypes.SEARCH_AVAILABLE_MASTERS_FAIL:
        draft.loading = false;
        draft.loaded = false;
        draft.data = null;
        break;
      case ActionTypes.GET_MASTER_AVAILABLE_TIME:
        draft.availableTime.loading = true;
        draft.availableTime.loaded = false;
        break;
      case ActionTypes.GET_MASTER_AVAILABLE_TIME_SUCCESS:
        draft.availableTime.loading = false;
        draft.availableTime.loaded = true;
        draft.availableTime.data = action.data;
        break;
      case ActionTypes.GET_MASTER_AVAILABLE_TIME_FAIL:
        draft.availableTime.loading = false;
        draft.availableTime.loaded = false;
        break;

    }
  });

export default practitionerSearchReducer;
