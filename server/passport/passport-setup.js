const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20');
const { optionsG } = require('../../config.js')
const { authenticateLogin } = require('../models/index.js')


passport.serializeUser((user, done) => {
  // the user.id is the POSTGRES GENERATED ID
  // return this id to be on the cookie.
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  // user ID is passed in when someone who is logged in is on the page. we now need to find the user with the correct id.
  console.log('id')
  authenticateLogin.deserializeAuth(id)
    .then((data)=>{
      if (data.rows) {
        done(null, data.rows[0])
      }
    })
    .catch((err) => {console.log(err)})
})

passport.use(
  new GoogleStrategy(optionsG,
    (token, tokenSecret, profile, done) => {
      let { sub, given_name, family_name, picture } = profile._json
      authenticateLogin.authenticate(sub)
        .then((data) => {
          if (data.rows[0]) {
            done(null, data.rows[0])
          } else {
            authenticateLogin.createNewUser(profile._json)
              .then((data) => {
                done(null, data.rows[0])})
              .catch((err) => {console.log(err)})
          }
        })
        .catch((err) => {console.log(err)})
    }
  )
)


/* Profile Object:
{
  id: '114799463748278374395',
  displayName: 'Katie Law',
  name: { familyName: 'Law', givenName: 'Katie' },
  photos: [
    {
      value: 'https://lh3.googleusercontent.com/a/AATXAJx7MWHCD6AsWbZGd7R04lGb1EiEj2JpZdRTvS3t=s96-c'
    }
  ],
  provider: 'google',
  _raw: '{\n' +
    '  "sub": "114799463748278374395",\n' +
    '  "name": "Katie Law",\n' +
    '  "given_name": "Katie",\n' +
    '  "family_name": "Law",\n' +
    '  "picture": "https://lh3.googleusercontent.com/a/AATXAJx7MWHCD6AsWbZGd7R04lGb1EiEj2JpZdRTvS3t\\u003ds96-c",\n' +
    '  "locale": "en"\n' +
    '}',
  _json: {
    sub: '114799463748278374395',
    name: 'Katie Law',
    given_name: 'Katie',
    family_name: 'Law',
    picture: 'https://lh3.googleusercontent.com/a/AATXAJx7MWHCD6AsWbZGd7R04lGb1EiEj2JpZdRTvS3t=s96-c',
    locale: 'en'
  }
}

*/

