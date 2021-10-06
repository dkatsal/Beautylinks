/*
 *
 * RegisterClientPage actions
 *
 */

import * as ActionTypes from './constants';

export function clientRegisterAction(data) {
  return {
    type: ActionTypes.CLIENT_REGISTER,
    data,
  };
}