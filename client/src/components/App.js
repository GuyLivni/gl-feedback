import React, {Component}                from 'react';
import {BrowserRouter as Router, Route}  from 'react-router-dom';
import {connect}                         from 'react-redux';
import {Container}                       from 'semantic-ui-react';
import * as actions                      from '../actions'
import Header                            from './header';
import Landing                           from './landing';
import Login                             from './login';
import Dashboard                         from './dashboard';
import SurveyNew                         from './surveys/SurveyNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router>
        <Container fluid>
          <Header/>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/surveys" component={Dashboard}/>
          <Route path="/surveys/new" component={SurveyNew}/>
        </Container>
      </Router>
    );
  }
}

export default connect(null, actions)(App);