const db = require('../../database/index.js');

module.exports = {
  getAllReqForOneUser: (userID) => {
    var query = `
    SELECT requests.id, requests.user_id, requests.title, requests.r_description, requests.category, requests.r_date, requests.available, JSON_BUILD_OBJECT('street_name', locations.street_name, 'city', locations.city, 'state', locations.state, 'zipcode', locations.zipcode) AS location
    FROM requests
    LEFT JOIN locations ON requests.user_id = locations.user_id
    WHERE requests.user_id=($1)
    GROUP BY requests.id, locations.street_name, locations.city, locations.state, locations.zipcode
    ORDER BY requests.r_date DESC
  `;

var values = [userID]

    return db.query(query, values)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  removeReq: (reqID) => {
    var query = `UPDATE requests SET available = false WHERE id = ($1)`;
    var values =[reqID];

    return db.query(query, values)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
  }
};