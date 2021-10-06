import { takeLatest, put } from 'redux-saga/effects';
import * as ActionTypes from './constants';
import axios from '../../utils/axiosConfig';

export function* fetchGetDefault() {
  try {
    const response = yield axios.get(`url`);
    if (response) {
      yield put({
        type: ActionTypes.DEFAULT_ACTION_SUCCESS,
        data: response.data.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.DEFAULT_ACTION_FAIL,
      data: e.response.data.message,
    });
  }
}

// All sagas to be loaded
export default function*() {
  yield takeLatest(ActionTypes.DEFAULT_ACTION, fetchGetDefault);
}
