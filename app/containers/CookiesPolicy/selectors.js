import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the CookiesPolicy state domain
 */

const selectCookiesPolicyDomain = state => state.cookiesPolicy || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CookiesPolicy
 */

const makeSelectCookiesPolicy = () =>
  createSelector(
    selectCookiesPolicyDomain,
    substate => substate,
  );

export default makeSelectCookiesPolicy;
export { selectCookiesPolicyDomain };
