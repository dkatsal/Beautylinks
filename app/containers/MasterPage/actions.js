/*
 *
 * MasterPage actions
 *
 */

import * as ActionTypes from './constants';
import * as AppActionTypes from '../App/constants';

export function getMasterInfoById(id) {
  return {
    type: ActionTypes.GET_MASTER_INFO_BY_ID,
    id,
  };
}

export function getMasterSubService(id) {
  return {
    type: ActionTypes.GET_MASTER_SUB_SERVICES,
    id,
  };
}

export function getMasterReviewsAndReting(id) {
  return {
    type: ActionTypes.GET_MASTER_RATING_AND_REVIEW,
    id,
  };
}

export function postFavoriteMaster(data) {
  return {
    type: ActionTypes.POST_FAVORITE_MASTER,
    data,
  };
}

export function deleteFavoriteMaster(data) {
  return {
    type: AppActionTypes.DELETE_FAVORITE,
    data,
  };
}
