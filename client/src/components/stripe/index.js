/* @flow */
import React from "react";
import StripeCheckout from "react-stripe-checkout";
import logo from "../../assets/images/logo.png";

type Props = {
  onStripePayment: Function,
  btnText: string
};

const Stripe = ({ onStripePayment, btnText }: Props) => (
  <StripeCheckout
    name="Feedback"
    description="$5 for 5 email credits"
    amount={500} // 500 cents = 5$
    token={token => onStripePayment(token)}
    stripeKey={process.env.REACT_APP_STRIPE_KEY}
    image={logo}
  >
    {btnText}
  </StripeCheckout>
);

export default Stripe;
