const passport             = require('passport');
const {socialRoutesParams} = require('../../services/passport');

module.exports = (app) => {
  socialRoutesParams.forEach(({ medium, scope }) => {
    app.get(`/auth/${medium}`, (req, res, next) => {
      passport.authenticate(medium,
        {
          scope,
          state: req.query.redirect || '/'
        })(req, res, next);
    });

    app.get(`/auth/${medium}/callback`,
      passport.authenticate(medium, { failureRedirect: '/' }),
      (req, res) => {
        res.redirect(req.query.state);
      }
    );
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/me', (req, res) => {
    res.send({ user: req.user });
  })
};
