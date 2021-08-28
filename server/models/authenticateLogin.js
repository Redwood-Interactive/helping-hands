const db = require('../../database/index.js');

module.exports = {
  authenticate: (authid) => {
    let query = {
      text: `SELECT * FROM users WHERE auth_id = ($1)`,
      values: [authid]
    }
    return db.query(query.text, query.values)
      .then((data) => {return data})
      .catch((err) => {console.log(err)})
  }
}