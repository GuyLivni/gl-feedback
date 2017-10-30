import React, {Component} from 'react';
import {Link}             from 'react-router-dom';
import {connect}          from 'react-redux';
import Stripe             from './Stripe';

class Header extends Component {

  renderContent(auth) {
    switch (auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login with Google</a></li>;
      default:
        return [
          <li key="1"><Stripe/></li>,
          <li key="2" style={{ margin: '0 10px' }}>Credits: {auth.credits}</li>,
          <li key="3"><a href="/api/logout">Logout</a></li>
        ];
    }
  }

  render() {
    const {auth} = this.props;
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={auth ? '/surveys' : '/'}
            style={{ margin: '0 10px' }}
            className="left brand-logo"
          >
            Feedback
          </Link>
          <ul className="right">{this.renderContent(auth)}</ul>
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