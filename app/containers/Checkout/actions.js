/*
 *
 * Checkout actions
 *
 */

import * as ActionTypes from './constants';

export function getBooking(id) {
  return {
    type: ActionTypes.GET_BOOKING,
    id,
  };
}

export function putBookingCustomerCancel(id) {
  return {
    type: ActionTypes.PUT_BOOKING_CUSTOMER_CANCEL,
    id,
  };
}
