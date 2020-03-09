import {
  takeEvery,
  take,
  cancel,
  cancelled,
  fork,
  put,
  delay,
  debounce,
  race,
  call
} from "redux-saga/effects";
import * as actions from "../action/index";

function* authorize({ username, password }) {
  try {
    // 手動延遲
    // yield delay(6000);
    if (username === "guest" && password === "guest") {
      yield put({
        type: actions.LOGIN_SUCCESS
      });
    } else {
      yield put({
        type: actions.INCORRECT
      });
    }
  } catch {
    yield put({
      type: actions.LOGIN_ERROR
    });
  } finally {
    // cancelled = true
    if (yield cancelled()) {
      yield put({
        type: actions.LOGIN_CANCEL
      });
    }
  }
}

function* loginFlow(action) {
  const task = yield fork(authorize, {
    username: action.username,
    password: action.password
  });
  // 5秒內未到就取消
  yield race([take(actions.LOGIN_CANCEL), delay(5000)]);
  // 取消: cancelled() return true
  yield cancel(task);
}

function* loginSaga() {
  yield takeEvery(actions.LOGIN_REQUEST, loginFlow);
}
export default loginSaga;
