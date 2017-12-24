const express         = require('express');
const mongoose        = require('mongoose');
mongoose.Promise      = global.Promise;
const cookieSession   = require('cookie-session');
const passport        = require('passport');
const keys            = require('./config/keys');
const bodyParser      = require('body-parser');
const fs              = require('fs');

require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI, {
  keepAlive: true,
  useMongoClient: true
});

const app = express();

app.use(bodyParser.json());

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

fs
  .readdirSync(`${__dirname}/routes`)
  .filter(file => (file.indexOf(".") !== 0))
  .forEach((file) => {
    require(__dirname + `/routes/${file}`)(app);
  });

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
