import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the practitionerSearchAside state domain
 */

const selectPractitionerSearchAsideDomain = state => state.practitionerSearchAside || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PractitionerSearchAside
 */

const makeSelectPractitionerSearchAside = () =>
  createSelector(
    selectPractitionerSearchAsideDomain,
    substate => substate,
  );

export default makeSelectPractitionerSearchAside;
export { selectPractitionerSearchAsideDomain };
