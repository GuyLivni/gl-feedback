const deleteSurvey    = require('./deleteSurvey');
const getSurveys      = require('./getSurveys');
const sgSurveyWebhook = require('./sgSurveyWebhook');
const addSurvey       = require('./addSurvey');

const requireLogin    = require('../../middlewares/requireLogin');
const requireCredits  = require('../../middlewares/requireCredits');
const endpoint        = require('../../middlewares/endpoint');
const validator       = require('../../middlewares/validator');

module.exports = app => {
  app.get('/api/surveys', requireLogin, endpoint(getSurveys));

  app.post('/api/surveys', requireLogin, requireCredits, validator(addSurvey.validations), endpoint(addSurvey));

  app.delete('/api/surveys', requireLogin, validator(deleteSurvey.validations), endpoint(deleteSurvey));

  app.post('/api/surveys/webhooks', endpoint(sgSurveyWebhook));

  app.get('/api/surveys/:surveyId/:choice', (req, res) => res.send('Thanks for voting!'));
};
