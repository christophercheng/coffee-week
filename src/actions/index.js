import fetchUsers from '../api/usersAPI';
import * as types from './actionTypes';
import { groupByGuid, makeRandomPairings, populateFilterOptions} from './helpers';

export const initializeApp = () => dispatch => {
  return fetchUsers().then(usersServerData => {
    const regroupedUsers = groupByGuid(usersServerData.users);
    // filterOptions = { location: {ny: false, dub: false}, department: {engineering: false, 'human resources': false} }
    const filterOptions = populateFilterOptions(usersServerData.users, ['location', 'department']); 
    dispatch(loadUsersSuccess(regroupedUsers, filterOptions));
    dispatch(selectCity('ny'));
    dispatch(changeDeptSelection('engineering'));
  }).catch(error => {
    throw(error);
  })
};

// put it in the store
const loadUsersSuccess = (users, filterOptions) => (
  {
    type: types.LOAD_USERS_SUCCESS,
    users,
    filterOptions
  }
);

export const selectCity = selectedCity => (dispatch, getState) => { 
  const newFilter = getState().filter;
  // mark selectedCity as true in the location filter, set all other cities as false
  Object.keys(newFilter.location).forEach(location => newFilter.location[location] = (location ===selectedCity) ? true : false);
  dispatch(makePairings(getState().users, newFilter));
  dispatch({
    type: types.UPDATE_FILTER,
    filter: newFilter
  });
}

export const changeDeptSelection = selectedDepartment => (dispatch, getState) => { 
  const state = getState();
  const { department } = state.filter;
  // change the filter value of the selected department
  const newFilter = {
    ...state.filter,
    department: {...department, [selectedDepartment]: !department[selectedDepartment]}
  };
  dispatch({
    type: types.UPDATE_FILTER,
    filter: newFilter
  });
  dispatch(makePairings(state.users, newFilter));
}

// generate pairings based on given filter to display in current view
const makePairings = (users, newFilter) => {
  return {
    type: types.MAKE_PAIRINGS,
    pairings: makeRandomPairings(users, newFilter)
  };
}
