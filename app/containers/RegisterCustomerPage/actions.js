/*
 *
 * RegisterCustomerPage actions
 *
 */

import * as ActionTypes from './constants';

export function customerPreRegisterAction(data) {
  return {
    type: ActionTypes.CUSTOMER_PREREGISTER,
    data,
  };
}

export function userExists(data) {
  return {
    type: ActionTypes.USER_EXISTS,
    data,
  };
}