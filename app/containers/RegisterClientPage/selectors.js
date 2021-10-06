import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the registerClientPage state domain
 */

const selectRegisterClientPageDomain = state => state.registerClientPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by RegisterClientPage
 */

const makeSelectRegisterClientPage = () =>
  createSelector(
    selectRegisterClientPageDomain,
    substate => substate,
  );

export default makeSelectRegisterClientPage;
export { selectRegisterClientPageDomain };
