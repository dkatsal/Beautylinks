/*
 *
 * Service reducer
 *
 */
import produce from 'immer';
import * as ActionTypes from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const serviceReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {}
  });

export default serviceReducer;
