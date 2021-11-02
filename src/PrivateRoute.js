
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from './Auth';



const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={
      props => isLogin
      ?<Component {...rest} {...props} />
      : <Redirect to="/login"/>
    } />
  )
}


export default PrivateRoute;