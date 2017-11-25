import React                 from 'react';
import {Button, Icon, Grid,
        Header, Segment}     from 'semantic-ui-react';
import {Redirect}            from 'react-router-dom';
import {connect}             from 'react-redux';
import './Login.css';

const Buttons = [
  {href: '/auth/google',   iconColor: 'red',   name: 'google',   text: 'Sign in with Google'},
  {href: '/auth/facebook', iconColor: 'blue',  name: 'facebook', text: 'Sign in with Facebook'},
  {href: '/auth/github',   iconColor: 'black', name: 'github',   text: 'Sign in with Github'}
];

const renderInfo = () => (
  <div>
    <Header textAlign="center" size="large">Welcome back.</Header>
    <p>
      Sign in to access your personalized surveys.
      Get in touch with your users and collect valuable feedback on your products.
    </p>
  </div>
);

const renderButtons = (isAuthenticated) => (
  <Segment basic>
    {isAuthenticated ? <Redirect to="/surveys"/> : (
      Buttons.map(({href, name, iconColor, color, text}) =>
        <Button className="login-button" key={name} basic as="a" href={href}>
          <div className="login-button-content">
            <Icon size="large" name={name} color={iconColor}/>
            <span className="login-button-text">{text}</span>
          </div>
        </Button>
      )
    )}
  </Segment>
);

const Login = ({isAuthenticated}) => (
  <Grid className="login-container" textAlign="center" verticalAlign="middle">
    <Grid.Column className="login-content" textAlign="center">
      {renderInfo()}
      {renderButtons(isAuthenticated)}
    </Grid.Column>
  </Grid>
);

const mapStateToProps = ({auth}) => ({
  isAuthenticated: auth.isAuthenticated,
});

export default connect(mapStateToProps)(Login);