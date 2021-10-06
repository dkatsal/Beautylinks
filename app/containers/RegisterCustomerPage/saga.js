import { takeLatest, put } from 'redux-saga/effects';
import * as ActionTypes from './constants';
import * as AppActionTypes from '../App/constants';
import axios from '../../utils/axiosConfig';

export function* userExists({ data }) {
  try {
    const response = yield axios.get(`auth/userExists?email=${data.email}`);
    if (response) {
      yield put({
        type: ActionTypes.USER_EXISTS_SUCCESS,
        data: { status: true },
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.USER_EXISTS_FAIL,
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
  yield takeLatest(ActionTypes.USER_EXISTS, userExists);
}
