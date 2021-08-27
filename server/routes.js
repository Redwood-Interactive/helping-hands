var controller = require('./controllers/index.js');
var router = require('express').Router();

router.get('/newcustomer', controller.newCustomer.get);



module.exports = router;