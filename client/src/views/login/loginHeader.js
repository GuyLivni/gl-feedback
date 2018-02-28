import React, { Fragment } from "react";
import { Header } from "semantic-ui-react";

const LoginHeader = () => (
  <Fragment>
    <Header textAlign="center" size="large">
      Welcome back.
    </Header>
    <p>
      Sign in to access your personalized surveys. Get in touch with your users
      and collect valuable feedback on your products.
    </p>
  </Fragment>
);

export default LoginHeader;
