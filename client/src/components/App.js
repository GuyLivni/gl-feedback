import React, {Component}     from 'react';
import {Route, withRouter}    from 'react-router-dom';
import {connect}              from 'react-redux';
import styled                 from 'styled-components';
import * as actions           from '../actions';
import routes                 from '../routes';
import Header                 from './header';

const AppContainer = styled.div`
   height: 100%;
`;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderRoutes = () => routes
    .map( route => <Route key={ route.path } { ...route } /> );

  render() {
    return (
      <AppContainer>
        <Header />
        { this.renderRoutes() }
      </AppContainer>
    );
  }
}

export default withRouter(connect(null, actions)(App));