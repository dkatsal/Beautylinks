/*
 *
 * CustomerFeedback actions
 *
 */

import * as ActionTypes from './constants';

export function postCustomerFeedbackAction(data, bookingId) {
  return {
    type: ActionTypes.POST_CUSTOMER_FEEDBACK,
    data,
    bookingId,
  };
}
