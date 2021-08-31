var { getContriCount } = require('../models/index.js');

module.exports = {
  get: (req, res) => {
    getContriCount.getContriCount()
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}