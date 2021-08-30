const db = require('../../database/index.js');


module.exports = {
  getContributions: (data) => {
    var page = data.page * 20 || 0
    var values = [page]
    var query = `
      SELECT contributions.id, contributions.title, contributions.c_description, contributions.category, contributions.c_date, contributions.condition, contributions.available, contributions.for_free, JSON_BUILD_OBJECT('user_id', users.id,'first_name', users.first_name, 'last_name', users.last_name, 'current_rating', users.current_rating, 'email', users.email, 'phone', users.phone, 'profile_pic', users.profile_pic, 'auth_id', users.auth_id) AS user, ARRAY_AGG(photos.photo_url) AS photos, JSON_BUILD_OBJECT('street_name', locations.street_name, 'city', locations.city, 'state', locations.state, 'zipcode', locations.zipcode) AS location
      FROM contributions
      LEFT JOIN photos ON contributions.id = photos.contribution_id
      LEFT JOIN users ON contributions.user_id = users.id
      LEFT JOIN locations ON contributions.user_id = locations.user_id
      GROUP BY contributions.id, users.id, locations.street_name, locations.city, locations.state, locations.zipcode
      LIMIT 20
      OFFSET $1
    `;

    return db.query(query, values)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};