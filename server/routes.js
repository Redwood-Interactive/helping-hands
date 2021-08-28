const { newCustomer, postFeedback } = require('./controllers/index.js');
const router = require('express').Router();
const passport = require('passport');

router.get('/newcustomer', newCustomer.get);



//AUTHENTICATION
router.get('/auth/google', passport.authenticate('google', {
  scope:['profile', 'email'],
   prompt: 'select_account'
}));

router.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/')
});

router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

router.post('/feedback', postFeedback.post);

module.exports = router;
