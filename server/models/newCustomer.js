const db = require('../../database/index.js');


module.exports = {
  getNewUser: (data) => {
    var query = `SELECT * FROM users`;
    //need to have this return here for query and whatever data is being returned otherwise it returns as undefined
    return db.query(query)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};