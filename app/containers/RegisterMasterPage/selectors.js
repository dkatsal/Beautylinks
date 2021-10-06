import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the registerMasterPage state domain
 */

const selectRegisterMasterPageDomain = state => state.registerMasterPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by RegisterMasterPage
 */

const makeSelectRegisterMasterPage = () =>
  createSelector(
    selectRegisterMasterPageDomain,
    substate => substate,
  );

export default makeSelectRegisterMasterPage;
export { selectRegisterMasterPageDomain };
