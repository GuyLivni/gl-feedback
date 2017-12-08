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
    box-shadow: 0px 4px 4px rgba(0,0,0,0.1);
    justify-content: space-between;
    align-items: center;
    &:after {
      background: linear-gradient(to right, #9E7CC1, #8ECDEA);
      content: '';
      width: 100%;
      position: absolute;
      top: 55px;
      height: 3px;
      left: 0;
    }
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