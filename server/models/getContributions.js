const db = require('../../database/index.js');
const {presetName, cloudName} = require('../../config.js')


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
      WHERE contributions.available = true
      GROUP BY contributions.id, users.id, locations.street_name, locations.city, locations.state, locations.zipcode
      ORDER BY contributions.c_date DESC
      LIMIT 20
      OFFSET ($1)
    `;

    return db.query(query, values)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  postContributions: (data) =>{
    var user_id = data.user_id;
    var title = data.title;
    var c_description = data.c_description;
    var category = data.category;
    var condition = data.condition;
    var for_free = data.for_free;
    this.image = data.image? data.image : 'https://res.cloudinary.com/jpbust/image/upload/v1630447070/ypakj1nr5ft7ryfrezf0.png';


    var query1 = `
    INSERT INTO contributions
      (user_id,
      title,
      c_description,
      category,
      condition,
      available,
      for_free
    ) VALUES (
        ${user_id},
        '${title}',
        '${c_description}',
        '${category}',
        '${condition}',
        'true',
        '${for_free}'
    ) RETURNING id;
    `;
    return db.query(query1)
    .then((data) => {
      var contriId = data.rows[0].id;
      return contriId
    })
    .then((id)=>{
      if (typeof this.image === 'string') {
          var query=`
            INSERT INTO photos
            (contribution_id,
            photo_url
            ) VALUES (
            ${id},
            '${this.image}'
            );
            `;
            return db.query(query)
      } else {
        this.image.map( (photo)=>  {

            var imageUrl = photo
            var query=`
              INSERT INTO photos
              (contribution_id,
              photo_url
              ) VALUES (
              ${id},
              '${imageUrl}'
              );
              `;
            return db.query(query)
            .then(()=>{

            })
            .catch((error)=>{ console.log('image upload failed')})
        })
      }

    })
    .then(()=>{console.log('success')})
    .catch((err) => {console.log(err);})
  }
};