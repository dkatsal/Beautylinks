import { takeLatest, put } from 'redux-saga/effects';
import * as ActionTypes from './constants';
import axios from '../../utils/axiosConfig';
import * as appActions from '../App/constants';
export function* fetchUpdateUserInfo({ data }) {
  try {
    const response = yield axios.put(`/user`,data);
    if (response) {
      yield put({
        type: ActionTypes.UPDATE_USER_INFO_SUCCESS,
        data: response.data.data,
      });
      yield put({
        type: appActions.GET_USER_INFO,
        data: response.data.data,
      });
      yield put({
        type: appActions.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.UPDATE_USER_INFO_FAIL,
      data: e.response.data.message,
    });
  }
}

// All sagas to be loaded
export default function*() {
  yield takeLatest(ActionTypes.UPDATE_USER_INFO, fetchUpdateUserInfo);
}
