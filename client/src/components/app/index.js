import React, {Component}     from 'react';
import {withRouter}           from 'react-router-dom';
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
        {routes.map( route =>
          <RouteWithSubRoutes key={ route.path } { ...route } />
        )}
      </AppContainer>
    );
  }
}

export default withRouter(connect(null, actions)(App));