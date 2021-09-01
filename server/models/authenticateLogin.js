const db = require('../../database/index.js');

module.exports = {
  authenticate: (authid) => {
    let query = {
      text: `SELECT id FROM users WHERE auth_id = ($1)`,
      values: [authid]
    };
    return db.query(query.text, query.values)
      .then((data) => { return data; })
      .catch((err) => { console.log(err); });
  },

  deserializeAuth: (userid) => {
    let query = {
      text: `SELECT id FROM users WHERE id = ($1)`,
      values: [userid]
    };
    return db.query(query.text, query.values)
      .then((data) => { return data; })
      .catch((err) => { console.log(err); });
  },

  createNewUser: (authObject) => {
    let {sub, given_name, family_name, email, picture} = authObject;
    let query = {
      text: `INSERT INTO users (first_name, last_name, email, profile_pic, auth_id) VALUES ($1, $2, $3, $4, $5) returning *`,
      values: [given_name, family_name, email, picture, sub]
    };
    return db.query(query.text, query.values)
      .then((data) => { return data; })
      .catch((err) => { console.log(err); });
  }
};