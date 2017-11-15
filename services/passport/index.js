const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('users');

const google = require('../passport/google')(User);
const github = require('../passport/github')(User);
const facebook = require('../passport/facebook')(User);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
});

passport.use(facebook);
passport.use(google);
passport.use(github);

module.exports.socialRoutesParams = [
  {medium: "facebook", scope: ['email']},
  {medium: "google", scope: ['profile', 'email']},
  {medium: "github", scope: ['user:email']}
];