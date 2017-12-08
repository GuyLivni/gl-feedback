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

      const {id, displayName, photos} = profile;
      const user = await new User({
        githubId: id,
        name: displayName,
        photo: photos[0].value
      }).save();
      done(null, user);
    })
};