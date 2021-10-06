/*
 *
 * ResetPassword actions
 *
 */

import * as ActionTypes from './constants';

export function resetPasswordAction(formData) {
  return {
    type: ActionTypes.RESET_PASSWORD,
    formData,
  };
}
