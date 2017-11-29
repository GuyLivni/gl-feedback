const deleteSurvey    = require('./deleteSurvey');
const getSurveys      = require('./getSurveys');
const sgSurveyWebhook = require('./sgSurveyWebhook');
const addSurvey       = require('./addSurvey');

const requireLogin    = require('../../middlewares/requireLogin');
const requireCredits  = require('../../middlewares/requireCredits');

module.exports = app => {
  app.get('/api/surveys', requireLogin, getSurveys);

  app.post('/api/surveys', requireLogin, requireCredits, addSurvey);

  app.delete('/api/surveys', requireLogin, deleteSurvey);

  app.post('/api/surveys/webhooks', sgSurveyWebhook);

  app.get('/api/surveys/:surveyId/:choice', (req, res) => res.send('Thanks for voting!'));
};
