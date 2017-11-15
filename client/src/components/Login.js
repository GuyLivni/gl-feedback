import React from 'react';
import {Button, Icon, Grid} from 'semantic-ui-react';
import './Login.css';

const Buttons = [
  {href: '/auth/google', color: 'google plus',name: 'google plus', text: 'Login with Google'},
  {href: '/auth/facebook', color: 'facebook', name: 'facebook', text: 'Login with Facebook'},
  {href: '/auth/github', color: 'black', name: 'github', text: 'Login with Github'}
];

const renderButtons = () => (
  <Grid>
    {Buttons.map(({href, name, color, text}) =>
    <Grid.Row key={name} >
      <Button as="a" href={href} fluid color={color}>
        <Icon name={name}/>{text}
      </Button>
    </Grid.Row>
    )}
  </Grid>
);

const Login = () => (
  <div className="login-container">
    <h2 className="login-header ui header">Login to Feedback</h2>
    {renderButtons()}
  </div>
);

export default Login;