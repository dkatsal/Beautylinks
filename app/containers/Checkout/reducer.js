/*
 *
 * Checkout reducer
 *
 */
import produce from 'immer';
import * as ActionTypes from './constants';

export const initialState = {
  loading: false,
  loaded: false,
  data: {},
  errors: null,
  bookingPayment: {
    loading: false,
    loaded: false,
    data: {},
    errors: null,
  },
  paymentProcessing: {
    loading: false,
    loaded: false,
    data: {},
    errors: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const checkoutReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.GET_BOOKING:
        draft.loading = true;
        break;
      case ActionTypes.GET_BOOKING_SUCCESS:
        draft.loading = false;
        draft.loaded = true;
        draft.data = action.data;
        break;
      case ActionTypes.GET_BOOKING_FAIL:
        draft.loading = false;
        draft.loaded = false;
        draft.errors = action.errors;
        break;
      case ActionTypes.GET_PAYMENT_PROCESSING:
        draft.paymentProcessing.loading = true;
        break;
      case ActionTypes.GET_PAYMENT_PROCESSING_SUCCESS:
        draft.paymentProcessing.loading = false;
        draft.paymentProcessing.loaded = true;
        draft.paymentProcessing.data = action.data;
        break;
      case ActionTypes.GET_PAYMENT_PROCESSING_FAIL:
        draft.paymentProcessing.loading = false;
        draft.paymentProcessing.loaded = false;
        draft.paymentProcessing.errors = action.errors;
        break;
    }
  });

export default checkoutReducer;
