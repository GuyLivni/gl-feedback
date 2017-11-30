const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');

module.exports = async (req) => {
  const { id } = req.user;

  const surveys = await Survey.find({ _user: id })
    .select({ recipients: false });

  return { status: 200, surveys }
};

module.exports.onFail = {
  status: 500
};