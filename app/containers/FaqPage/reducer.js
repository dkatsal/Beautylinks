/*
 *
 * FaqPage reducer
 *
 */
import produce from 'immer';
import * as ActionTypes from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const faqPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case ActionTypes.DEFAULT_ACTION:
        break;
    }
  });

export default faqPageReducer;
