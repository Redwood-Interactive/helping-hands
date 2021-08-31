const db = require('../../database/index.js');

module.exports = {
  getAllContriForOneUser: (userID) => {
    var query = `
      SELECT * FROM contributions WHERE user_id=${userID};
    `;

    return db.query(query)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};