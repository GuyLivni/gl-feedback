import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect}          from 'react-redux';
import Stripe             from '../stripe';
import { Dropdown, Icon } from 'semantic-ui-react'
import logo from '../../assets/images/logo.png'
import "./Header.css";

class Header extends Component {
  menuOptions(auth) {
    return [
      { key: 'signedin', text: `Signed in as: ${auth.name}`, disabled: true, value: 1 },
      { key: 'stripe', text: <Stripe/>, value: 2 },
      { key: 'logout', text: <a href="/api/logout"><Icon name="sign out"/> Logout</a>, value: 3 }
    ]
  }

  renderContent(auth) {
    switch (auth) {
      case null:
        return;
      case false:
        return this.props.history.location.pathname !== '/login' && (
          <Link className="circular ui icon button" to="/login">
            <Icon name="sign in"/> Login
          </Link>
        );
      default:
        return (
          <Dropdown
            simple
            trigger={<span>Hello, {auth.name} <br/>Your credits: {auth.credits}</span>}
            options={this.menuOptions(auth)}
          />
        )
    }
  }

  render() {
    const {auth} = this.props;
    return (
      <nav className="header-container">
        <div className="header-content">
          <Link className="header-item logo-container" to={auth ? '/surveys' : '/'}>
            <img className="logo" alt="logo" src={logo}/>
          </Link>
          <div className="header-item header">
            <h2>Feedback</h2>
          </div>
          <div className="header-item profile">{this.renderContent(auth)}</div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({auth}) {
  return {
    auth
  }
}

export default withRouter(connect(mapStateToProps)(Header));