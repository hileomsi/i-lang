import Immutable from 'seamless-immutable';
import { authenticate } from './effects';

const defaultState = Immutable({
  logged: false,
  loading: false,
  user: null,
  authenticateError: null
});

export default {
  state: defaultState,
  reducers: {
    authenticatePending: (state, payload) => state.set('loading', true),
    authenticateFulfilled: (state, { user }) => state.set('user', user).set('loading', false),
    authenticateRejected: (state, { message }) => state.set('authenticateError', message).set('loading', false)
  },
  effects: (dispatch) => ({
    authenticate: authenticate(dispatch)
  })
}