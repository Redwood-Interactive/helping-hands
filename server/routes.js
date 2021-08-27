var { newCustomer } = require('./controllers/index.js');
var router = require('express').Router();

router.get('/newcustomer', newCustomer.get);

module.exports = router;