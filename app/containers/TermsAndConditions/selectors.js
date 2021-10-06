import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the TermsAndConditions state domain
 */

const selectTermsAndConditionsDomain = state => state.termsAndConditions || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TermsAndConditions
 */

const makeSelectTermsAndConditions = () =>
  createSelector(
    selectTermsAndConditionsDomain,
    substate => substate,
  );

export default makeSelectTermsAndConditions;
export { selectTermsAndConditionsDomain };
