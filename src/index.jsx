//import "react-app-polyfill/ie11";
//import "react-app-polyfill/stable";
import React from "react";
import ReactDom from "react-dom";
import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import Greeting from "./component/Greeting/index";
import Public from "./component/Public/index";
import Protected from "./component/Protected/index";
import Login from "./component/Login/index";
import store from "./store/index";

const Main = () => (
  <div>
    <Greeting />
    <ul>
      <li>
        <Link to="/public">Public Page</Link>
      </li>
      <li>
        <Link to="/protected">Protected Page</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={Public} />
      <Route path="/public" component={Public} />
      <Route path="/login">
        {useSelector(state => state.status) === "Logged in" ? (
          <Redirect to="/protected" />
        ) : (
          <Login />
        )}
      </Route>
      <Route path="/protected">
        {useSelector(state => state.status) === "Logged in" ? (
          <Protected />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>
    </Switch>
  </div>
);

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Main />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
