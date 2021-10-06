import { takeLatest, put } from 'redux-saga/effects';
import * as ActionTypes from './constants';
import axios from '../../utils/axiosConfig';
import * as AppActionTypes from "../App/constants";

export function* clientRegister({ data }) {
  try {
    const response = yield axios.post(`auth/user`, data);
    if (response) {
      axios.setXApiKey(response.data.token);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.roles);

      yield put({
        type: ActionTypes.CLIENT_REGISTER_SUCCESS,
        data: response.data,
      });
      yield put({
        type: AppActionTypes.GET_USER_INFO,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.CLIENT_REGISTER_FAIL,
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
  yield takeLatest(ActionTypes.CLIENT_REGISTER, clientRegister);
}
