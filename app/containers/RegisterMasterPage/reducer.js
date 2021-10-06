/*
 *
 * RegisterMasterPage reducer
 *
 */
import produce from 'immer';
import * as ActionTypes from './constants';

export const initialState = {
  registerData: {
    data: {},
    loading: false,
    errors: {},
  },
  masterServices: {
    data: [],
    loading: false,
    errors: {},
  },
  postServicesData: {
    loading: false,
    errors: {},
  },
  putServicesData: {
    loading: false,
    errors: {},
  },
  deleteServicesData: {
    loading: false,
    errors: {},
  },
  postServicesRegStep: {
    loading: false,
    errors: {},
  },
  masterProfile: {
    data: {},
    loading: false,
    errors: {},
  },
  masterInfo: {
    data: {},
    loading: false,
    errors: {},
  },
  masterSalons: {
    data: {},
    loading: false,
    errors: {},
  },
  masterAvatar: {
    data: {},
    loading: false,
    errors: {},
  },
};

/* eslint-disable default-case, no-param-reassign */
const registerMasterPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'CLEAR':
        draft = Object.assign(initialState);
        break;
      case ActionTypes.POST_REGISTER:
        draft.registerData.loading = true;
        break;
      case ActionTypes.POST_REGISTER_SUCCESS:
        draft.registerData.loading = false;
        draft.registerData.data = action.data;
        break;
      case ActionTypes.POST_REGISTER_FAIL:
        draft.registerData.loading = false;
        draft.registerData.errors = action.errors;
        break;

      case ActionTypes.GET_MASTER_SERVICES:
        draft.masterServices.loading = true;
        break;
      case ActionTypes.GET_MASTER_SERVICES_SUCCESS:
        draft.masterServices.loading = false;
        draft.masterServices.data = action.data;
        break;
      case ActionTypes.GET_MASTER_SERVICES_FAIL:
        draft.masterServices.loading = false;
        draft.masterServices.errors = action.errors;
        break;

      case ActionTypes.POST_MASTER_SERVICE:
        draft.postServicesData.loading = true;
        break;
      case ActionTypes.POST_MASTER_SERVICE_SUCCESS:
        draft.postServicesData.loading = false;
        draft.masterServices.data = action.data;
        break;
      case ActionTypes.POST_MASTER_SERVICE_FAIL:
        draft.postServicesData.loading = false;
        draft.postServicesData.errors = action.errors;
        break;

      case ActionTypes.PUT_MASTER_SERVICE:
        draft.putServicesData.loading = true;
        break;
      case ActionTypes.PUT_MASTER_SERVICE_SUCCESS:
        draft.putServicesData.loading = false;
        draft.masterServices.data = action.data;
        break;
      case ActionTypes.PUT_MASTER_SERVICE_FAIL:
        draft.putServicesData.loading = false;
        draft.putServicesData.errors = action.errors;
        break;

      case ActionTypes.DELETE_MASTER_SERVICE:
        draft.deleteServicesData.loading = true;
        break;
      case ActionTypes.DELETE_MASTER_SERVICE_SUCCESS:
        draft.deleteServicesData.loading = false;
        draft.masterServices.data = action.data;
        break;
      case ActionTypes.DELETE_MASTER_SERVICE_FAIL:
        draft.deleteServicesData.loading = false;
        draft.deleteServicesData.errors = action.errors;
        break;

      case ActionTypes.POST_SERVICES_REG_STEP:
        draft.postServicesRegStep.loading = true;
        break;
      case ActionTypes.POST_SERVICES_REG_STEP_SUCCESS:
        draft.postServicesRegStep.loading = false;
        break;
      case ActionTypes.POST_SERVICES_REG_STEP_FAIL:
        draft.postServicesRegStep.loading = false;
        draft.postServicesRegStep.errors = action.errors;
        break;

      case ActionTypes.GET_MASTER_PROFILE:
        draft.masterProfile.loading = true;
        break;
      case ActionTypes.GET_MASTER_PROFILE_SUCCESS:
        draft.masterProfile.loading = false;
        draft.masterProfile.data = action.data;
        break;
      case ActionTypes.GET_MASTER_PROFILE_FAIL:
        draft.masterProfile.loading = false;
        draft.masterProfile.errors = action.errors;
        break;

      case ActionTypes.GET_MASTER_INFO:
        draft.masterInfo.loading = true;
        break;
      case ActionTypes.GET_MASTER_INFO_SUCCESS:
        draft.masterInfo.loading = false;
        draft.masterInfo.data = action.data;
        break;
      case ActionTypes.GET_MASTER_INFO_FAIL:
        draft.masterInfo.loading = false;
        draft.masterInfo.errors = action.errors;
        break;

      case ActionTypes.GET_MASTER_SALONS:
        draft.masterSalons.loading = true;
        break;
      case ActionTypes.GET_MASTER_SALONS_SUCCESS:
        draft.masterSalons.loading = false;
        draft.masterSalons.data = action.data;
        break;
      case ActionTypes.GET_MASTER_SALONS_FAIL:
        draft.masterSalons.loading = false;
        draft.masterSalons.errors = action.errors;
        break;

      case ActionTypes.POST_MASTER_AVATAR:
        draft.masterAvatar.loading = true;
        break;
      case ActionTypes.POST_MASTER_AVATAR_SUCCESS:
        draft.masterAvatar.loading = false;
        draft.masterAvatar.data = action.data;
        break;
      case ActionTypes.POST_MASTER_AVATAR_FAIL:
        draft.masterAvatar.loading = false;
        draft.masterAvatar.errors = action.errors;
        break;
    }
  });

export default registerMasterPageReducer;
