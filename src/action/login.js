import * as actions from "./index";

export const loginRequest = (username, password) => ({
  type: actions.LOGIN_REQUEST,
  username,
  password
});

export const loginSuccess = response => ({
  type: actions.LOGIN_SUCCESS,
  response
});

export const loginError = error => ({
  type: actions.LOGIN_ERROR,
  error
});

export const loginCancel = () => ({
  type: actions.LOGIN_CANCEL
});

export const logout = () => ({
  type: actions.LOGOUT
});

export const incorrect = incorrect => ({
  type: actions.INCORRECT,
  payload: incorrect
});
