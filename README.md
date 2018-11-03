## App Logic & Assumptions

* receivers and givers pairings will only be in a single city.  They cannot be mixed accross cities
* pairings can be in one or more departments in a single city


## Future Changes That Are Needed

* Unit Tests (ran out of time)
* cache each newly created pairings to the redux story(based on a hash of filters)
  * currently, if any toolbar filters are changed, a new set of randomized pairings is created.
  * ideal solution: if a new set of filters is set, use the filter hash to attempt to load associated cached pairings.  if none exist, then go ahead a create new pairings and cache them to the redux store
  * remove the cache with a new UI widget e.g. button (and associated action creator & reducer)

## Nice to Have
* Make the application more easily extensible to work with other filters

## App Overview

### Redux

Redux is used to store all fetched user data.  Additionally the store has:
* filter: object that contains the relevant filters e.g. selected city and department(s) that will constrain the giver-receiver pairing creation process
* pairings: most recently generated giver-receiver pairings based on the store's filters

### Styling

Styling is implemented via Styled Components  e.g. `<component>.styles.js`.  Responsive design is implemented via media queries with commonly used breakpoints.  mobile toolbar is fixed to the bottom of page with fixed positioning.  Pair components are layed out using css flexbox (wrap enabled for non-mobile).

### Components

All components are stored in the /src/components directory

Components include the main App component whose children include an error boundary component, the react-redux provider which works with the connect HOC to inject redux store props into deeply nested components.

/pages contains the HomePage and ErrorBoundary pages.  It also contains /pageSections, which includes the common components that are used in the HomePage, including the Header, Toolbar, and PairingList components.  Future pages can make use of the /pageSections components.

### App Initialization

#### Redux Store Creation
In the main component, app (/src/components/App), the redux store in created, and then the loadUsers action creator is dispatched from the redux store.

#### API Data Load And Redux Store Initialization
LoadUsers action creator is one of the action creators defined in (/src/actions/index.js) and fetches all user data via the API fetch call (/src/api/usersAPI.js).  After the api fetch promise resolves with user data, redux thunks middleware is used to additionally dispatch two action creators:

* the loadUserSuccess action creator -- which restructures the user data and places it into the store
* the selectCity action creator -- which creates pairings for a given city (defaulted to 'ny')

#### Action Creator Helpers

/src/actions/helpers.js contains helper functions that help the action creators process & create new store data.  In particular it 

(1) helps the loadUsers action creator process the raw API user data and group users by city.  It also creates an object of user guids that individually map to the user's information e.g name, department, etc.

(2) helps create the random pairings.  First it applies the store's filters (e.g. selected city and department(s) to filter out the relevant users, and the randomly creates pairings with a simple algo:

* create two duplicate arrays of the relevant user IDs
* sort the second array via the javascript array sort function using a compare function and Math.random function (https://www.w3schools.com/js/js_array_sort.asp - see `Sorting an Array in Random Order` section)




