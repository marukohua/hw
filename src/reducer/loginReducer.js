import * as actions from "../action/index";

const initState = {
  login: {
    status: "Logged out"
  }
};

const loginReducer = (state = initState.login, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        status: "Request login"
      };
    case actions.LOGIN_SUCCESS:
      return {
        status: "Logged in"
      };
    case actions.LOGIN_ERROR:
      return {
        status: "Login error"
      };
    case actions.LOGIN_CANCEL:
      return {
        status: "Login cancel"
      };
    case actions.LOGOUT:
      return {
        status: "Logged out"
      };
    case actions.INCORRECT:
      return {
        status: "Incorrect username or password."
      };
    default:
      return state;
  }
};

export default loginReducer;
