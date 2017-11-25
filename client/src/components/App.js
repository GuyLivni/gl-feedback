import React, {Component}     from 'react';
import {Route, withRouter}    from 'react-router-dom';
import {connect}              from 'react-redux';
import {Container}            from 'semantic-ui-react';
import * as actions           from '../actions';
import routes                 from '../routes';
import Header                 from './header';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderRoutes = () => routes
    .map( route => <Route key={ route.path } { ...route } /> );

  render() {
    return (
      <Container fluid style={{ height: '100%' }}>
        <Header />
        { this.renderRoutes() }
      </Container>
    );
  }
}

export default withRouter(connect(null, actions)(App));