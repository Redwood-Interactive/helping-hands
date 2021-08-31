const db = require('../../database/index.js');


module.exports = {
  getAllRequests: (data) => {

    var query = `
      SELECT * from requests;
    `;

    return db.query(query)
      .then((data) => {
        return data.rows;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  postOne: (data)=>{

    var user_id = data.user_id;
    var title = data.title;
    var r_description = data.r_description;
    var category = data.category;



    var query =`
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