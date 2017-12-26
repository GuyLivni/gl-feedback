import React, {Component}     from 'react';
import {withRouter, Switch}   from 'react-router-dom';
import {connect}              from 'react-redux';
import styled                 from 'styled-components';
import LoadingBar             from 'react-redux-loading-bar';
import RouteWithSubRoutes     from '../../utils/routeWithSubRoutes';
import { authActions }        from '../../redux/state/auth/index';
import routes                 from '../../routes/index';

const AppContainer = styled.div`
   height: 100%;
`;

const StyledLoadingBar = styled(LoadingBar)`
  background: linear-gradient(to right,#9E7CC1,#8ECDEA);
  height: 4px;
  position: fixed;
  z-index: 10000000000;
`;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <AppContainer>
        <StyledLoadingBar showFastActions />
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