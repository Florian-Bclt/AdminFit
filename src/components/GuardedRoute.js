import React from 'react';
import { Route, Link } from 'react-router-dom';


const GuardedRoute = ({component: Component, auth, ...rest}) => (
  <Route {...rest} render={props => (
    auth
        ? <Component {...props} />
        : <Link to='/login'/>
  )} />
)

export default GuardedRoute;