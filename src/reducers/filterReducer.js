import * as types from '../actions/actionTypes';
import initialState from './initialState';

const filterReducer = (state = initialState.filter, action) => {
  switch (action.type) {
    case types.UPDATE_FILTER:
      return action.filter
    case types.LOAD_USERS_SUCCESS:
      return {
        ...state,
        ...action.filterOptions
      }
    default:
      return state;
  }
};

export default filterReducer;
