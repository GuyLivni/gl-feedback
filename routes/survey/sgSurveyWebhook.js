const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');
const _ = require('lodash');

module.exports = async (req) => {
  // parse path, remove undefined, keep unique only, update db
  const p = new Path('/api/surveys/:surveyId/:choice');
  _.chain(req.body)
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
    .compact()
    .uniqBy('email', 'surveyId')
    .each(({ surveyId, email, choice }) => {
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
    })
    .value();

  return { status: 204, hook: {} }
};

module.exports.onFail = {
  status: 500
};