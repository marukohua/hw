import loginReducer from "../../reducer/loginReducer";
import { loginRequest } from "../../action/login";
import {
  LOGIN_SUCCESS,
  LOGIN_CANCEL,
  LOGIN_ERROR,
  LOGOUT,
  INCORRECT,
  LOGIN_REQUEST
} from "../../action";

describe("Login Reducer", () => {
  function initState() {
    return {
      status: "Logged out"
    };
  }

  let state = {};
  beforeEach(() => {
    state = initState();
  });

  test("Login_Request_Action", () => {
    const receive = loginReducer({}, loginRequest("guest", "guest"));
    expect(receive.status).toEqual("Request login");
  });

  test("login success", () => {
    const receive = loginReducer(state, { type: LOGIN_SUCCESS });
    expect(receive.status).toEqual("Logged in");
  });

  test("login error", () => {
    const receive = loginReducer(state, { type: LOGIN_ERROR });
    expect(receive.status).toEqual("Login error");
  });

  test("login cancel", () => {
    const receive = loginReducer(state, { type: LOGIN_CANCEL });
    expect(receive.status).toEqual("Login cancel");
  });

  test("logout", () => {
    const receive = loginReducer(state, { type: LOGOUT });
    expect(receive.status).toEqual("Logged out");
  });

  test("incorrect", () => {
    const receive = loginReducer(state, { type: INCORRECT });
    expect(receive.status).toEqual("Incorrect username or password.");
  });
});
