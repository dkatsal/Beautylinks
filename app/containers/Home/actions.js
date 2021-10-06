/*
 *
 * Home actions
 *
 */

import * as ActionTypes from './constants';

export function getJustBookedAction(formData) {
  return {
    type: ActionTypes.GET_JUST_BOOKED,
    formData,
  };
}
