import { takeLatest } from 'redux-saga/effects';
import fetchUsers from './sagas/fetchUsers';

import { Actions } from './reducer';

export default [takeLatest(Actions.users.fetch, fetchUsers)];
