const { updateUserInfo } = require('../models/index.js')

module.exports = {
  put: (req, res) => {
    // request needs to provide the object with all the info
    console.log('what is it then', req.body)
    updateUserInfo.updateUserInfo(req.body)
      .then((response) => {res.send('User information updated')})
      .catch((err) => {console.log(err)})
  }
}