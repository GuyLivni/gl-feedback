import React, {Component}     from 'react';
import {withRouter, Switch}   from 'react-router-dom';
import {connect}              from 'react-redux';
import styled                 from 'styled-components';
import RouteWithSubRoutes     from '../../utils/routeWithSubRoutes';
import { authActions }        from '../../redux/state/auth/index';
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

const mapDispatchToProps = ({
  fetchUser: authActions.fetchUser,
});

export default withRouter(connect(null, mapDispatchToProps)(App));