var { getAllReqForOneUser } = require('../models/index.js');

module.exports = {
  get: (req, res) => {
    let queryParams = req.query;
    let userID = queryParams.user_id;
    getAllReqForOneUser.getAllReqForOneUser(userID)
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}