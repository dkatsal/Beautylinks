/*
 *
 * CustomerPage actions
 *
 */

import * as ActionTypes from './constants';
import * as AppActionTypes from '../App/constants';

export function saveEmailPasswordAction(formData) {
  return {
    type: ActionTypes.SAVE_EMAIL_PASSWORD,
    formData,
  };
}

export function changeActiveStatusAction(formData) {
  return {
    type: ActionTypes.CHANGE_ACTIVE_STATUS,
    formData,
  };
}
export function deleteUserAction(formData) {
  return {
    type: ActionTypes.DELETE_USER,
    formData,
  };
}

export function getUserBookingsAction(formData) {
  return {
    type: ActionTypes.GET_USER_BOOKINGS,
    formData,
  };
}
export function getUserBookingByIdAction(id) {
  return {
    type: ActionTypes.GET_USER_BOOKING_BY_ID,
    id,
  };
}

export function getUserFavoriteMastersAction(formData) {
  return {
    type: ActionTypes.GET_USER_FAVORITE_MASTERS,
    formData,
  };
}

export function deleteFavoriteAction(data) {
  return {
    type: AppActionTypes.DELETE_FAVORITE,
    data,
  };
}

export function putCancelBooking(data) {
  return {
    type: ActionTypes.PUT_USER_CANCEL_BOOKING,
    data,
  };
}
