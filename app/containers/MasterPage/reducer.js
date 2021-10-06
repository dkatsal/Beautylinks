/*
 *
 * MasterPage reducer
 *
 */
import produce from 'immer';
import * as ActionTypes from './constants';

export const initialState = {
  info: {
    loading: false,
    loaded: false,
    data: null,
    error: null,
  },
  subServices: {
    loading: false,
    loaded: false,
    data: null,
    error: null,
  },
  reviewsAndRating: {
    loading: false,
    loaded: false,
    data: null,
    error: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const masterPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.GET_MASTER_INFO_BY_ID:
        draft.info.loading = true;
        draft.info.loaded = false;
        draft.info.data = null;
        draft.info.error = null;
        break;
      case ActionTypes.GET_MASTER_INFO_BY_ID_SUCCESS:
        draft.info.loading = false;
        draft.info.loaded = true;
        draft.info.data = action.data;
        draft.info.error = null;
        break;
      case ActionTypes.GET_MASTER_INFO_BY_ID_FAIL:
        draft.info.loading = false;
        draft.info.loaded = false;
        draft.info.data = null;
        draft.info.error = null;
        break;
      case ActionTypes.GET_MASTER_SUB_SERVICES:
        draft.subServices.loading = true;
        draft.subServices.loaded = false;
        draft.subServices.data = null;
        draft.subServices.error = null;
        break;
      case ActionTypes.GET_MASTER_SUB_SERVICES_SUCCESS:
        draft.subServices.loading = false;
        draft.subServices.loaded = true;
        draft.subServices.data = action.data;
        draft.subServices.error = null;
        break;
      case ActionTypes.GET_MASTER_SUB_SERVICES_FAIL:
        draft.subServices.loading = false;
        draft.subServices.loaded = false;
        draft.subServices.data = null;
        draft.subServices.error = null;
        break;
      case ActionTypes.GET_MASTER_RATING_AND_REVIEW:
        draft.reviewsAndRating.loading = true;
        draft.reviewsAndRating.loaded = false;
        draft.reviewsAndRating.data = null;
        draft.reviewsAndRating.error = null;
        break;
      case ActionTypes.GET_MASTER_RATING_AND_REVIEW_SUCCESS:
        draft.reviewsAndRating.loading = false;
        draft.reviewsAndRating.loaded = true;
        draft.reviewsAndRating.data = action.data;
        draft.reviewsAndRating.error = null;
        break;
      case ActionTypes.GET_MASTER_RATING_AND_REVIEW_FAIL:
        draft.reviewsAndRating.loading = false;
        draft.reviewsAndRating.loaded = false;
        draft.reviewsAndRating.data = null;
        draft.reviewsAndRating.error = null;
        break;
    }
  });

export default masterPageReducer;
