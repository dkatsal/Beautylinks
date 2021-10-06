import { takeLatest, put } from 'redux-saga/effects';
import * as ActionTypes from './constants';
import axios from '../../utils/axiosConfig';
import * as AppActionTypes from '../App/constants';

export function* fetchGetMasterInfoById({ id }) {
  try {
    const response = yield axios.get(`/master/${id}/info`);
    if (response) {
      yield put({
        type: ActionTypes.GET_MASTER_INFO_BY_ID_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_MASTER_INFO_BY_ID_FAIL,
      data: e.response.data.message,
    });
  }
}

export function* fetchGetMasterSubService({ id }) {
  try {
    const response = yield axios.get(`/master/${id}/services`);
    if (response) {
      yield put({
        type: ActionTypes.GET_MASTER_SUB_SERVICES_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_MASTER_SUB_SERVICES_FAIL,
      data: e.response.data.message,
    });
  }
}

export function* fetchGetReviewsAndRating({ id }) {
  try {
    const response = yield axios.get(`/master/${id}/reviews`);
    if (response) {
      yield put({
        type: ActionTypes.GET_MASTER_RATING_AND_REVIEW_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_MASTER_RATING_AND_REVIEW_FAIL,
      data: e.response.data.message,
    });
  }
}

export function* fetchPostFavoriteMaster({ data }) {
  try {
    const response = yield axios.post(`/favorite`, data);
    if (response) {
      yield put({
        type: ActionTypes.POST_FAVORITE_MASTER_SUCCESS,
        data: response.data,
      });
      yield put({
        type: AppActionTypes.GET_USER_FAVORITE_MASTERS,
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.POST_FAVORITE_MASTER_FAIL,
      data: e.response.data.message,
    });
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

// All sagas to be loaded
export default function*() {
  yield takeLatest(ActionTypes.GET_MASTER_INFO_BY_ID, fetchGetMasterInfoById);
  yield takeLatest(ActionTypes.GET_MASTER_SUB_SERVICES, fetchGetMasterSubService);
  yield takeLatest(ActionTypes.GET_MASTER_RATING_AND_REVIEW, fetchGetReviewsAndRating);
  yield takeLatest(ActionTypes.POST_FAVORITE_MASTER, fetchPostFavoriteMaster);
}
