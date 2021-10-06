/*
 *
 * ContactPage reducer
 *
 */
import produce from 'immer';
import * as ActionTypes from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const contactPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.POST_CONTACT_US:
        draft.loading = true;
        break;
      case ActionTypes.POST_CONTACT_US_SUCCESS:
        draft.loading = false;
        break;
      case ActionTypes.POST_CONTACT_US_FAIL:
        draft.loading = false;
        break;
    }
  });

export default contactPageReducer;
