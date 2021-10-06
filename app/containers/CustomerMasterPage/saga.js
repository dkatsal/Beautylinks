import { takeLatest, put, select, all, call } from 'redux-saga/effects';
import _ from 'lodash';
import * as ActionTypes from './constants';
import axios from '../../utils/axiosConfig';
import { selectCustomerMasterPageDomain } from './selectors';
import { selectGlobal } from '../App/selectors';
import * as AppActionTypes from '../App/constants';

export function* fetchGetMasterReviews({ id }) {
  try {
    const response = yield axios.get(`/master/${id}/reviews`);
    if (response) {
      yield put({
        type: ActionTypes.GET_MASTER_REVIEWS_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_MASTER_REVIEWS_FAIL,
      data: e.response.data.message,
    });
  }
}

export function* fetchGetMasterStatistic() {
  try {
    const response = yield axios.get(`/profile/master/statistic-by-profile`);
    if (response) {
      yield put({
        type: ActionTypes.GET_MASTER_STATISTIC_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_MASTER_STATISTIC_FAIL,
      data: e.response.data.message,
    });
  }
}

export function* fetchGetMasterBooking() {
  try {
    const response = yield axios.get(`/profile/master/bookings`);
    if (response) {
      yield put({
        type: ActionTypes.GET_MASTER_BOOKING_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_MASTER_BOOKING_FAIL,
      data: e.response.data.message,
    });
  }
}

export function* fetchGetMasterBookingCalendar({ query }) {
  console.log(query)
  try {
    const response = yield axios.get(`/profile/master/calendar/bookings${query}`);
    if (response) {
      const data = _.size(response.data) ? response.data : { salon: {}, mobile: {} };
      yield put({
        type: ActionTypes.GET_MASTER_BOOKING_CALENDAR_SUCCESS,
        data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_MASTER_BOOKING_CALENDAR_FAIL,
      data: e.response.data.message,
    });
  }
}

export function* fetchGetMasterLocation() {
  try {
    const response = yield axios.get(`/profile/master/locationtypes`);
    if (response) {
      yield put({
        type: ActionTypes.GET_MASTER_LOCATION_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_MASTER_LOCATION_FAIL,
      data: e.response.data.message,
    });
  }
}

export function* fetchGetMasterAvailability() {
  try {
    const response = yield axios.get(`profile/master/availability`);
    if (response) {
      yield put({
        type: ActionTypes.GET_MASTER_AVAILABILITY_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_MASTER_AVAILABILITY_FAIL,
      data: e.response.data.message,
    });
  }
}

export function* fetchGetMasterProfile() {
  try {
    const response = yield axios.get(`/profile/master/profile`);
    if (response) {
      const {
        data: { id },
      } = response;
      if (id) {
        yield put({
          type: ActionTypes.GET_MASTER_REVIEWS,
          id,
        });
      }
      yield put({
        type: ActionTypes.GET_MASTER_STATISTIC,
      });
      yield put({
        type: ActionTypes.GET_MASTER_BOOKING,
      });
      yield put({
        type: ActionTypes.GET_MASTER_BOOKING_CALENDAR,
        query: '',
      });
      yield put({
        type: ActionTypes.GET_MASTER_AVAILABILITY,
      });
      yield put({
        type: ActionTypes.GET_MASTER_SERVICES,
      });
      yield put({
        type: ActionTypes.GET_MASTER_LOCATION,
      });
      yield put({
        type: ActionTypes.GET_MASTER_IMAGES,
      });
      yield put({
        type: ActionTypes.GET_MASTER_SALONS,
      });
      yield put({
        type: ActionTypes.GET_MASTER_CERT_IMAGES,
      });
      yield put({
        type: ActionTypes.GET_MASTER_PROFILE_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_MASTER_PROFILE_FAIL,
      errors: e.response.data.errors,
    });
  }
}

export function* fetchGetMasterSalons() {
  try {
    const response = yield axios.get(`/master/salons`);
    if (response) {
      yield put({
        type: ActionTypes.GET_MASTER_SALONS_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_MASTER_SALONS_FAIL,
      errors: e.response.data.errors,
    });
  }
}

export function* fetchGetMasterServices() {
  try {
    const response = yield axios.get(`/profile/master/services`);
    if (response) {
      yield put({
        type: ActionTypes.GET_MASTER_SERVICES_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_MASTER_SERVICES_FAIL,
      errors: e.response.data.errors,
    });
  }
}

export function* fetchPostMasterService({ data }) {
  try {
    const response = yield axios.post(`/profile/master/service`, data);
    if (response) {
      const {
        masterServices: { data: oldMasterServices },
      } = yield select(selectCustomerMasterPageDomain);
      const masterServices = oldMasterServices ? _.cloneDeep(oldMasterServices) : [];
      masterServices.push(data);
      yield put({
        type: ActionTypes.POST_MASTER_SERVICE_SUCCESS,
        data: masterServices,
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.POST_MASTER_SERVICE_FAIL,
      errors: e.response.data.errors,
    });
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

export function* fetchPutMasterService({ data }) {
  try {
    const response = yield axios.put(`/profile/master/service`, data);
    if (response) {
      const {
        masterServices: { data: oldMasterServices },
      } = yield select(selectCustomerMasterPageDomain);
      const masterServices = _.cloneDeep(oldMasterServices);
      const index = _.findIndex(masterServices, { sub_service_id: data.sub_service_id });
      masterServices.splice(index, 1, data);
      yield put({
        type: ActionTypes.PUT_MASTER_SERVICE_SUCCESS,
        data: masterServices,
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.PUT_MASTER_SERVICE_FAIL,
      errors: e.response.data.errors,
    });
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

export function* fetchDeleteService({ data }) {
  try {
    const response = yield axios.delete(`/profile/master/service`, { data });
    if (response) {
      const {
        masterServices: { data: oldMasterServices },
      } = yield select(selectCustomerMasterPageDomain);
      const masterServices = _.cloneDeep(oldMasterServices);
      const index = _.findIndex(masterServices, { sub_service_id: data.sub_service_id });
      masterServices.splice(index, 1);
      yield put({
        type: ActionTypes.DELETE_MASTER_SERVICE_SUCCESS,
        data: masterServices,
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.DELETE_MASTER_SERVICE_FAIL,
      errors: e.response.data.errors,
    });
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

export function* fetchPutMasterAvailability({ data }) {
  try {
    const response = yield axios.put(`/profile/master/availability`, data);
    if (response) {
      yield put({
        type: ActionTypes.PUT_MASTER_AVAILABILITY_SUCCESS,
        data,
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.PUT_MASTER_AVAILABILITY_FAIL,
      errors: e.response.data.errors,
    });
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

export function* fetchPutMasterLocationTypes({ data }) {
  try {
    const response = yield axios.put(`/profile/master/locationtypes`, data);
    if (response) {
      const {
        masterLocation: { data: oldMasterLocation },
      } = yield select(selectCustomerMasterPageDomain);
      const masterLocation = {
        ...oldMasterLocation,
        ...data,
      };
      yield put({
        type: ActionTypes.PUT_MASTER_LOCATION_TYPES_SUCCESS,
        data: masterLocation,
      });
      yield put({
        type: ActionTypes.GET_MASTER_AVAILABILITY,
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.PUT_MASTER_LOCATION_TYPES_FAIL,
      errors: e.response.data.errors,
    });
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

export function* fetchGetMasterImages() {
  try {
    const response = yield axios.get(`/master/images`);
    if (response) {
      yield put({
        type: ActionTypes.GET_MASTER_IMAGES_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_MASTER_IMAGES_FAIL,
      errors: e.response.data.errors,
    });
  }
}

export function* fetchDeleteMasterImage({ image }) {
  try {
    const response = yield axios.delete(`/master/images/${image}`);
    if (response) {
      const {
        masterImages: { data: oldMasterImages },
      } = yield select(selectCustomerMasterPageDomain);
      const masterImages = _.cloneDeep(oldMasterImages);
      const index = _.findIndex(masterImages, { id: image });
      masterImages.splice(index, 1);
      yield put({
        type: ActionTypes.DELETE_MASTER_IMAGE_SUCCESS,
        data: masterImages,
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.DELETE_MASTER_IMAGE_FAIL,
      errors: e.response.data.errors,
    });
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

export function* fetchPostMasterImages({ images }) {
  const data = new FormData();
  for (let i = 0; i < images.length; i += 1) {
    data.set(`file${i}`, images[i]);
  }
  try {
    const response = yield axios.post(`/master/images`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    if (response) {
      yield put({
        type: ActionTypes.POST_MASTER_IMAGES_SUCCESS,
      });
      yield put({
        type: ActionTypes.GET_MASTER_IMAGES,
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.POST_MASTER_IMAGES_FAIL,
      errors: e.response.data.errors,
    });
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

export function* fetchPostMasterAvatar({ data }) {
  const file = new FormData();
  file.set('profileImage', data);
  try {
    const response = yield axios.post(`/master/avatar`, file, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    if (response) {
      const {
        user: { data: oldUserData },
      } = yield select(selectGlobal);
      const userData = _.cloneDeep(oldUserData);
      userData.avatar = response.data.src;
      yield put({
        type: ActionTypes.POST_MASTER_AVATAR_SUCCESS,
        data: response.data,
      });
      yield put({
        type: AppActionTypes.GET_USER_INFO_SUCCESS,
        data: userData,
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.POST_MASTER_AVATAR_FAIL,
      errors: e.response.data.errors,
    });
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

export function* fetchPutUserProfile({ data }) {
  try {
    const response = yield axios.put(`/user`, data);
    if (response) {
      const {
        user: { data: oldUserData },
      } = yield select(selectGlobal);
      const saveData = _.omit(data, ['old_password', 'password', 'password_confirmation']);
      const userData = {
        ...oldUserData,
        ...saveData,
      };
      yield put({
        type: ActionTypes.PUT_USER_PROFILE_SUCCESS,
      });
      yield put({
        type: AppActionTypes.GET_USER_INFO_SUCCESS,
        data: userData,
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.PUT_USER_PROFILE_FAIL,
      errors: e.response.data.errors,
    });
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

export function* fetchPutMasterProfile({ data }) {
  try {
    const response = yield axios.put(`/profile/master/profile`, data);
    if (response) {
      const {
        profile: { data: oldProfile },
      } = yield select(selectCustomerMasterPageDomain);
      const profile = {
        ...oldProfile,
        ...data,
      };
      yield put({
        type: ActionTypes.PUT_MASTER_PROFILE_SUCCESS,
      });
      yield put({
        type: ActionTypes.GET_MASTER_PROFILE_SUCCESS,
        data: profile,
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.PUT_MASTER_PROFILE_FAIL,
      errors: e.response.data.errors,
    });
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

export function* fetchGetMasterCertImages() {
  try {
    const response = yield axios.get(`/master/cert_images`);
    if (response) {
      yield put({
        type: ActionTypes.GET_MASTER_CERT_IMAGES_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_MASTER_CERT_IMAGES_FAIL,
      errors: e.response.data.errors,
    });
  }
}

export function* fetchDeleteMasterCertImage({ image }) {
  try {
    const response = yield axios.delete(`/master/cert_images/${image}`);
    if (response) {
      const {
        masterCertImages: { data: oldMasterCertImages },
      } = yield select(selectCustomerMasterPageDomain);
      const masterCertImages = _.cloneDeep(oldMasterCertImages);
      const index = _.findIndex(masterCertImages, { id: image });
      masterCertImages.splice(index, 1);
      yield put({
        type: ActionTypes.DELETE_MASTER_CERT_IMAGE_SUCCESS,
        data: masterCertImages,
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.DELETE_MASTER_CERT_IMAGE_FAIL,
      errors: e.response.data.errors,
    });
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

export function* fetchPostMasterCertImages({ images }) {
  const data = new FormData();
  for (let i = 0; i < images.length; i += 1) {
    data.set(`file${i}`, images[i]);
  }
  try {
    const response = yield axios.post(`/master/cert_images`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    if (response) {
      yield put({
        type: ActionTypes.POST_MASTER_CERT_IMAGES_SUCCESS,
      });
      yield put({
        type: ActionTypes.GET_MASTER_CERT_IMAGES,
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.POST_MASTER_CERT_IMAGES_FAIL,
      errors: e.response.data.errors,
    });
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

export function* fetchPutUserStatus({ data }) {
  try {
    const response = yield axios.put(`/profile/user/settings`, data);
    if (response) {
      const {
        user: { data: oldUserData },
      } = yield select(selectGlobal);
      const userData = {
        ...oldUserData,
        ...data,
      };
      yield put({
        type: AppActionTypes.GET_USER_INFO_SUCCESS,
        data: userData,
      });
      yield put({
        type: ActionTypes.PUT_USER_STATUS_SUCCESS,
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.PUT_USER_STATUS_FAIL,
      errors: e.response.data.errors,
    });
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

export function* fetchPostInvites({ data }) {
  yield all(_.map(data, email => call(fetchPostInvite, { email })));
}

export function* fetchPostInvite(data) {
  try {
    const response = yield axios.post(`/invite`, data);
    if (response) {
      yield put({
        type: ActionTypes.POST_INVITE_SUCCESS,
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.POST_INVITE_FAIL,
      errors: e.response.data.errors,
    });
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

export function* fetchPutCancelBooking({data: {id, data}}) {
  try {
    const response = yield axios.put(`/booking/${id}/masterCancel`);
    if (response) {
      console.log(response);
      const newData = data.slice();
      const obj = newData.find(item => item.id === id);
      obj.booking_status = "cancelled by master";
      yield put({
        type: ActionTypes.PUT_MASTER_CANCEL_BOOKING_SUCCESS,
        data: newData,
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.PUT_MASTER_CANCEL_BOOKING_FAIL,
      errors: e.response.data.errors,
    });
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

// TODO: REMOVE NAFIG
export function* fetchSaveCard({ data }) {
  try {
    const response = yield axios.put(`/profile/master/profile`, data);
    if (response) {
      yield put({
        type: ActionTypes.SAVE_CARD_SUCCESS,
      });
      yield put({
        type: ActionTypes.GET_MASTER_PROFILE,
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.SAVE_CARD_FAIL,
      errors: e.response.data.errors,
    });
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

export function* fetchDeleteMaster() {
  try {
    const response = yield axios.delete(`/profile/master/account`);
    if (response) {
      yield put({
        type: ActionTypes.DELETE_MASTER_SUCCESS,
        data: response.data.data,
      });
      yield put({
        type: 'LOG_OUT',
      });
      yield put({
        type: AppActionTypes.OPEN_NOTIFICATION,
        data: response.data.message || 'Ваш аккаунт мастера был удален',
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.DELETE_MASTER_FAIL,
      data: response.data.data,
    });
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}
// All sagas to be loaded
export default function*() {
  yield takeLatest(ActionTypes.SAVE_CARD, fetchSaveCard);
  yield takeLatest(ActionTypes.GET_MASTER_STATISTIC, fetchGetMasterStatistic);
  yield takeLatest(ActionTypes.GET_MASTER_BOOKING, fetchGetMasterBooking);
  yield takeLatest(ActionTypes.GET_MASTER_BOOKING_CALENDAR, fetchGetMasterBookingCalendar);
  yield takeLatest(ActionTypes.GET_MASTER_AVAILABILITY, fetchGetMasterAvailability);
  yield takeLatest(ActionTypes.GET_MASTER_PROFILE, fetchGetMasterProfile);
  yield takeLatest(ActionTypes.GET_MASTER_REVIEWS, fetchGetMasterReviews);
  yield takeLatest(ActionTypes.GET_MASTER_LOCATION, fetchGetMasterLocation);
  yield takeLatest(ActionTypes.GET_MASTER_SERVICES, fetchGetMasterServices);
  yield takeLatest(ActionTypes.POST_MASTER_SERVICE, fetchPostMasterService);
  yield takeLatest(ActionTypes.PUT_MASTER_SERVICE, fetchPutMasterService);
  yield takeLatest(ActionTypes.DELETE_MASTER_SERVICE, fetchDeleteService);
  yield takeLatest(ActionTypes.PUT_MASTER_AVAILABILITY, fetchPutMasterAvailability);
  yield takeLatest(ActionTypes.PUT_MASTER_LOCATION_TYPES, fetchPutMasterLocationTypes);
  yield takeLatest(ActionTypes.POST_MASTER_AVATAR, fetchPostMasterAvatar);
  yield takeLatest(ActionTypes.GET_MASTER_IMAGES, fetchGetMasterImages);
  yield takeLatest(ActionTypes.POST_MASTER_IMAGES, fetchPostMasterImages);
  yield takeLatest(ActionTypes.DELETE_MASTER_IMAGE, fetchDeleteMasterImage);
  yield takeLatest(ActionTypes.GET_MASTER_CERT_IMAGES, fetchGetMasterCertImages);
  yield takeLatest(ActionTypes.POST_MASTER_CERT_IMAGES, fetchPostMasterCertImages);
  yield takeLatest(ActionTypes.DELETE_MASTER_CERT_IMAGE, fetchDeleteMasterCertImage);
  yield takeLatest(ActionTypes.PUT_USER_PROFILE, fetchPutUserProfile);
  yield takeLatest(ActionTypes.PUT_USER_STATUS, fetchPutUserStatus);
  yield takeLatest(ActionTypes.POST_INVITE, fetchPostInvites);
  yield takeLatest(ActionTypes.PUT_MASTER_PROFILE, fetchPutMasterProfile);
  yield takeLatest(ActionTypes.GET_MASTER_SALONS, fetchGetMasterSalons);
  yield takeLatest(ActionTypes.PUT_MASTER_CANCEL_BOOKING, fetchPutCancelBooking);
  yield takeLatest(ActionTypes.DELETE_MASTER, fetchDeleteMaster);
}
