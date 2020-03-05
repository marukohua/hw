import * as actions from './index';

export const loginRequest = (username, password) => ({
  type: actions.LOGIN_REQUEST,
  username,
  password,
});

export const loginSuccess = () => ({
  type: actions.LOGIN_SUCCESS,
});

export const loginError = () => ({
  type: actions.LOGIN_ERROR,
});

export const loginCancel = () => ({
  type: actions.LOGIN_CANCEL,
});

export const logout = () => ({
  type: actions.LOGOUT,
});