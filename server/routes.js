const { newCustomer } = require('./controllers/index.js');
const router = require('express').Router();
const passport = require('passport')

router.get('/newcustomer', newCustomer.get);



//AUTHENTICATION
router.get('/auth/google', passport.authenticate('google', {
  scope:['profile', 'email', 'https://www.googleapis.com/auth/user.phonenumbers.read']
}))

router.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
  // res.redirect('/')
  res.redirect('/')
})

router.post('/feedback', postFeedback.post)

module.exports = router;