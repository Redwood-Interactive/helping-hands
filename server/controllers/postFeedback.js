var { postFeedback } = require('../models/index.js')

module.exports = {
  post: (req, res) => {
    postFeedback.postFeedback(req.body)
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}