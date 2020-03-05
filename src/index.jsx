import React from 'react';
import ReactDom from 'react-dom';
import {
  Switch,
  Route,
  Link,
  BrowserRouter,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './component/Greeting/index';
import Public from './component/Public/index';
import Protected from './component/Protected/index';
import Login from './component/Login/index';
import store from './store/index';
import PrivateRoute from './PrivateRoute';

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
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected} />
    </Switch>

  </div>
);

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Main />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);