import { takeLatest, put, select } from 'redux-saga/effects';
import _ from 'lodash';
import * as ActionTypes from './constants';
import * as AppActionTypes from '../App/constants';
import axios from '../../utils/axiosConfig';
import { selectGlobal } from '../App/selectors';

export function* fetchGetUserBookingsAction() {
  try {
    const response = yield axios.get(`/profile/user/bookings`);
    if (response) {
      yield put({
        type: ActionTypes.GET_USER_BOOKINGS_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_USER_BOOKINGS_FAIL,
      message: e.response.data.message,
    });
  }
}
export function* fetchGetUserBookingByIdAction({ id }) {
  try {
    const response = yield axios.get(`/booking/${id}`);
    if (response) {
      yield put({
        type: ActionTypes.GET_USER_BOOKING_BY_ID_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_USER_BOOKING_BY_ID_FAIL,
      message: e.response.data.message,
    });
  }
}
export function* fetchSaveEmailPassw({ formData }) {
  try {
    const response = yield axios.put(`/user`, formData);
    if (response) {
      yield put({
        type: ActionTypes.SAVE_EMAIL_PASSWORD_SUCCESS,
        data: response.data.data,
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

export function* fetchChangeActive({ formData }) {
  try {
    const response = yield axios.put(`/profile/user/settings`, formData);
    if (response) {
      const {
        user: { data: oldUserData },
      } = yield select(selectGlobal);
      const userData = {
        ...oldUserData,
        ...formData,
      };
      yield put({
        type: AppActionTypes.GET_USER_INFO_SUCCESS,
        data: userData,
      });
      yield put({
        type: ActionTypes.CHANGE_ACTIVE_STATUS_SUCCESS,
        data: response.data.data,
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

export function* fetchDeleteUser({ formData }) {
  try {
    const response = yield axios.delete(`/user`, formData);
    if (response) {
      yield put({
        type: ActionTypes.DELETE_USER_SUCCESS,
        data: response.data.data,
      });
      yield put({
        type: 'LOG_OUT',
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

export function* fetchPutCancelBooking({ data: { id, data } }) {
  try {
    const response = yield axios.put(`/booking/${id}/customerCancel`);
    if (response) {
      console.log(response);
      const newData = data.slice();
      const obj = newData.find(item => item.id === id);
      obj.booking_status = 'cancelled by customer';
      yield put({
        type: ActionTypes.PUT_USER_CANCEL_BOOKING_SUCCESS,
        data: newData,
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.PUT_USER_CANCEL_BOOKING_FAIL,
      errors: e.response.data.errors,
    });
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

// All sagas to be loaded
export default function*() {
  yield takeLatest(ActionTypes.SAVE_EMAIL_PASSWORD, fetchSaveEmailPassw);
  yield takeLatest(ActionTypes.CHANGE_ACTIVE_STATUS, fetchChangeActive);
  yield takeLatest(ActionTypes.DELETE_USER, fetchDeleteUser);
  yield takeLatest(ActionTypes.GET_USER_BOOKINGS, fetchGetUserBookingsAction);
  yield takeLatest(ActionTypes.GET_USER_BOOKING_BY_ID, fetchGetUserBookingByIdAction);

  yield takeLatest(ActionTypes.PUT_USER_CANCEL_BOOKING, fetchPutCancelBooking);
}
