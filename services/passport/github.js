const GithubStrategy = require('passport-github2').Strategy;
const keys = require('../../config/keys');

module.exports = function (User) {
  return new GithubStrategy({
      clientID: keys.githubClientID,
      clientSecret: keys.githubClientSecret,
      callbackURL: '/auth/github/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({githubId: profile.id});

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({githubId: profile.id, name: profile.displayName}).save();
      done(null, user);
    })
};