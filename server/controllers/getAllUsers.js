var { getAllUsers } = require('../models/index.js');

module.exports = {
  get: (req, res) => {
    getAllUsers.getAllUsers()
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}