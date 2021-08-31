const db = require('../../database/index.js');


module.exports = {
  getAllRequests: (data) => {
    var page = data.page * 20 || 0
    var values = [page]
    var query = `
      SELECT requests.id, requests.title, requests.r_description, requests.category, requests.r_date, requests.condition, JSON_BUILD_OBJECT('street_name', locations.street_name, 'city', locations.city, 'state', locations.state, 'zipcode', locations.zipcode) AS location
      FROM requests
      LEFT JOIN locations ON requests.user_id = locations.user_id
      GROUP BY requests.id, locations.street_name, locations.city, locations.state, locations.zipcode
      LIMIT 20
      OFFSET $1
    `;

    return db.query(query, values)
      .then((data) => {
        return data.rows;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  postOne: (data) => {

    var user_id = data.user_id;
    var title = data.title;
    var r_description = data.r_description;
    var category = data.category;



    var query = `
      INSERT INTO requests(
        user_id,
        title,
        r_description,
        category,
        r_date,
        available
      ) VALUES (
        ${user_id},
        '${title}',
        '${r_description}',
        '${category}',
        CURRENT_TIMESTAMP,
        'true'
      );
    `;
    return db.query(query)
      .then((data) => {
        return data
      })
      .catch((err) => {
        console.log(err);
      });
  }
}