const db = require('../../database/index.js');

module.exports = {
  getContriCount: () => {
    var query = `SELECT COUNT(*) FROM contributions;`;

    return db.query(query)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};