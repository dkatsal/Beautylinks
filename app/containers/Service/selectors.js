import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the service state domain
 */

const selectServiceDomain = state => state.service || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Service
 */

const makeSelectService = () =>
  createSelector(
    selectServiceDomain,
    substate => substate,
  );

export default makeSelectService;
export { selectServiceDomain };
