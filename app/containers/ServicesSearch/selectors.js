import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the servicesSearch state domain
 */

const selectServicesSearchDomain = state => state.servicesSearch || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ServicesSearch
 */

const makeSelectServicesSearch = () =>
  createSelector(
    selectServicesSearchDomain,
    substate => substate,
  );

export default makeSelectServicesSearch;
export { selectServicesSearchDomain };
