const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20');
const { optionsG } = require('../../config.js')


passport.serializeUser((user, done) => {
  // here, take a unique field from the user object, which is the profile that was passed in.

  done(null, user.id)

})

passport.deserializeUser((username, done) => {
  // here, take the unique field passed in to search the database for an existing user, create a user if none.
})

passport.use(
  new GoogleStrategy(optionsG),
  (token, tokenSecret, profile, done) => {
    done(null, profile)
  }
)

