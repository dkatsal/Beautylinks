/*
 *
 * CustomerFeedback reducer
 *
 */
import produce from 'immer';
import * as ActionTypes from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const customerFeedbackReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.POST_CUSTOMER_FEEDBACK:
        draft.loading = true;
        break;
      case ActionTypes.POST_CUSTOMER_FEEDBACK_SUCCESS:
        draft.loading = false;
        break;
      case ActionTypes.POST_CUSTOMER_FEEDBACK_FAIL:
        draft.loading = false;
        break;
    }
  });

export default customerFeedbackReducer;
