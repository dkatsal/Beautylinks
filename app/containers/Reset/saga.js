import { takeLatest, put } from 'redux-saga/effects';
import * as ActionTypes from './constants';
import axios from '../../utils/axiosConfig';
import * as AppActionTypes from '../App/constants';

export function* fetchResetPasswordWithEmail({ email }) {
  try {
    const response = yield axios.post(`/auth/resetPasswordEmail`, { email });
    if (response) {
      yield put({
        type: ActionTypes.RESET_PASSWORD_EMAIL_SUCCESS,
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

// All sagas to be loaded
export default function*() {
  yield takeLatest(ActionTypes.RESET_PASSWORD_EMAIL, fetchResetPasswordWithEmail);
}
