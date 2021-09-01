var { getReqCount } = require('../models/index.js');

module.exports = {
  get: (req, res) => {
    getReqCount.getReqCount()
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}