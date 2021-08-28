const db = require('../../database/index.js')


module.exports = {
  get16contributions: (data) => {
    var query = `
      SELECT * FROM contributions limit 16
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