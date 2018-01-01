const mongoose       = require('mongoose');
const Joi            = require('joi');
const Mailer         = require('../../services/Mailer');
const surveyTemplate = require('../../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = async (req) => {
  const { from, title, subject, body, recipients } = req.body;

  const survey = new Survey({
    from,
    title,
    subject,
    body,
    recipients: recipients.split(',').map(email => ({ email: email.trim() })),
    _user: req.user.id,
    dateSent: Date.now()
  });

  const mailer = new Mailer(survey, surveyTemplate(survey));
  await mailer.send();
  await survey.save();
  req.user.credits -= 1;
  const user = await req.user.save();

  return { status: 200, user }
};

module.exports.validations = {
  body: {
    from: Joi.string().required(),
    title: Joi.string().required(),
    subject: Joi.string().required(),
    body: Joi.string().required(),
    recipients: Joi.string().required()
  }
};

module.exports.onFail = {
  status: 422
};