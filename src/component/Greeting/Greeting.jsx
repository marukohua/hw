import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const status = useSelector(state => state.status);
  return (
    status === 'Logged in' ? (
      <div>
        <h3>Welcome!</h3>
        <button>Sign out</button>
      </div>
    ) : (
        <div>
          <h3>You are not logged in.</h3>
        </div>
      )
  );
};

export default Greeting;