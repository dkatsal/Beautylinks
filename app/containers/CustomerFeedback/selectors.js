import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the customerFeedback state domain
 */

const selectCustomerFeedbackDomain = state => state.customerFeedback || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CustomerFeedback
 */

const makeSelectCustomerFeedback = () =>
  createSelector(
    selectCustomerFeedbackDomain,
    substate => substate,
  );

export default makeSelectCustomerFeedback;
export { selectCustomerFeedbackDomain };
