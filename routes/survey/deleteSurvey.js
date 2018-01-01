const mongoose  = require('mongoose');
const Joi       = require('joi');
const Survey    = mongoose.model('surveys');

module.exports = async (req) => {
  const { id } = req.query;
  const survey = await Survey.findOneAndRemove({ _id: id });

  return { status: 200, survey }
};

module.exports.onFail = {
  status: 500
};

module.exports.validations = {
  query: {
    id: Joi.string().required()
  }
};