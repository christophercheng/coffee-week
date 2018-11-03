export const groupByGuid = users => {
  const groupedUsers = {};
  users.forEach(user => {
    const {guid, ...rest} = user;
    groupedUsers[guid] = rest;
  });
  return groupedUsers;
};

export const populateFilterOptions = (users, options) => {
  const filterOptions = {};
  options.forEach(option => filterOptions[option] = {});
  users.forEach(user => {
    options.forEach(option => {
      if (!(user[option] in filterOptions[option])) {
        filterOptions[option][user[option]]=false;
      }
    });
  });
  return filterOptions;
}

export const getFirstSelected = options => {
  let selectedOption = "";
  if (options) {
    Object.keys(options).some(option => {
      if (options[option]) {
        selectedOption = option;
        return true;
      } return false;
    });
  }
  return selectedOption;
}

const applyFilters = (users, storeFilter) => {
  const { location: locationFilter, department: departmentFilter } = storeFilter;
  const selectedCity = getFirstSelected(locationFilter);
  return Object.keys(users).filter(guid => {
    const { location, department } = users[guid];
    return (selectedCity === location && departmentFilter[department]);
  });
};

export const makeRandomPairings = (users, filter) => {
  const pairings = {};
  const giverUserIds = applyFilters(users, filter);
  const receiverUserIds = [...giverUserIds].sort((a,b) => .5 - Math.random());
  while (giverUserIds.length) {
    const giverId = giverUserIds.shift();
    const receiverId = (receiverUserIds[0] === giverId) ? receiverUserIds.pop() : receiverUserIds.shift();
    pairings[giverId] = receiverId;
  };
  return pairings;
}
