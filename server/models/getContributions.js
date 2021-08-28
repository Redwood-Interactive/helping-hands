const db = require('../../database/index.js')


module.exports = {
  get20contributions: (data) => {
    var query = `
      SELECT * FROM contributions limit 20
    `;

    return db.query(query)
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.log(err)
    })
  }
}