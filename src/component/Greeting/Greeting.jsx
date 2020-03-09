import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../action/login";

const Greeting = () => {
  const status = useSelector(state => state.status);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(logout());
  };
  return status === "Logged in" ? (
    <div>
      <h3>Welcome!</h3>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  ) : (
    <div>
      <h3>You are not logged in.</h3>
    </div>
  );
};

export default Greeting;
