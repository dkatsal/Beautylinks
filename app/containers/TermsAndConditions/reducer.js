/*
 *
 * TermsAndConditions reducer
 *
 */
import produce from 'immer';
import * as ActionTypes from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const TermsAndConditionsReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case ActionTypes.DEFAULT_ACTION:
        break;
    }
  });

export default TermsAndConditionsReducer;
