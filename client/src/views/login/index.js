/* @flow */
import React from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import type { MapStateToProps } from "react-redux";
import styled from "styled-components";
import { Redirect, withRouter } from "react-router-dom";
import { media } from "../../utils/styleUtils";
import LoginButtons from "./loginButtons";
import LoginHeader from "./loginHeader";
import logo from "../../assets/images/logo.png";

const LoginLogo = styled.img.attrs({
  src: logo,
  alt: "logo"
})`
  width: 70px;
`;

const LoginContainer = styled(Grid).attrs({
  textAlign: "center",
  verticalAlign: "middle"
})`
  height: 100%;
`;

const LoginContent = styled(Grid.Column).attrs({
  textAlign: "center"
})`
  max-width: 550px;
  background: #fff;
  border: 1px solid #d9e3ed;
  border-radius: 5px;
  padding: 20px !important;
  ${media.handheld`
       max-width: 350px;
       padding: 10px !important;
    `};
`;

type Props = {
  isAuthenticated: boolean,
  location: Object
};

const Login = ({ isAuthenticated, location }: Props) => {
  const redirectUrl =
    location.state && location.state.redirectUrl
      ? location.state.redirectUrl
      : "";
  return isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <LoginContainer>
      <LoginContent>
        <LoginLogo />
        <LoginHeader />
        <LoginButtons redirectUrl={redirectUrl} />
      </LoginContent>
    </LoginContainer>
  );
};

const mapStateToProps: MapStateToProps<*, *, *> = ({ auth }: Object) => ({
  isAuthenticated: auth.isAuthenticated
});

export default withRouter(connect(mapStateToProps)(Login));
