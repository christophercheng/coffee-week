const fetchUsers = location => {
  const locationParam = location ? `?location=${location}` : ``;
  const fetchUrl = 'https://hbc-frontend-challenge.hbccommon.private.hbc.com/coffee-week/users/' + locationParam;
  return fetch(fetchUrl)
    .then(response => response.json())
    .catch(error => error);
}

export default fetchUsers;