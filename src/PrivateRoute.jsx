import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ children, ...rest }) {
  const status = useSelector(state => state.status);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        status === 'Logged in' ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

export default PrivateRoute;