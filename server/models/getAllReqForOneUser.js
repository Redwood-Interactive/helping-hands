const db = require('../../database/index.js');

module.exports = {
  getAllReqForOneUser: (userID) => {
    var query = `
      SELECT * FROM requests WHERE user_id=${userID};
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