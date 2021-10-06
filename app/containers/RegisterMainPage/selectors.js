import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the registerMainPage state domain
 */

const selectRegisterMainPageDomain = state => state.registerMainPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by RegisterMainPage
 */

const makeSelectRegisterMainPage = () =>
  createSelector(
    selectRegisterMainPageDomain,
    substate => substate,
  );

export default makeSelectRegisterMainPage;
export { selectRegisterMainPageDomain };
