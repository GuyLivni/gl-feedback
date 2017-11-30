const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');

module.exports = async (req) => {
  const survey = await Survey.findOneAndRemove({ _id: req.query.id });

  return { status: 200, survey }
};

module.exports.onFail = {
  status: 500
};