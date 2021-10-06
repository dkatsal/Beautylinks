/*
 *
 * ContactPage actions
 *
 */

import * as ActionTypes from './constants';

export function postContactUsAction(data) {
  return {
    type: ActionTypes.POST_CONTACT_US,
    data,
  };
}
