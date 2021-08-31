const { updateUserInfo } = require('../models/index.js')

module.exports = {
  put: (req, res) => {
    updateUserInfo.updateUserInfo(req.body)
      .then((response) => {res.send('User information updated')})
      .catch((err) => {console.log(err)})
  }
}