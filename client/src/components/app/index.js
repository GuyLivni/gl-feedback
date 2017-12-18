import React, {Component}     from 'react';
import {withRouter}           from 'react-router-dom';
import styled                 from 'styled-components';
import RouteWithSubRoutes     from '../../utils/routeWithSubRoutes';
import routes                 from '../../routes';

const AppContainer = styled.div`
   height: 100%;
`;

class App extends Component {
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

export default withRouter(App);