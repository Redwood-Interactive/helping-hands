var { getContributions } = require('../models/index.js');

module.exports = {
  get: (req, res) => {
    console.log('this is req.query in getCont', req.query)
    getContributions.getContributions(req.query)
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  post: (req, res) => {

    getContributions.postContributions(req.body)
      .then(()=>{


        res.sendStatus(200)

      })
      .catch((error)=>{console.log('postRequest error', error)})
  }
}