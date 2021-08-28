const { newCustomer, postFeedback } = require('./controllers/index.js');
const router = require('express').Router();
const passport = require('passport');

router.get('/newcustomer', newCustomer.get);



//AUTHENTICATION
router.get('/auth/google', passport.authenticate('google', {
  scope:['profile', 'email']
}));

router.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
  // res.redirect('/')
  res.send(req.user)
});

router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

router.post('/feedback', postFeedback.post);

module.exports = router;

// express:sess=eyJwYXNzcG9ydCI6eyJ1c2VyIjo0fX0=; express:sess.sig=k8IWsh-ajezo9oByZcAOAss1YNc

// express:sess=eyJwYXNzcG9ydCI6e319; express:sess.sig=j4PmiSSD8LCPwlEfO0pb_uj0gZ4