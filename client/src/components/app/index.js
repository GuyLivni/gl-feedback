/* @flow */
import React, { Component } from "react";
import { withRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import LoadingBar from "../common/loadingBar";
import RouteWithSubRoutes from "../../utils/routeWithSubRoutes";
import { authActions } from "../../redux/state/auth/index";
import routes from "../../routes/index";

const AppContainer = styled.div`
  height: 100%;
`;

type Props = {
  actions: {
    fetchUser: Function
  }
};

class App extends Component<Props> {
  componentDidMount() {
    this.props.actions.fetchUser();
  }

  render() {
    return (
      <AppContainer>
        <LoadingBar />
        <Switch>
          {routes.map(route => (
            <RouteWithSubRoutes key={route.path} {...route} />
          ))}
        </Switch>
      </AppContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...authActions
  }, dispatch)
});

export default withRouter(connect(null, mapDispatchToProps)(App));
