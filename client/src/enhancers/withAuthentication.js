import React          from 'react';
import { connect }    from 'react-redux';
import { Redirect }   from 'react-router-dom';
import * as actions   from '../actions';

export default function withAuthentication(WrappedComponent) {
  class AuthenticatedComponent extends React.Component {

    componentDidMount() {
      this.props.fetchUser();
    }

    renderContent() {
      return (
        this.props.isAuthenticated ?
          <WrappedComponent {...this.props} /> :
          <Redirect to={{
            pathname: '/login',
            state: { from: this.props.location }
          }} />
      )
    }

    render() {
      return this.props.hasFetchedUser ?
        this.renderContent() :
        null
    }
  }

  const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated,
    hasFetchedUser: auth.hasFetchedUser
  });

  return connect(mapStateToProps, actions)(AuthenticatedComponent);
}

