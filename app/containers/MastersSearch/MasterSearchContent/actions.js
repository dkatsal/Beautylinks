/*
 *
 * PractitionerSearch actions
 *
 */

import * as ActionTypes from './constants';

export function searchAvailableMasters(searchData) {
  return {
    type: ActionTypes.SEARCH_AVAILABLE_MASTERS,
    searchData,
  };
}

export function getMasterAvailableTime(params) {
  return {
    type: ActionTypes.GET_MASTER_AVAILABLE_TIME,
    params,
  };
}


