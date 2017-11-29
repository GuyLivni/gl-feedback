const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');

module.exports = async (req, res) => {
  const survey = await Survey.findOneAndRemove({ _id: req.query.id });
  res.send(survey);
};