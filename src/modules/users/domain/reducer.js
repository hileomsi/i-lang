import Immutable from 'seamless-immutable';
import { createSlice } from 'redux-starter-kit';
import { combineReducers } from 'redux';
import createFindReducer from '../../utils/find';

const Data = createSlice({
  slice: 'USERS/DOMAIN',
  initialState: Immutable({}),
  reducers: {}
});

const Users = createFindReducer('USERS', ['Hiléo', 'Brad', 'Hisli'], (state, payload) => {
  return state.set('data', ['Andersson', 'Hick', 'Estevam']);
});

export const Actions = {
  data: Data.actions,
  users: Users.actions
};
export default combineReducers({
  users: Users.reducer,
  data: Data.reducer
});
