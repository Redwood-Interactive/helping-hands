var { getAllContriForOneUser } = require('../models/index.js');

module.exports = {
  get: (req, res) => {
    let queryParams = req.query;
    let userID = queryParams.user_id;
    getAllContriForOneUser.getAllContriForOneUser(userID)
      .then((data) => {
        console.log('successful controller get all contributions for one user');
        res.send(data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
