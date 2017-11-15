const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('users');

const google = require('../passport/google')(User);
const github = require('../passport/github')(User);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
});

passport.use(google);
passport.use(github);

module.exports.socialRoutesParams = [
  {medium: "google", scope: ['profile', 'email']},
  {medium: "github", scope: ['user:email']}
];