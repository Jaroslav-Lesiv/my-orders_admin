import React from 'react';
import { AuthWrapper } from '../ui/components/Auth';

function Login() {
  return (
    <AuthWrapper>
      <h1>Login</h1>
      <input type="text" placeholder="username"></input>
      <input type="password" placeholder="password"></input>
      <button>Login</button>
    </AuthWrapper>
  );
}

export default Login;
