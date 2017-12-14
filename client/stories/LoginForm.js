import React             from 'react';
import {storiesOf}       from '@storybook/react';
import LoginForm         from '../src/components/login';
import {ReduxProvider}   from '../.storybook/decorators'

const props = {
  isAuthenticated: false
};

// storiesOf('Login', module)
//   .addDecorator(story => <ReduxProvider story={story()} />)
//   .add('Login Form', () => (
//     <LoginForm {...props} />
//   ));

storiesOf('Header', module)
  .addDecorator(story => <ReduxProvider story={story()} />)
  .add('Login Form', () => (
    <LoginForm {...props} />
  ));