const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const { optionsG } = require('../../config.js');
const { authenticateLogin } = require('../models/index.js');


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  authenticateLogin.deserializeAuth(id)
    .then((data)=>{
      if (data.rows) {
        done(null, data.rows[0]);
      }
    })
    .catch((err) => {console.log(err)})
});

passport.use(
  new GoogleStrategy(optionsG,
    (token, tokenSecret, profile, done) => {
      let { sub, given_name, family_name, picture } = profile._json;
      authenticateLogin.authenticate(sub)
        .then((data) => {
          if (data.rows[0]) {
            done(null, data.rows[0]);
          } else {
            authenticateLogin.createNewUser(profile._json)
              .then((data) => {
                done(null, data.rows[0]);
              })
              .catch((err) => {console.log(err)})
          }
        })
        .catch((err) => { console.log(err); });
    }
  )
);

