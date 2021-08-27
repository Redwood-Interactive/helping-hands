const db = require('../../database/index.js')


module.exports = {
  getNewUser: (data) => {
    console.log('something')

    var query = `
    SELECT * FROM users;
    `
    return db.query(query)
    .then((data) => {
      console.log('querySucessfull (models)')
      return data
    })
    .catch((err) => {
      console.log(err)
    })
  }
}