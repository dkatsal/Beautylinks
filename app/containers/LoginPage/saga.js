import { takeLatest, put } from 'redux-saga/effects';
import * as ActionTypes from './constants';
import * as AppActionTypes from '../App/constants';
import axios from '../../utils/axiosConfig';

export function* fetchLoginUser({ data }) {
  try {
    const response = yield axios.post(`auth/user/login`, data);
    if (response) {
      axios.setXApiKey(response.data.token);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.roles);

      yield put({
        type: AppActionTypes.GET_USER_INFO,
      });
      yield put({
        type: ActionTypes.LOGIN_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.LOGIN_FAIL,
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
  yield takeLatest(ActionTypes.LOGIN, fetchLoginUser);
}
