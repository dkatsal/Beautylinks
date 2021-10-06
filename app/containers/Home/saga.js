import { takeLatest, put } from 'redux-saga/effects';
import * as ActionTypes from './constants';
import axios from '../../utils/axiosConfig';

export function* fetchGetJustBookedAction() {
  try {
    const response = yield axios.get(`lastBooking`);
    if (response) {
      yield put({
        type: ActionTypes.GET_JUST_BOOKED_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_JUST_BOOKED_FAIL,
      data: e.response.data.message,
    });
  }
}

// All sagas to be loaded
export default function*() {
  yield takeLatest(ActionTypes.GET_JUST_BOOKED, fetchGetJustBookedAction);
}
