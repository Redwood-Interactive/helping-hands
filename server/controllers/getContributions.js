var { getContributions } = require('../models/index.js');

module.exports = {
  get: (req, res) => {
    getContributions.getContributions(req.query)
      .then((data) => {
        console.log('successfull controller get16contributions');
        res.send(data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}