const db = require('../../database/index.js');

module.exports = {
  updateUserInfo: (user) => {
    let { user_id, street_name, city, state, zipcode } = user.location
    let query = {
      text: `WITH ins AS (UPDATE users
        SET first_name = ($1),
            last_name = ($2),
            email = ($3),
            phone = ($4),
            profile_pic = ($5)
        WHERE id = ($6)
        )
        INSERT INTO locations (user_id, street_name, city, state, zipcode) VALUES ($6, $7, $8, $9, $10)
        `,
      values: [user.first_name, user.last_name, user.email, user.phone, user.profile_pic, user.id, street_name, city, state, zipcode]
    }
    return db.query(query.text, query.values)
      .then((data) => {return data})
      .catch((err) => {console.log(err)})
  }
}