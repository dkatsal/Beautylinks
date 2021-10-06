import { defaultAction } from '../actions';
import * as ActionTypes from './constants';

describe('CustomerProfile actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: ActionTypes.DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});
