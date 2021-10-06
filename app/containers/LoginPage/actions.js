/*
 *
 * LoginPage actions
 *
 */

import * as ActionTypes from './constants';

export function loginAction(data) {
  return {
    type: ActionTypes.LOGIN,
    data,
  };
}
