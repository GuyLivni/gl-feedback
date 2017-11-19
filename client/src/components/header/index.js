import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect}          from 'react-redux';
import Stripe             from '../stripe';
import * as actions       from '../../actions';
import { Dropdown, Icon } from 'semantic-ui-react'
import logo               from '../../assets/images/logo.png'
import "./Header.css";

class Header extends Component {
  menuOptions(user) {
    return [
      { key: 'signedin', text: `Signed in as: ${user.name}`, disabled: true, value: 1 },
      { key: 'stripe', text: <Stripe/>, value: 2 },
      { key: 'logout', text: <Dropdown.Item onClick={() => this.props.logoutUser()}><Icon name="sign out"/> Logout</Dropdown.Item>, value: 3 }
    ]
  }

  renderContent(user, isAuthenticated) {
    if (isAuthenticated) {
      return <Dropdown
        simple
        trigger={<span>Hello, {user.name} <br/>Your credits: {user.credits}</span>}
        options={this.menuOptions(user)}
      />
    }

    return this.props.history.location.pathname !== '/login' && (
        <Link className="circular ui icon button" to="/login">
          <Icon name="sign in"/> Login
        </Link>
      )
  }

  render() {
    const {user, isAuthenticated} = this.props;
    return (
      <nav className="header-container">
        <div className="header-content">
          <Link className="header-item logo-container" to={isAuthenticated ? '/surveys' : '/'}>
            <img className="logo" alt="logo" src={logo}/>
          </Link>
          <div className="header-item header">
            <h2>Feedback</h2>
          </div>
          <div className="header-item profile">{this.renderContent(user, isAuthenticated)}</div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    user: auth.user,
    isAuthenticated: auth.isAuthenticated
  }
}

export default withRouter(connect(mapStateToProps, actions)(Header));