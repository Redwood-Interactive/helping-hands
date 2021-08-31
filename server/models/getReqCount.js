const db = require('../../database/index.js');

module.exports = {
  getReqCount: () => {
    var query = `SELECT COUNT(*) FROM requests;`;

    return db.query(query)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};