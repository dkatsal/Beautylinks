import { takeLatest, put, select } from 'redux-saga/effects';
import _ from 'lodash';
import axios from '../../utils/axiosConfig';
import { selectRegisterMasterPageDomain } from './selectors';
import { selectGlobal } from '../App/selectors';
import * as ActionTypes from './constants';
import * as AppActionTypes from '../App/constants';

export function* fetchPostRegister({ data }) {
  try {
    const response = yield axios.post(`/auth/user`, data);
    if (response) {
      axios.setXApiKey(response.data.token);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.user_roles);

      // yield put({
      //   type: AppActionTypes.GET_USER_INFO,
      // });
      yield put({
        type: AppActionTypes.GET_MASTER_REG_STEP,
      });
      // yield put({
      //   type: ActionTypes.POST_REGISTER_SUCCESS,
      //   data: response.data,
      // });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.POST_REGISTER_FAIL,
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
      } = yield select(selectRegisterMasterPageDomain);
      const masterServices = _.cloneDeep(oldMasterServices);
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
      } = yield select(selectRegisterMasterPageDomain);
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
      } = yield select(selectRegisterMasterPageDomain);
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

export function* fetchPostServiceRegStep() {
  try {
    const response = yield axios.post(`/master/subservices`, {});
    if (response) {
      yield put({
        type: AppActionTypes.GET_MASTER_REG_STEP,
      });
      yield put({
        type: ActionTypes.POST_SERVICES_REG_STEP_SUCCESS,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.POST_SERVICES_REG_STEP_FAIL,
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
      yield put({
        type: ActionTypes.GET_MASTER_PROFILE,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_MASTER_SERVICES_FAIL,
      errors: e.response.data.errors,
    });
  }
}

export function* fetchPostMasterLocation({ data }) {
  console.log(data)
  try {
    const response = yield axios.post(`/master/locations`, data);
    if (response) {
      yield put({
        type: AppActionTypes.GET_MASTER_REG_STEP,
      });
      yield put({
        type: ActionTypes.GET_MASTER_PROFILE,
      });
      yield put({
        type: ActionTypes.POST_MASTER_LOCATION_SUCCESS,
      });
      // FINISH REGISTRATION (In case of thre rediction of the registration)
      yield put({
        type: AppActionTypes.GET_USER_INFO,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.POST_MASTER_LOCATION_FAIL,
      errors: e.response.data.errors,
    });
    yield put({
      type: AppActionTypes.OPEN_ERROR_NOTIFICATION,
      data: e.response.data.message,
    });
  }
}

export function* fetchGetMasterProfile() {
  try {
    const response = yield axios.get(`/profile/master/profile`);
    if (response) {
      yield put({
        type: ActionTypes.GET_MASTER_PROFILE_SUCCESS,
        data: response.data,
      });
      yield put({
        type: ActionTypes.GET_MASTER_INFO,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_MASTER_PROFILE_FAIL,
      errors: e.response.data.errors,
    });
  }
}

export function* fetchGetMasterInfo() {
  try {
    const {
      masterProfile: {
        data: { id },
      },
    } = yield select(selectRegisterMasterPageDomain);
    const response = yield axios.get(`/master/${id}/info`);
    if (response) {
      if (response.data.work_location_types.salon) {
        yield put({
          type: ActionTypes.GET_MASTER_SALONS,
        });
      }
      yield put({
        type: ActionTypes.GET_MASTER_INFO_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.GET_MASTER_INFO_FAIL,
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

export function* fetchPostMasterAvailability({ data }) {
  try {
    const response = yield axios.post(`/master/availability`, data);
    if (response) {
      yield put({
        type: AppActionTypes.GET_MASTER_REG_STEP,
      });
      yield put({
        type: ActionTypes.POST_MASTER_AVAILABILITY_SUCCESS,
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.POST_MASTER_AVAILABILITY_FAIL,
      errors: e.response.data.errors,
    });
  }
}

export function* fetchPostMasterTrustAndSafety({ data: { images, data } }) {
  try {
    const response = yield axios.post(`/master/trustAndSafety`, data);
    if (response) {
      yield put({
        type: AppActionTypes.GET_MASTER_REG_STEP,
      });
      yield put({
        type: ActionTypes.POST_MASTER_TRUST_SUCCESS,
      });
      if (images.length) {
        yield put({
          type: ActionTypes.POST_MASTER_IMAGES,
          images,
        });
      }
    }
  } catch (e) {
    yield put({
      type: ActionTypes.POST_MASTER_TRUST_FAIL,
      errors: e.response.data.errors,
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
    }
  } catch (e) {
    yield put({
      type: ActionTypes.POST_MASTER_IMAGES_FAIL,
      errors: e.response.data.errors,
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
    }
  } catch (e) {
    yield put({
      type: ActionTypes.POST_MASTER_AVATAR_FAIL,
      errors: e.response.data.errors,
    });
  }
}

// All sagas to be loaded
export default function*() {
  yield takeLatest(ActionTypes.POST_REGISTER, fetchPostRegister);
  yield takeLatest(ActionTypes.POST_SERVICES_REG_STEP, fetchPostServiceRegStep);
  yield takeLatest(ActionTypes.POST_MASTER_SERVICE, fetchPostMasterService);
  yield takeLatest(ActionTypes.PUT_MASTER_SERVICE, fetchPutMasterService);
  yield takeLatest(ActionTypes.DELETE_MASTER_SERVICE, fetchDeleteService);
  yield takeLatest(ActionTypes.GET_MASTER_SERVICES, fetchGetMasterServices);
  yield takeLatest(ActionTypes.POST_MASTER_LOCATION, fetchPostMasterLocation);
  yield takeLatest(ActionTypes.GET_MASTER_PROFILE, fetchGetMasterProfile);
  yield takeLatest(ActionTypes.GET_MASTER_INFO, fetchGetMasterInfo);
  yield takeLatest(ActionTypes.GET_MASTER_SALONS, fetchGetMasterSalons);
  yield takeLatest(ActionTypes.POST_MASTER_AVAILABILITY, fetchPostMasterAvailability);
  yield takeLatest(ActionTypes.POST_MASTER_TRUST, fetchPostMasterTrustAndSafety);
  yield takeLatest(ActionTypes.POST_MASTER_IMAGES, fetchPostMasterImages);
  yield takeLatest(ActionTypes.POST_MASTER_AVATAR, fetchPostMasterAvatar);
}
