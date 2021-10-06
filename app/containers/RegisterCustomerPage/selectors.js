import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the registerCustomerPage state domain
 */

const selectRegisterCustomerPageDomain = state => state.registerCustomerPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by RegisterCustomerPage
 */

const makeSelectRegisterCustomerPage = () =>
  createSelector(
    selectRegisterCustomerPageDomain,
    substate => substate,
  );

export default makeSelectRegisterCustomerPage;
export { selectRegisterCustomerPageDomain };
