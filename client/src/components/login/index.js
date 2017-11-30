import React          from 'react';
import {Grid}         from 'semantic-ui-react';
import {connect}      from 'react-redux';
import styled         from 'styled-components';

import LoginButtons   from './loginButtons';
import LoginHeader    from './loginHeader';

const LoginContainer = styled(Grid).attrs({
  textAlign:      'center',
  verticalAlign:  'middle'
})`
    height: calc(100% - 56px);
`;

const LoginContent = styled(Grid.Column).attrs({
  textAlign:  'center'
})`
    max-width: 600px;
    background: #fff;
    border: 1px solid #d9e3ed;
    border-radius: 5px;
    padding: 60px !important;
`;

const Login = ({isAuthenticated}) => (
  <LoginContainer>
    <LoginContent>
      <LoginHeader />
      <LoginButtons isAuthenticated={isAuthenticated} />
    </LoginContent>
  </LoginContainer>
);

const mapStateToProps = ({auth}) => ({
  isAuthenticated: auth.isAuthenticated,
});

export default connect(mapStateToProps)(Login);