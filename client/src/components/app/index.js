import React, {Component}     from 'react';
import {withRouter, Switch}   from 'react-router-dom';
import {connect}              from 'react-redux';
import styled                 from 'styled-components';
import RouteWithSubRoutes     from '../../utils/routeWithSubRoutes';
import * as actions           from '../../actions';
import routes                 from '../../routes';

const AppContainer = styled.div`
   height: 100%;
`;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <AppContainer>
        <Switch>
        {routes.map( route =>
          <RouteWithSubRoutes key={ route.path } { ...route } />
        )}
        </Switch>
      </AppContainer>
    );
  }
}

export default withRouter(connect(null, actions)(App));