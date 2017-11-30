const addCredits   = require('./addCredits');
const requireLogin = require('../../middlewares/requireLogin');
const endpoint     = require('../../middlewares/endpoint');

module.exports = (app) => {
  app.post('/api/stripe', requireLogin, endpoint(addCredits));
};
