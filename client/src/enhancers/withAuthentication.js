import React                   from "react";
import {connect}               from "react-redux";
import {Redirect}              from "react-router-dom"

export default function withAuthentication(WrappedComponent) {
  class AuthenticatedComponent extends React.Component {
    render() {
      return (
        this.props.isAuthenticated ?
          <WrappedComponent {...this.props} /> :
          <Redirect to={{
            pathname: '/login',
            state: { from: this.props.location }
          }} />
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
    }
  };

  return connect(mapStateToProps)(AuthenticatedComponent);
}

