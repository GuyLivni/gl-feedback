const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../../config/keys');

module.exports = function (User) {
  return new GoogleStrategy({
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({googleId: profile.id});

      if (existingUser) {
        return done(null, existingUser);
      }

      const {id, displayName, photos} = profile;
      const user = await new User({
        googleId: id,
        name: displayName,
        photo: photos[0].value
      }).save();
      done(null, user);
    })
};