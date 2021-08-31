var { getUserInfo } = require('../models/getUserInfo.js');

module.exports = {
  get: (req, res) => {
    getUserInfo(req.body.id)
      .then((response) => {
        res.send(response)
      })
      .catch((err) => {console.log(err)})
  }
}