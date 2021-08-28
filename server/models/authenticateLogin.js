const db = require('../../database/index.js')

module.exports = {
  authenticate: (authid) => {
    let query = {
      text: `SELECT users.id, first_name, last_name, current_rating, email, phone, profile_pic, array_agg(jsonb_build_object('id', locations.id, 'street_name', locations.street_name, 'city', locations.city, 'state', locations.state, 'zipcode', locations.zipcode)) as locations FROM users
      LEFT JOIN locations ON users.id = user_id
      WHERE users.auth_id = ($1)
      GROUP BY users.id`,
      values: [authid]
    }
    return db.query(query.text, query.values)
      .then((data) => {return data})
      .catch((err) => {console.log(err)})
  },

  deserializeAuth: (userid) => {
    let query = {
      text: `SELECT users.id, first_name, last_name, current_rating, email, phone, profile_pic, array_agg(jsonb_build_object('id', locations.id, 'street_name', locations.street_name, 'city', locations.city, 'state', locations.state, 'zipcode', locations.zipcode)) as locations FROM users
      LEFT JOIN locations ON users.id = user_id
      WHERE users.id = ($1)
      GROUP BY users.id`,
      values: [userid]
    }
    return db.query(query.text, query.values)
      .then((data) => {return data})
      .catch((err) => {console.log(err)})
  },

  createNewUser: (authObject) => {
    console.log('we are in createNewUser in authenticateLogin', authObject)
    let {sub, given_name, family_name, email, picture} = authObject
    let query = {
      text: `INSERT INTO users (first_name, last_name, email, profile_pic, auth_id) VALUES ($1, $2, $3, $4, $5) returning *`,
      values: [given_name, family_name, email, picture, sub]
    }
    return db.query(query.text, query.values)
    .then((data) => {return data})
    .catch((err) => {console.log(err)})
  }
}
