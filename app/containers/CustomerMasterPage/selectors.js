import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the customerMasterPage state domain
 */

const selectCustomerMasterPageDomain = state => state.customerMasterPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CustomerMasterPage
 */

const makeSelectCustomerMasterPage = () =>
  createSelector(
    selectCustomerMasterPageDomain,
    substate => substate,
  );

export default makeSelectCustomerMasterPage;
export { selectCustomerMasterPageDomain };
