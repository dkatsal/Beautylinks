import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the customerPage state domain
 */

const selectCustomerPageDomain = state => state.customerPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CustomerPage
 */

const makeSelectCustomerPage = () =>
  createSelector(
    selectCustomerPageDomain,
    substate => substate,
  );

export default makeSelectCustomerPage;
export { selectCustomerPageDomain };
