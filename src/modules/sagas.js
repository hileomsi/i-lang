import { all } from 'redux-saga/effects';

import { Sagas as usersSagas } from './users';

export default function* rootSaga() {
  return yield all([...usersSagas]);
}
