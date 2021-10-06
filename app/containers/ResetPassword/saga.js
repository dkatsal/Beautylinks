import { takeLatest, put } from 'redux-saga/effects';
import * as ActionTypes from './constants';
import axios from '../../utils/axiosConfig';
import * as AppActionTypes from '../App/constants';

export function* fetchResetPassword({ formData }) {
  try {
    const response = yield axios.post(`/auth/resetPassword`, formData);
    if (response) {
      yield put({
        type: ActionTypes.RESET_PASSWORD_SUCCESS,
        data: response.data.data,
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    const { password, token } = e.response.data.errors;
    const { message } = e.response.data;
    let errorMessage = [];
    if (password) {
      errorMessage = password;
    } else if (token) {
      errorMessage = token;
    } else {
      errorMessage.push(message);
    }

    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: errorMessage[0],
    });
  }
}

// All sagas to be loaded
export default function*() {
  yield takeLatest(ActionTypes.RESET_PASSWORD, fetchResetPassword);
}
