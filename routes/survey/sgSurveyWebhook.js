const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');

module.exports = async (req) => {
  const p = new Path('/api/surveys/:surveyId/:choice');

  req.body
    .map(({ email, url }) => {
      const match = p.test(new URL(url).pathname);
      if (match) {
        return {
          email,
          surveyId: match.surveyId,
          choice: match.choice
        }
      }
    })
    .filter(value => !!value)
    .forEach(({ surveyId, email, choice }) => {
      Survey.updateOne({
        _id: surveyId,
        recipients: {
          $elemMatch: { email: email, responded: false }
        }
      }, {
        $inc: { [choice]: 1 },
        $set: { 'recipients.$.responded': true },
        lastResponded: new Date()
      }).exec();
    });

  return { status: 204, hook: {} }
};

module.exports.onFail = {
  status: 500
};