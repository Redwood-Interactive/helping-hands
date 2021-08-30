var { getContributions } = require('../models/index.js');

module.exports = {
  get: (req, res) => {
    getContributions.get20contributions(req.body)
      .then((data) => {
        console.log('successfull controller get16contributions');
        res.send(data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}