const db = require('../../database/index.js');

module.exports = {
  getUserInfo: (id) => {
    let query = {
      text: `SELECT * FROM users WHERE id = ($1)`,
      values: [id]
    }
    return db.query(query.text, query.values)
      .then((data) => {return data.rows[0]})
      .catch((err) => {console.log(err)})
  }
}