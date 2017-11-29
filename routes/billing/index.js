const addCredits   = require('./addCredits');
const requireLogin = require('../../middlewares/requireLogin');

module.exports = (app) => {
  app.post('/api/stripe', requireLogin, addCredits);
};
