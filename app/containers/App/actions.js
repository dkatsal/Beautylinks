/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import * as ActionTypes from './constants';

/**
 *
 * @param theme
 * @returns {{type: string, theme: string}}
 */

export function changeThemeAction(theme) {
  return {
    type: ActionTypes.CHANGE_THEME,
    theme,
  };
}

/**
 *
 * @returns {{type: string}}
 */
export function getUserInfo() {
  return {
    type: ActionTypes.GET_USER_INFO,
  };
}

/**
 *
 * @returns {{type: string}}
 */
export function getFavoriteMasters() {
  return {
    type: ActionTypes.GET_USER_FAVORITE_MASTERS,
  };
}

/**
 * List of categories, sub-categories and services
 * @returns {{type: *}}
 */
export function getServiceCategories() {
  return {
    type: ActionTypes.GET_SERVICE_CATEGORIES,
  };
}

export function setFilterAddressAction(value) {
  return {
    type: ActionTypes.SET_FILTER_ADDRESS,
    value,
  };
}

/**
 *
 * @param text
 * @returns {{text: *, type: string}}
 */
export function openSuccessNotification(text) {
  return {
    type: ActionTypes.OPEN_NOTIFICATION,
    text,
  };
}

/**
 *
 * @param text
 * @returns {{text: *, type: string}}
 */
export function openErrorNotification(text) {
  return {
    type: ActionTypes.OPEN_ERROR_NOTIFICATION,
    text,
  };
}

/**
 *
 * @returns {{type: string}}
 */
export function closeNotification() {
  return {
    type: ActionTypes.CLOSE_NOTIFICATION,
  };
}

export function createBooking(params) {
  return {
    type: ActionTypes.CREATE_BOOKING,
    params,
  };
}
