import * as actions from '../action/index';

const initState = {
  login: {
    status: 'Logged out',
  },
};

const loginReducer = (state = initState.login, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        status: 'Request login',
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        status: 'Logged in',
      };
    case actions.LOGIN_ERROR:
      return {
        ...state,
        status: 'Login error',
      };
    case actions.LOGIN_CANCEL:
      return {
        ...state,
        status: 'Login cancel',
      };
    case actions.LOGOUT:
      return {
        ...state,
        status: 'Logged out',
      };
    default:
      return state;
  }
};

export default loginReducer;