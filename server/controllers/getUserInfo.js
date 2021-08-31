var { getUserInfo } = require('../models/getUserInfo.js');

module.exports = {
  get: (req, res) => {
    console.log(req.params)
    getUserInfo(req.params.id)
      .then((response) => {
        res.send(response)
      })
      .catch((err) => {console.log(err)})
  }
}