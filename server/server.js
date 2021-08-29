const express = require('express');
const app = express();
const passport = require('passport');
const passportSetup = require('./passport/passport-setup');
const { session } = require('../config.js');
const cookieSession = require('cookie-session');
const port = 3000;
const path = require('path');
const db = require('../database/index.js');
var router = require('./routes.js');

app.use(express.json());
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [session.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});






