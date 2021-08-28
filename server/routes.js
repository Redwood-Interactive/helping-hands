const { newCustomer } = require('./controllers/index.js');
const router = require('express').Router();
const passport = require('passport')

router.get('/newcustomer', newCustomer.get);



//AUTHENTICATION
router.get('/auth/google', passport.authenticate('google', {
  scope:['profile', 'email']
}))

router.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
  // res.redirect('/')
  res.redirect('/')
})

router.get('auth/logout', (req, res) => {
  req.logout();
  res.redirect('/')
})

router.post('/feedback', postFeedback.post)

module.exports = router;