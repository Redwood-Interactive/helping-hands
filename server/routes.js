var { newCustomer, getContributions} = require('./controllers/index.js');
var router = require('express').Router();
const passport = require('passport')

router.get('/newcustomer', newCustomer.get);

router.get('/getcontributions', getContributions.get)



//AUTHENTICATION
router.get('/auth/google', passport.authenticate('google', {
  scope:['profile', 'email', 'https://www.googleapis.com/auth/user.phonenumbers.read']
}))

router.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/')
})

module.exports = router;