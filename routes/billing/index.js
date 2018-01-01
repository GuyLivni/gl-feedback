const addCredits   = require('./addCredits');
const requireLogin = require('../../middlewares/requireLogin');
const endpoint     = require('../../middlewares/endpoint');
const validator    = require('../../middlewares/validator');

module.exports = (app) => {
  app.post('/api/stripe', requireLogin, validator(addCredits.validations), endpoint(addCredits));
};
