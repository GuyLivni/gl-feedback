import React, {Component}   from 'react';
import {connect}            from 'react-redux';
import styled               from 'styled-components';
import { withRouter }       from 'react-router-dom';
import * as actions         from '../../actions';

import HeaderMenu           from './headerMenu';
import HeaderLogo           from './headerLogo';
import HeaderBrand          from './headerBrand';


const HeaderContainer = styled.nav`
    display: flex;
    background: #fff;
    height: 56px;
    padding: 0 16px;
    border-bottom: 1px solid #d9e3ed;
    justify-content: space-between;
    align-items: center;
`;

class Header extends Component {
  logOutUser = () => this.props.logoutUser();

  render() {
    const {user, isAuthenticated} = this.props;
    return (
      <HeaderContainer>
        <HeaderLogo isAuthenticated={isAuthenticated} />
        <HeaderBrand />
        <HeaderMenu
          user={user}
          isAuthenticated={isAuthenticated}
          logOutUser={this.logOutUser}
          history={this.props.history}/>
      </HeaderContainer>
    );
  }
}

const mapStateToProps = ({auth}) => ({
  user: auth.user,
  isAuthenticated: auth.isAuthenticated
});

export default withRouter(connect(mapStateToProps, actions)(Header));