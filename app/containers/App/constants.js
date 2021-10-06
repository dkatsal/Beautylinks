/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_THEME = 'app/App/CHANGE_THEME';

export const CLEAR_BOOKING = 'app/App/CLEAR_BOOKING';

export const GET_USER_INFO = 'app/App/GET_USER_INFO';
export const GET_USER_INFO_SUCCESS = 'app/App/GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAIL = 'app/App/GET_USER_INFO_FAIL';

export const GET_SERVICE_CATEGORIES = 'app/App/GET_SERVICE_CATEGORIES';
export const GET_SERVICE_CATEGORIES_SUCCESS = 'app/App/GET_SERVICE_CATEGORIES_SUCCESS';
export const GET_SERVICE_CATEGORIES_FAIL = 'app/App/GET_SERVICE_CATEGORIES_FAIL';

export const GET_MASTER_REG_STEP = 'app/App/GET_MASTER_REG_STEP';
export const GET_MASTER_REG_STEP_SUCCESS = 'app/App/GET_MASTER_REG_STEP_SUCCESS';
export const GET_MASTER_REG_STEP_FAIL = 'app/App/GET_MASTER_REG_STEP_FAIL';

export const GET_USER_FAVORITE_MASTERS = 'app/App/GET_USER_FAVORITE_MASTERS';
export const GET_USER_FAVORITE_MASTERS_SUCCESS = 'app/App/GET_USER_FAVORITE_MASTERS_SUCCESS';
export const GET_USER_FAVORITE_MASTERS_FAIL = 'app/App/GET_USER_FAVORITE_MASTERS_FAIL';

export const DELETE_FAVORITE = 'app/App/DELETE_FAVORITE';
export const DELETE_FAVORITE_SUCCESS = 'app/App/DELETE_FAVORITE_SUCCESS';
export const DELETE_FAVORITE_FAIL = 'app/App/DELETE_FAVORITE_FAIL';

export const SET_FILTER_ADDRESS = 'app/App/SET_FILTER_ADDRESS';

export const OPEN_NOTIFICATION = 'app/App/OPEN_NOTIFICATION';
export const OPEN_ERROR_NOTIFICATION = 'app/App/OPEN_ERROR_NOTIFICATION';
export const CLOSE_NOTIFICATION = 'app/App/CLOSE_NOTIFICATION';

export const CREATE_BOOKING = 'app/PractitionerSearch/CREATE_BOOKING';
export const CREATE_BOOKING_SUCCESS = 'app/PractitionerSearch/CREATE_BOOKING_SUCCESS';
export const CREATE_BOOKING_FAIL = 'app/PractitionerSearch/CREATE_BOOKING_FAIL';
