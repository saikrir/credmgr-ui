import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthenticatedRoute = ({ children, authenticated, ...rest }) => {
  console.log('children ? ', authenticated);

  if (!authenticated) {
    return <Redirect to={{ pathname: '/login' }} />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

let mapStateToProps = ({ auth: { authenticated } }) => {
  return { authenticated };
};

export default connect(mapStateToProps)(AuthenticatedRoute);
