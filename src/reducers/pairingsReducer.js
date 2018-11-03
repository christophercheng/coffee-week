import * as types from '../actions/actionTypes';
import initialState from './initialState';

const pairingsReducer = (state = initialState.pairings, action) => {
  switch (action.type) {
    case types.MAKE_PAIRINGS:
      return action.pairings
    default:
      return state;
  }
};

export default pairingsReducer;
