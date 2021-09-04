const db = require('../../database/index.js');

module.exports = {
  postFeedback: (data) => {
    let query = {
      text: `INSERT INTO feedback (feedback) VALUES ($1)`,
      values: [data.feedback]
    };

    return db.query(query.text, query.values)
      .then(() => {
        return
      })
      .catch((err) => {
        console.log(err);
      });
  }
};