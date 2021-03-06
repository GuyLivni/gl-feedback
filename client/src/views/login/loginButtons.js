/* @flow */
import React from "react";
import styled from "styled-components";
import { Icon, Segment, Button } from "semantic-ui-react";

const LoginButtonContent = styled.div`
  text-align: left;
`;

const LoginButtonText = styled.span`
  font-size: 16px;
  vertical-align: middle;
`;

const LoginButton = styled(Button).attrs({
  basic: true,
  as: "a"
})`
  width: 250px;
  margin-bottom: 15px !important;
`;

const Buttons = [
  {
    href: "/auth/google",
    iconColor: "red",
    name: "google",
    text: "Sign in with Google"
  },
  {
    href: "/auth/facebook",
    iconColor: "blue",
    name: "facebook",
    text: "Sign in with Facebook"
  },
  {
    href: "/auth/github",
    iconColor: "black",
    name: "github",
    text: "Sign in with Github"
  }
];

type Props = {
  redirectUrl: string
};

const LoginButtons = ({ redirectUrl }: Props) => {
  const getHref = (href: string) =>
    redirectUrl ? `${href}/?redirect=${encodeURIComponent(redirectUrl)}` : href;

  return (
    <Segment basic>
      {Buttons.map(({ href, name, iconColor, text }) => (
        <LoginButton key={name} href={getHref(href)}>
          <LoginButtonContent>
            <Icon size="large" name={name} color={iconColor} />
            <LoginButtonText>{text}</LoginButtonText>
          </LoginButtonContent>
        </LoginButton>
      ))}
    </Segment>
  );
};

export default LoginButtons;
