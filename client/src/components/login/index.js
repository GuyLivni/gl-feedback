import React                         from 'react';
import {Button, Icon, Header, Grid}  from 'semantic-ui-react';
import {Redirect}                    from 'react-router-dom';
import {connect}                     from 'react-redux';
import './Login.css';

const Buttons = [
  {href: '/auth/google', color: null, iconColor: 'red', name: 'google', text: 'Login with Google'},
  {href: '/auth/facebook', color: null, iconColor: 'blue', name: 'facebook', text: 'Login with Facebook'},
  {href: '/auth/github', color: 'white', iconColor: 'black', name: 'github', text: 'Login with Github'}
];

const renderButtons = () => (
  <Grid>
    {Buttons.map(({href, name, color, iconColor, text}) =>
    <Grid.Row key={name} centered>
      <Button className="login-button" as="a" basic href={href}>
        <div className="login-button-content">
          <Icon name={name} size="large" color={iconColor} />
          <span className="login-button-text">{text}</span>
        </div>
      </Button>
    </Grid.Row>
    )}
  </Grid>
);

const Login = ({isAuthenticated}) => (
  <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2'>
        Welcome back.
      </Header>
      <div className="login-container">
        <Header as='h4'>
          Sign in to access your personalized Surveys.
        </Header>
        {isAuthenticated ? <Redirect to="/surveys" /> : renderButtons()}
      </div>
    </Grid.Column>
  </Grid>
);

const mapStateToProps = ({auth}) => ({
  isAuthenticated: auth.isAuthenticated,
});

export default connect(mapStateToProps)(Login);