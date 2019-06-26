import { combineReducers } from 'redux';

import { Sagas as domainSagas, Reducer as domainReducer, Actions as domainActions } from './domain';

// Sagas
export const Sagas = [...domainSagas];

// Actions
export const Actions = {
  domain: domainActions
};

// Reducer
export default combineReducers({
  domain: domainReducer
});
