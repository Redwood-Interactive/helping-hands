const db = require('../../database/index.js');

module.exports = {
  getAllUsers: () => {
    var query = `SELECT COUNT(*) FROM users;`;

    return db.query(query)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}