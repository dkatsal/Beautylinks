import { takeLatest, put } from 'redux-saga/effects';
import * as ActionTypes from './constants';
import * as AppActionTypes from '../App/constants';
import axios from '../../utils/axiosConfig';

export function* fetchGetBooking({ id }) {
  try {
    const response = yield axios.get(`/booking/${id}`);
    if (response) {
      yield put({
        type: ActionTypes.GET_PAYMENT_PROCESSING,
        id,
      });
      yield put({
        type: ActionTypes.GET_BOOKING_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_BOOKING_FAIL,
      errors: e.response.data.message,
    });
  }
}

export function* fetchGetPaymentProcessing({ id }) {
  try {
    const response = yield axios.post(`/booking/${id}/payment`);
    if (response) {
      yield put({
        type: ActionTypes.GET_PAYMENT_PROCESSING_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_PAYMENT_PROCESSING_FAIL,
      errors: e.response.data.message,
    });
  }
}

export function* fetchPutBookingCustomerCancel({ id }) {
  try {
    const response = yield axios.put(`/booking/${id}/customerCancel`, {});
    if (response) {
      yield put({
        type: ActionTypes.PUT_BOOKING_CUSTOMER_CANCEL_SUCCESS,
      });
      yield put({
        type: ActionTypes.GET_BOOKING,
        id,
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.PUT_BOOKING_CUSTOMER_CANCEL_FAIL,
      errors: e.response.data.message,
    });
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

// All sagas to be loaded
export default function*() {
  yield takeLatest(ActionTypes.GET_BOOKING, fetchGetBooking);
  yield takeLatest(ActionTypes.GET_PAYMENT_PROCESSING, fetchGetPaymentProcessing);
  yield takeLatest(ActionTypes.PUT_BOOKING_CUSTOMER_CANCEL, fetchPutBookingCustomerCancel);
}
