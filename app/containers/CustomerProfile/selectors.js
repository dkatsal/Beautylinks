import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the customerProfile state domain
 */

const selectCustomerProfileDomain = state => state.customerProfile || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CustomerProfile
 */

const makeSelectCustomerProfile = () =>
  createSelector(
    selectCustomerProfileDomain,
    substate => substate,
  );

export default makeSelectCustomerProfile;
export { selectCustomerProfileDomain };
