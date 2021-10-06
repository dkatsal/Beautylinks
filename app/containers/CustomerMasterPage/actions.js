/*
 *
 * CustomerMasterPage actions
 *
 */

import * as ActionTypes from './constants';

export function getMasterProfile() {
  return {
    type: ActionTypes.GET_MASTER_PROFILE,
  };
}
export function putLiqPay(data) {
  return {
    type: ActionTypes.SAVE_CARD,
    data,
  };
}

export function postMasterService(data) {
  return {
    type: ActionTypes.POST_MASTER_SERVICE,
    data,
  };
}

export function deleteMasterService(data) {
  return {
    type: ActionTypes.DELETE_MASTER_SERVICE,
    data,
  };
}

export function putMasterService(data) {
  return {
    type: ActionTypes.PUT_MASTER_SERVICE,
    data,
  };
}

export function putMasterAvailability(data) {
  return {
    type: ActionTypes.PUT_MASTER_AVAILABILITY,
    data,
  };
}

export function putMasterLocationTypes(data) {
  return {
    type: ActionTypes.PUT_MASTER_LOCATION_TYPES,
    data,
  };
}

export function postMasterAvatar(data) {
  return {
    type: ActionTypes.POST_MASTER_AVATAR,
    data,
  };
}

export function deleteMasterImage(image) {
  return {
    type: ActionTypes.DELETE_MASTER_IMAGE,
    image,
  };
}

export function postMasterImages(images) {
  return {
    type: ActionTypes.POST_MASTER_IMAGES,
    images,
  };
}

export function deleteMasterCertImage(image) {
  return {
    type: ActionTypes.DELETE_MASTER_CERT_IMAGE,
    image,
  };
}

export function postMasterCertImages(images) {
  return {
    type: ActionTypes.POST_MASTER_CERT_IMAGES,
    images,
  };
}

export function putUserProfile(data) {
  return {
    type: ActionTypes.PUT_USER_PROFILE,
    data,
  };
}

export function putMasterProfile(data) {
  return {
    type: ActionTypes.PUT_MASTER_PROFILE,
    data,
  };
}

export function putUserStatus(data) {
  return {
    type: ActionTypes.PUT_USER_STATUS,
    data,
  };
}

export function postInvites(data) {
  return {
    type: ActionTypes.POST_INVITE,
    data,
  };
}

export function getBookingCalendar(query) {
  return {
    type: ActionTypes.GET_MASTER_BOOKING_CALENDAR,
    query,
  };
}

export function putCancelBooking(data) {
  return {
    type: ActionTypes.PUT_MASTER_CANCEL_BOOKING,
    data,
  };
}

export function deleteMasterAction(formData) {
  return {
    type: ActionTypes.DELETE_MASTER,
    formData,
  };
}
