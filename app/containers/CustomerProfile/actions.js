/*
 *
 * CustomerProfile actions
 *
 */

import * as ActionTypes from './constants';

export function updateUserInfo(data) {
  return {
    type: ActionTypes.UPDATE_USER_INFO,
    data
  };
}
