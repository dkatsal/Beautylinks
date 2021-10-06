/*
 *
 * CustomerMasterPage reducer
 *
 */
import produce from 'immer';
import * as ActionTypes from './constants';

export const initialState = {
  availability: {
    loading: false,
    loaded: false,
    data: {},
    error: null,
  },
  putAvailability: {
    loading: false,
    errors: {},
  },
  profile: {
    loading: false,
    loaded: false,
    data: null,
    error: null,
  },
  masterServices: {
    loading: false,
    loaded: false,
    data: null,
    error: null,
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
  masterStatistic: {
    data: {},
    loading: false,
    loaded: false,
    errors: {},
  },
  masterBooking: {
    data: [],
    loading: false,
    loaded: false,
    errors: {},
  },
  masterBookingCalendar: {
    data: {},
    loading: false,
    loaded: false,
    errors: {},
  },
  masterReviews: {
    data: {},
    loading: false,
    loaded: false,
    errors: {},
  },
  masterLocation: {
    data: {},
    loading: false,
    loaded: false,
    errors: {},
  },
  putLocation: {
    loading: false,
    loaded: false,
    errors: {},
  },
  masterImages: {
    data: [],
    loading: false,
    loaded: false,
    errors: {},
  },
  deleteImage: {
    loading: false,
    loaded: false,
    errors: {},
  },
  postImages: {
    loading: false,
    loaded: false,
    errors: {},
  },
  postAvatar: {
    loading: false,
    loaded: false,
    errors: {},
  },
  masterCertImages: {
    data: [],
    loading: false,
    loaded: false,
    errors: {},
  },
  deleteCertImage: {
    loading: false,
    loaded: false,
    errors: {},
  },
  postCertImages: {
    loading: false,
    loaded: false,
    errors: {},
  },
  putUserProfile: {
    loading: false,
    loaded: false,
    errors: {},
  },
  putStatusData: {
    loading: false,
    loaded: false,
    errors: {},
  },
  masterSalons: {
    loading: false,
    loaded: false,
    errors: {},
  },
  deleteMaster: {
    loading: false,
    loaded: false,
    errors: {},
  },
};

/* eslint-disable default-case, no-param-reassign */
const customerMasterPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.GET_MASTER_AVAILABILITY:
        draft.availability.loading = true;
        break;
      case ActionTypes.GET_MASTER_AVAILABILITY_SUCCESS:
        draft.availability.loading = false;
        draft.availability.loaded = true;
        draft.availability.data = action.data;
        break;
      case ActionTypes.GET_MASTER_AVAILABILITY_FAIL:
        draft.availability.loading = false;
        draft.availability.loaded = false;
        draft.availability.error = action.data;
        break;
      case ActionTypes.GET_MASTER_STATISTIC:
        draft.masterStatistic.loading = true;
        break;
      case ActionTypes.GET_MASTER_STATISTIC_SUCCESS:
        draft.masterStatistic.loading = false;
        draft.masterStatistic.loaded = true;
        draft.masterStatistic.data = action.data;
        break;
      case ActionTypes.GET_MASTER_STATISTIC_FAIL:
        draft.masterStatistic.loading = false;
        draft.masterStatistic.loaded = false;
        draft.masterStatistic.error = action.data;
        break;
      case ActionTypes.GET_MASTER_BOOKING:
        draft.masterBooking.loading = true;
        break;
      case ActionTypes.GET_MASTER_BOOKING_SUCCESS:
        draft.masterBooking.loading = false;
        draft.masterBooking.loaded = true;
        draft.masterBooking.data = action.data;
        break;
      case ActionTypes.GET_MASTER_BOOKING_FAIL:
        draft.masterBooking.loading = false;
        draft.masterBooking.loaded = false;
        draft.masterBooking.error = action.data;
        break;

      case ActionTypes.GET_MASTER_BOOKING_CALENDAR:
        draft.masterBookingCalendar.loading = true;
        break;
      case ActionTypes.GET_MASTER_BOOKING_CALENDAR_SUCCESS:
        draft.masterBookingCalendar.loading = false;
        draft.masterBookingCalendar.loaded = true;
        draft.masterBookingCalendar.data = action.data;
        break;
      case ActionTypes.GET_MASTER_BOOKING_CALENDAR_FAIL:
        draft.masterBookingCalendar.loading = false;
        draft.masterBookingCalendar.loaded = false;
        draft.masterBookingCalendar.error = action.data;
        break;

      case ActionTypes.GET_MASTER_REVIEWS:
        draft.masterReviews.loading = true;
        break;
      case ActionTypes.GET_MASTER_REVIEWS_SUCCESS:
        draft.masterReviews.loading = false;
        draft.masterReviews.loaded = true;
        draft.masterReviews.data = action.data;
        break;
      case ActionTypes.GET_MASTER_REVIEWS_FAIL:
        draft.masterReviews.loading = false;
        draft.masterReviews.loaded = false;
        draft.masterReviews.error = action.data;
        break;
      case ActionTypes.GET_MASTER_LOCATION:
        draft.masterLocation.loading = true;
        break;
      case ActionTypes.GET_MASTER_LOCATION_SUCCESS:
        draft.masterLocation.loading = false;
        draft.masterLocation.loaded = true;
        draft.masterLocation.data = action.data;
        break;
      case ActionTypes.GET_MASTER_LOCATION_FAIL:
        draft.masterLocation.loading = false;
        draft.masterLocation.loaded = false;
        draft.masterLocation.error = action.data;
        break;
      case ActionTypes.PUT_MASTER_AVAILABILITY:
        draft.putAvailability.loading = true;
        break;
      case ActionTypes.PUT_MASTER_AVAILABILITY_SUCCESS:
        draft.putAvailability.loading = false;
        draft.availability.data = action.data;
        break;
      case ActionTypes.PUT_MASTER_AVAILABILITY_FAIL:
        draft.putAvailability.loading = false;
        draft.putAvailability.error = action.data;
        break;

      case ActionTypes.GET_MASTER_PROFILE:
        draft.profile.loading = true;
        break;
      case ActionTypes.GET_MASTER_PROFILE_SUCCESS:
        draft.profile.loading = false;
        draft.profile.loaded = true;
        draft.profile.data = action.data;
        break;
      case ActionTypes.GET_MASTER_PROFILE_FAIL:
        draft.profile.loading = false;
        draft.profile.loaded = false;
        draft.profile.error = action.errors;
        break;

      case ActionTypes.GET_MASTER_SERVICES:
        draft.masterServices.loading = true;
        break;
      case ActionTypes.GET_MASTER_SERVICES_SUCCESS:
        draft.masterServices.loading = false;
        draft.masterServices.loaded = true;
        draft.masterServices.data = action.data;
        break;
      case ActionTypes.GET_MASTER_SERVICES_FAIL:
        draft.masterServices.loading = false;
        draft.masterServices.loaded = false;
        draft.masterServices.error = action.errors;
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

      case ActionTypes.PUT_MASTER_LOCATION_TYPES:
        draft.putLocation.loading = true;
        break;
      case ActionTypes.PUT_MASTER_LOCATION_TYPES_SUCCESS:
        draft.putLocation.loading = false;
        draft.putLocation.loaded = true;
        draft.masterLocation.data = action.data;
        break;
      case ActionTypes.PUT_MASTER_LOCATION_TYPES_FAIL:
        draft.putLocation.loading = false;
        draft.putLocation.loaded = false;
        draft.putLocation.errors = action.errors;
        break;

      case ActionTypes.GET_MASTER_IMAGES:
        draft.masterImages.loading = true;
        break;
      case ActionTypes.GET_MASTER_IMAGES_SUCCESS:
        draft.masterImages.loading = false;
        draft.masterImages.loaded = true;
        draft.masterImages.data = action.data;
        break;
      case ActionTypes.GET_MASTER_IMAGES_FAIL:
        draft.masterImages.loading = false;
        draft.masterImages.loaded = false;
        draft.masterImages.errors = action.errors;
        break;

      case ActionTypes.DELETE_MASTER_IMAGE:
        draft.masterImages.loading = true;
        break;
      case ActionTypes.DELETE_MASTER_IMAGE_SUCCESS:
        draft.deleteImage.loading = false;
        draft.deleteImage.loaded = true;
        draft.masterImages.data = action.data;
        break;
      case ActionTypes.DELETE_MASTER_IMAGE_FAIL:
        draft.deleteImage.loading = false;
        draft.deleteImage.loaded = false;
        draft.deleteImage.errors = action.errors;
        break;

      case ActionTypes.POST_MASTER_IMAGES:
        draft.postImages.loading = true;
        break;
      case ActionTypes.POST_MASTER_IMAGES_SUCCESS:
        draft.postImages.loading = false;
        draft.postImages.loaded = true;
        break;
      case ActionTypes.POST_MASTER_IMAGES_FAIL:
        draft.postImages.loading = false;
        draft.postImages.loaded = false;
        draft.postImages.errors = action.errors;
        break;

      case ActionTypes.POST_MASTER_AVATAR:
        draft.postAvatar.loading = true;
        break;
      case ActionTypes.POST_MASTER_AVATAR_SUCCESS:
        draft.postAvatar.loading = false;
        draft.postAvatar.loaded = true;
        break;
      case ActionTypes.POST_MASTER_AVATAR_FAIL:
        draft.postAvatar.loading = false;
        draft.postAvatar.loaded = false;
        draft.postAvatar.errors = action.errors;
        break;

      case ActionTypes.GET_MASTER_CERT_IMAGES:
        draft.masterCertImages.loading = true;
        break;
      case ActionTypes.GET_MASTER_CERT_IMAGES_SUCCESS:
        draft.masterCertImages.loading = false;
        draft.masterCertImages.loaded = true;
        draft.masterCertImages.data = action.data;
        break;
      case ActionTypes.GET_MASTER_CERT_IMAGES_FAIL:
        draft.masterCertImages.loading = false;
        draft.masterCertImages.loaded = false;
        draft.masterCertImages.errors = action.errors;
        break;

      case ActionTypes.DELETE_MASTER_CERT_IMAGE:
        draft.deleteCertImage.loading = true;
        break;
      case ActionTypes.DELETE_MASTER_CERT_IMAGE_SUCCESS:
        draft.deleteCertImage.loading = false;
        draft.deleteCertImage.loaded = true;
        draft.masterCertImages.data = action.data;
        break;
      case ActionTypes.DELETE_MASTER_CERT_IMAGE_FAIL:
        draft.deleteCertImage.loading = false;
        draft.deleteCertImage.loaded = false;
        draft.deleteCertImage.errors = action.errors;
        break;

      case ActionTypes.POST_MASTER_CERT_IMAGES:
        draft.postCertImages.loading = true;
        break;
      case ActionTypes.POST_MASTER_CERT_IMAGES_SUCCESS:
        draft.postCertImages.loading = false;
        draft.postCertImages.loaded = true;
        break;
      case ActionTypes.POST_MASTER_CERT_IMAGES_FAIL:
        draft.postCertImages.loading = false;
        draft.postCertImages.loaded = false;
        draft.postCertImages.errors = action.errors;
        break;

      case ActionTypes.PUT_USER_PROFILE:
        draft.putUserProfile.loading = true;
        draft.putUserProfile.loaded = false;
        break;
      case ActionTypes.PUT_USER_PROFILE_SUCCESS:
        draft.putUserProfile.loading = false;
        draft.putUserProfile.loaded = true;
        draft.putUserProfile.errors = {};
        break;
      case ActionTypes.PUT_USER_PROFILE_FAIL:
        draft.putUserProfile.loading = false;
        draft.putUserProfile.loaded = false;
        draft.putUserProfile.errors = action.errors;
        break;

      case ActionTypes.PUT_USER_STATUS:
        draft.putStatusData.loading = true;
        break;
      case ActionTypes.PUT_USER_STATUS_SUCCESS:
        draft.putStatusData.loading = false;
        draft.putStatusData.loaded = true;
        break;
      case ActionTypes.PUT_USER_STATUS_FAIL:
        draft.putStatusData.loading = false;
        draft.putStatusData.loaded = false;
        draft.putStatusData.errors = action.errors;
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

      case ActionTypes.PUT_MASTER_CANCEL_BOOKING:
        draft.masterBooking.loading = true;
        break;
      case ActionTypes.PUT_MASTER_CANCEL_BOOKING_SUCCESS:
        draft.masterBooking.loading = false;
        draft.masterBooking.data = action.data;
        break;
      case ActionTypes.PUT_MASTER_CANCEL_BOOKING_FAIL:
        draft.masterBooking.loading = false;
        draft.masterBooking.errors = action.errors;
        break;

      case ActionTypes.DELETE_MASTER:
        draft.deleteMaster.loading = true;
        draft.deleteMaster.loaded = false;
        break;
      case ActionTypes.DELETE_MASTER_SUCCESS:
        draft.deleteMaster.loading = false;
        draft.deleteMaster.loaded = true;
        break;
      case ActionTypes.DELETE_MASTER_FAIL:
        draft.deleteMaster.loading = false;
        draft.deleteMaster.loaded = true;
        draft.deleteMaster.error = action.data;
        break;
    }
  });

export default customerMasterPageReducer;
