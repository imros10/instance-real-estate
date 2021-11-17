import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children, ...rest }) => {
    const {user,isloading} = useAuth();
    if(isloading){
      return (
            <div class="text-center mx-auto mt-5 spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
      )
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
      user.email ? (
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
};

export default PrivateRoute;