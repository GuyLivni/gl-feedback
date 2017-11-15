import React from 'react';
import './Login.css';

const Login = () => {
  const renderButtons = () => {
    return [
      <li key="google" className="social">
        <a className="ui google plus button" href="/auth/google">
          Login with Google
        </a>
      </li>,
      <li key="github" className="social">
        <a className="ui button" href="/auth/github">
          Login with Github
        </a>
      </li>
    ];
  };

  return (
    <div className="login-container">
      <h2 className="login-header ui header">Login to Feedback</h2>
      <ul className="login-btns">{renderButtons()}</ul>
    </div>
  );
};

export default Login;