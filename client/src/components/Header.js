import React, {Component} from 'react';
import {Link}             from 'react-router-dom';
import {connect}          from 'react-redux';
import Stripe             from './Stripe';
import { Dropdown } from 'semantic-ui-react'
import "./Header.css";

class Header extends Component {

  menuOptions() {
    return [
      { key: 'signedin', text: `Signed in as: John`, disabled: true, value: 1 },
      { key: 'stripe', text: <Stripe/>, value: 2 },
      { key: 'logout', text: <a href="/api/logout">Logout</a>, value: 3 }
    ]
  }

  renderContent(auth) {
    switch (auth) {
      case null:
        return;
      case false:
        return;
      default:
        return (
          <Dropdown
            simple
            trigger={
              <span>Hello, John. <br/>Your credits: {auth.credits}</span>
            }
            options={this.menuOptions()}
          />
        )
    }
  }

  render() {
    const {auth} = this.props;
    return (
      <nav className="header-container">
        <div className="header-content">
          <div className="header-item logo">logo</div>
          <Link to={auth ? '/surveys' : '/'} className="header-item header">
            <h2>Feedback</h2>
          </Link>
          <ul className="header-item profile">{this.renderContent(auth)}</ul>
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

export default connect(mapStateToProps)(Header);