import { takeLatest, put } from 'redux-saga/effects';
import queryString from 'query-string';
import * as ActionTypes from './constants';
import axios from '../../../utils/axiosConfig';

// searchData = {
//   serviceType: 'care',
//   lat: ....
// };
// "serviceType": [
//   "validation.required"
// ],
// "date": [
//   "validation.required"
// ],
//   "from": [
//   "validation.required"
// ],
//   "to": [
//   "validation.required"
// ],
//   "lat": [
//   "validation.required"
// ],
//   "lon": [
//   "validation.required"
// ],
//   "locationtype": [
//   "validation.required"
// ]
export function* fetchSearchMastrs({ searchData }) {
  const searchString = queryString.stringify(searchData);
  try {
    const response = yield axios.get(`availableMasters?${searchString}`);
    if (response) {
      yield put({
        type: ActionTypes.SEARCH_AVAILABLE_MASTERS_SUCCESS,
        data: response.data.available_masters,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.SEARCH_AVAILABLE_MASTERS_FAIL,
      data: e.response.data.message,
    });
  }
}

export function* fetchGetMasterAvailableTime({ params }) {
  try {
    const response = yield axios.get(
      `/master/${params.id}/availableTime?sub_service[]=${params.sub_service}&date=${params.date}&locationtype=${params.locationtype}&additional_duration=${params.duration}`,
    );
    if (response) {
      console.log(response);
      yield put({
        type: ActionTypes.GET_MASTER_AVAILABLE_TIME_SUCCESS,
        data: !Array.isArray(response.data) ? response.data[Object.keys(response.data)[0]] : response.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_MASTER_AVAILABLE_TIME_FAIL,
      data: e.response.data.message,
    });
  }
}

// All sagas to be loaded
export default function*() {
  yield takeLatest(ActionTypes.SEARCH_AVAILABLE_MASTERS, fetchSearchMastrs);
  yield takeLatest(ActionTypes.GET_MASTER_AVAILABLE_TIME, fetchGetMasterAvailableTime);
}
