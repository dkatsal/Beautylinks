import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the practitionerSearch state domain
 */

const selectPractitionerSearchDomain = state => state.practitionerSearch || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PractitionerSearch
 */

const makeSelectPractitionerSearch = () =>
  createSelector(
    selectPractitionerSearchDomain,
    substate => substate,
  );

export default makeSelectPractitionerSearch;
export { selectPractitionerSearchDomain };
