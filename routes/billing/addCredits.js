const Joi    = require('joi');
const keys   = require('../../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = async (req) => {
  // TODO: remember to update this logic for more generic usage
  const { id } = req.body;
  await stripe.charges.create({
    amount: 500,
    currency: 'usd',
    description: '$5 for 5 credits',
    source: id
  });

  req.user.credits += 5;
  const user = await req.user.save();

  return { status: 200, user }
};

module.exports.validations = {
  body: {
    card: Joi.object(),
    client_ip: Joi.string(),
    created: Joi.number(),
    email: Joi.string(),
    id: Joi.string().required(),
    livemode: Joi.boolean(),
    object: Joi.string(),
    type: Joi.string(),
    used: Joi.boolean()
  }
};

module.exports.onFail = {
  status: 500
};