import { takeLatest, put, select } from 'redux-saga/effects';
import _ from 'lodash';
import * as ActionTypes from './constants';
import axios from '../../utils/axiosConfig';
import { selectGlobal } from './selectors';

export function* fetchGetUserInfo() {
  try {
    const response = yield axios.get('/auth/user');
    if (response) {
      // const roles = localStorage.getItem('role');
      // if (roles.includes('master')) {
      //   yield put({
      //     type: ActionTypes.GET_MASTER_REG_STEP,
      //   });
      // }
      yield put({
        type: ActionTypes.GET_USER_INFO_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    axios.setXApiKey('');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    yield put({
      type: ActionTypes.GET_USER_INFO_FAIL,
      message: e.response.data.message,
    });
  }
}

export function* fetchGetServiceCategoriesAction() {
  try {
    const response = yield axios.get(`services`);
    if (response) {
      yield put({
        type: ActionTypes.GET_SERVICE_CATEGORIES_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_SERVICE_CATEGORIES_FAIL,
      message: e.response.data.message,
    });
  }
}

export function* fetchGetMasterRegStep() {
  try {
    const response = yield axios.get(`/master/onbording`);
    if (response) {
      yield put({
        type: ActionTypes.GET_MASTER_REG_STEP_SUCCESS,
        data: response.data.reg_step,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_MASTER_REG_STEP_FAIL,
      message: e.response.data.message,
    });
  }
}
export function* fetchGetUserFavoriteMastersAction() {
  try {
    const response = yield axios.get(`/profile/user/favorite`);
    if (response) {
      yield put({
        type: ActionTypes.GET_USER_FAVORITE_MASTERS_SUCCESS,
        data: response.data.favorite_masters,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_USER_FAVORITE_MASTERS_FAIL,
      message: e.response.data.message,
    });
  }
}

export function* fetchDeleteFavorite({ data }) {
  try {
    const response = yield axios.delete(`/favorite`, { data });
    const {
      favoriteMasters: { data: oldFavorites },
    } = yield select(selectGlobal);
    const favoriteMasters = _.cloneDeep(oldFavorites);
    const index = _.findIndex(favoriteMasters, { id: data.master_id });
    favoriteMasters.splice(index, 1);
    if (response) {
      yield put({
        type: ActionTypes.DELETE_FAVORITE_SUCCESS,
      });
      yield put({
        type: ActionTypes.GET_USER_FAVORITE_MASTERS_SUCCESS,
        data: favoriteMasters,
      });
      yield put({
        type: ActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.DELETE_FAVORITE_FAIL,
      errors: e.response.data.errors,
    });
    yield put({
      type: ActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

export function* fetchCreateBooking({ params }) {
  try {
    const response = yield axios.post(`/booking`, params);

    if (response) {
      yield put({
        type: ActionTypes.CREATE_BOOKING_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.CREATE_BOOKING_FAIL,
      data: e.response.data.message,
    });
    yield put({
      type: ActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}
// All sagas to be loaded
export default function*() {
  yield takeLatest(ActionTypes.GET_USER_INFO, fetchGetUserInfo);
  yield takeLatest(ActionTypes.GET_SERVICE_CATEGORIES, fetchGetServiceCategoriesAction);
  yield takeLatest(ActionTypes.GET_MASTER_REG_STEP, fetchGetMasterRegStep);
  yield takeLatest(ActionTypes.GET_USER_FAVORITE_MASTERS, fetchGetUserFavoriteMastersAction);
  yield takeLatest(ActionTypes.DELETE_FAVORITE, fetchDeleteFavorite);
  yield takeLatest(ActionTypes.CREATE_BOOKING, fetchCreateBooking);

}
