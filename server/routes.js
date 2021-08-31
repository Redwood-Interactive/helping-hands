const { newCustomer, postFeedback, getContributions, getUser, requests, getContriForOneUser, getReqForOneUser, updateUserInfo } = require('./controllers/index.js');
const router = require('express').Router();
const passport = require('passport');



// Database Endpoints:
router.get('/newcustomer', newCustomer.get);

router.put('/updateUserInfo', updateUserInfo.put);

router.get('/getcontributions', getContributions.get);

router.get('/getAllContriForOneUser', getContriForOneUser.get);

router.get('/getAllReqForOneUser', getReqForOneUser.get);

router.post('/getcontributions', getContributions.post)

router.get('/requests', requests.get)

router.post('/requests', requests.post)



//AUTHENTICATION
router.get('/user', getUser.get);

router.get('/auth/google', passport.authenticate('google', {
  scope:['profile', 'email'],
   prompt: 'select_account'
}));

router.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/settings');
});

router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});




router.post('/feedback', postFeedback.post);

module.exports = router;