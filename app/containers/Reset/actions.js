/*
 *
 * Reset actions
 *
 */

import * as ActionTypes from './constants';

export function resetPasswordEmailAction(email) {
  return {
    type: ActionTypes.RESET_PASSWORD_EMAIL,
    email,
  };
}
