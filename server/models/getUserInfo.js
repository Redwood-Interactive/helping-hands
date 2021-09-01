const db = require('../../database/index.js');

module.exports = {
  getUserInfo: (id) => {
    let query = {
      text: `SELECT users.id, first_name, last_name, current_rating, email, phone, profile_pic, array_agg(jsonb_build_object('id', locations.id, 'street_name', locations.street_name, 'city', locations.city, 'state', locations.state, 'zipcode', locations.zipcode)) as locations FROM users
      LEFT JOIN locations ON users.id = user_id
      WHERE users.id = ($1)
      GROUP BY users.id`,
      values: [id]
    }
    return db.query(query.text, query.values)
      .then((data) => {return data.rows[0]})
      .catch((err) => {console.log(err)})
  }
}