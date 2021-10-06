import { takeLatest, put } from 'redux-saga/effects';
import * as ActionTypes from './constants';
import * as AppActionTypes from '../App/constants';
import axios from '../../utils/axiosConfig';

export function* fetchPostCustomerFeedbackAction({ data, bookingId }) {
  try {
    const response = yield axios.post(`/profile/user/booking/${bookingId}/review`, data);
    if (response) {
      yield put({
        type: ActionTypes.POST_CUSTOMER_FEEDBACK_SUCCESS,
        data: response.data.data,
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.POST_CUSTOMER_FEEDBACK_FAIL,
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
  yield takeLatest(ActionTypes.POST_CUSTOMER_FEEDBACK, fetchPostCustomerFeedbackAction);
}
