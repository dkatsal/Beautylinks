/*
 *
 * RegisterMasterPage actions
 *
 */

import * as ActionTypes from './constants';

export function postRegister(data) {
  return {
    type: ActionTypes.POST_REGISTER,
    data,
  };
}

export function postServicesRegStep() {
  return {
    type: ActionTypes.POST_SERVICES_REG_STEP,
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

export function getMasterServices() {
  return {
    type: ActionTypes.GET_MASTER_SERVICES,
  };
}

export function postMasterLocation(data) {
  return {
    type: ActionTypes.POST_MASTER_LOCATION,
    data,
  };
}

export function postMasterAvailability(data) {
  return {
    type: ActionTypes.POST_MASTER_AVAILABILITY,
    data,
  };
}

export function postMasterTrustAndSafety(data) {
  return {
    type: ActionTypes.POST_MASTER_TRUST,
    data,
  };
}

export function postMasterAvatar(data) {
  return {
    type: ActionTypes.POST_MASTER_AVATAR,
    data,
  };
}
