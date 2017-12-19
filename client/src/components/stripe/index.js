import React           from 'react';
import StripeCheckout  from 'react-stripe-checkout';


const Stripe = ({ onStripePayment }) => (
  <StripeCheckout
    name="Feedback"
    description="$5 for 5 email credits"
    amount={500} // 500 cents = 5$
    token={token => onStripePayment(token)}
    stripeKey={process.env.REACT_APP_STRIPE_KEY}
  >
    Add Credits
  </StripeCheckout>
);

export default Stripe;