const passport             = require('passport');
const {socialRoutesParams} = require('../../services/passport');

module.exports = (app) => {
  socialRoutesParams.forEach(({medium, scope}) => {
    app.get(`/auth/${medium}`,
      passport.authenticate(medium, {scope})
    );

    app.get(`/auth/${medium}/callback`,
      passport.authenticate(medium, {
        successRedirect : '/surveys',
        failureRedirect : '/login',
        failureFlash : true
      })
    );
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send({user: req.user});
  })
};
