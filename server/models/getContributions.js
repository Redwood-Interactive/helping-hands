const db = require('../../database/index.js')


module.exports = {
  get20contributions: (data) => {
    var query = `
      SELECT *
      FROM contributions
      LEFT JOIN photos
      ON contributions.id = photos.contribution_id
      limit 20
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