const db = require('../../database/index.js');

module.exports = {
  getAllContriForOneUser: (userID) => {
    var query = `
    SELECT contributions.id, contributions.user_id, contributions.title, contributions.c_description, contributions.category, contributions.c_date, contributions.condition, contributions.available, contributions.for_free, ARRAY_AGG(photos.photo_url) AS photos, JSON_BUILD_OBJECT('street_name', locations.street_name, 'city', locations.city, 'state', locations.state, 'zipcode', locations.zipcode) AS location
    FROM contributions
    LEFT JOIN photos ON contributions.id = photos.contribution_id
    LEFT JOIN locations ON contributions.user_id = locations.user_id
    WHERE contributions.user_id=${userID}
    GROUP BY contributions.id, locations.street_name, locations.city, locations.state, locations.zipcode
    ORDER BY contributions.c_date DESC`;

    return db.query(query)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  removeContri: (contriID) => {
    var query = `UPDATE contributions SET available = false WHERE id = ${contriID}`;
    return db.query(query)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
  }
};