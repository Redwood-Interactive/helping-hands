var { newCustomer } = require('../models/index.js');

module.exports = {
  get: (req, res) => {
    newCustomer.getNewUser(req.body)
      .then((data) => {
        console.log('successfull controller postNewUser');
        res.send(data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}