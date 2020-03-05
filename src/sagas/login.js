import {
  takeEvery,
  take,
  cancel,
  fork,
  put,
} from 'redux-saga/effects';
import * as actions from '../action/index';

function* authorize({ username, password }) {
  if (username === 'guest' && password === 'guest') {
    yield put({
      type: actions.LOGIN_SUCCESS,
    });
  } else {
    yield put({
      type: actions.LOGIN_ERROR,
    });
  }
}

function* loginFlow(action) {
  const task = yield fork(authorize, { username: action.username, password: action.password });
  yield take(actions.LOGIN_CANCEL);
  yield cancel(task);
}

function* loginSaga() {
  yield takeEvery(actions.LOGIN_REQUEST, loginFlow);
}
export default loginSaga;