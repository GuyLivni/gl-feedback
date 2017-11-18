const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../../config/keys');

module.exports = function (User) {
  return new FacebookStrategy({
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: '/auth/facebook/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({facebookId: profile.id});

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({facebookId: profile.id, name: profile.displayName}).save();
      done(null, user);
    })
};