import { combineReducers } from 'redux'
import store from '../store'

// initial state for reducer to pass to store
const initialState = {
  voter: { bio: {}, prefs: {} },
  predictions: {}
}

// constant array of prediction properties for use in finding predictions
const voterPrefProps = [
  'jobs',
  'healthcare',
  'childcare',
  'lowerTaxes',
  'gunRights',
  'racialInjustice',
  'education',
  'lawEnforcement',
  'foreignPolicy',
  'terrorism'
]

/* -=-=-=-=-= ACTIONS =-=-=-=-=-=-=- */
const LOAD_SINGLE_VOTER = 'FIND_VOTER';
const LOAD_PREDICTIONS = 'LOAD_PREDICTIONS';


/* -=-=-=-=-= ACTION-CREATORS =-=-=-=-=-=-=- */

// loading action for fetch beneath
export const loadSingleVoter = (voter) => ({
  type: LOAD_SINGLE_VOTER,
  voter,
});

// async fetch from server
export const findSingleVoter = (id) => dispatch => {  // pass in voter id
  fetch(`/api/voters/${id}`)    // express route using findById lookup in table
    .then(res => res.json())   // format response
    .then(voter => {
      let keys = Object.keys(voter.prefs);  // pull keys to iterate over object
      keys.map(key => {
        return ( keys.forEach(key => {      // change 0's to '--' to better
          if (voter.prefs[key] === 0) {     // signify the absence of a value
            voter.prefs[key] = '--';
          }
        })
        )
      })
      dispatch(loadSingleVoter(voter));     // now load result to state
    });
}

// add predictions to state
export const loadPredictions = (predictions) => ({
  type: LOAD_PREDICTIONS,
  predictions
})

// worker function to fetch all values from prediction matrix and plug-in
// the ones missing from the actual voter issues matrix
export const predictVoter = (id) => dispatch => {
  fetch(`/api/recs/${id}`)    // returns specified array from the prediction model
    .then(res => res.json())  // format response
    .then(results => {
      let predictions = {};
      let { voter } = store.getState();
      voterPrefProps.forEach((key, idx) => {  // voterPrefProps = array of keys ^^^
        if (voter.prefs[key] === '--') {
          predictions[key] = results[idx].toFixed(2);  // two decimal places
        }
      });
      dispatch(loadPredictions(predictions)); // now load to state
    });
}


/* -=-=-=-=-= REDUCER =-=-=-=-=-=-=- */

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    case LOAD_SINGLE_VOTER: {  // note that predictions is also cleared   \/
      return Object.assign({}, state, { voter: action.voter, predictions: {} });
    }
    case LOAD_PREDICTIONS: {
      return Object.assign({}, state, { predictions: action.predictions });
    }
    default: return state
  }
};

export default rootReducer
