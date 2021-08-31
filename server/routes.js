const { newCustomer, postFeedback, getContributions, getUser, requests, getContriForOneUser, getReqForOneUser, updateUserInfo, getUserInfo } = require('./controllers/index.js');
const router = require('express').Router();
const passport = require('passport');



// Database Endpoints:
router.get('/newcustomer', newCustomer.get);

router.get('/userInfo/:id', getUserInfo.get);

router.put('/updateUserInfo', updateUserInfo.put);

router.get('/getcontributions', getContributions.get);

router.get('/getAllContriForOneUser', getContriForOneUser.get);

router.get('/getAllReqForOneUser', getReqForOneUser.get);

router.post('/getcontributions', getContributions.post)

router.get('/requestsAll', requests.get)

router.post('/requestsAll', requests.post)



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