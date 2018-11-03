import {combineReducers} from 'redux';
import users from './usersReducer';
import pairings from './pairingsReducer';
import filter from './filterReducer';

const rootReducer = combineReducers({
  users,
  pairings,
  filter
});

export default rootReducer;