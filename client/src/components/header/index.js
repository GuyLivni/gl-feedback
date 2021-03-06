/* @flow */
import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { authActions } from "../../redux/state/auth";

import HeaderMenu from "./headerMenu";
import HeaderLogo from "./headerLogo";
import HeaderBrand from "./headerBrand";

const HeaderContainer = styled.nav`
  display: flex;
  background: #fff;
  height: 56px;
  padding: 0 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  align-items: center;
  &:after {
    background: linear-gradient(to right, #9e7cc1, #8ecdea);
    content: "";
    width: 100%;
    position: absolute;
    top: 55px;
    height: 3px;
    left: 0;
  }
`;

type Props = {
  actions: {
    logoutUser: Function,
    handleToken: Function
  },
  user: User,
  isAuthenticated: boolean
};

class Header extends Component<Props> {
  logOutUser = () => this.props.actions.logoutUser();

  handlePayment = (token: Object) => this.props.actions.handleToken(token);

  render() {
    const { user, isAuthenticated } = this.props;
    return (
      <HeaderContainer>
        <HeaderLogo />
        <HeaderBrand />
        <HeaderMenu
          user={user}
          isAuthenticated={isAuthenticated}
          logOutUser={this.logOutUser}
          onStripePayment={this.handlePayment}
        />
      </HeaderContainer>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
  isAuthenticated: auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...authActions
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
