export default function* fetchUsers(action) {
  try {
    console.log('fetchUser ==> ', action);
    // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
  } catch(e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}
