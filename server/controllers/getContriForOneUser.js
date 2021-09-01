var { getAllContriForOneUser, removeContri } = require('../models/getAllContriForOneUser.js');

module.exports = {
  get: (req, res) => {
    let queryParams = req.query;
    let userID = queryParams.user_id;
    getAllContriForOneUser(userID)
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  put: (req, res) =>{
    let queryParams = req.query;
    let contriID = queryParams.contri_id;
    removeContri(contriID)
    .then(()=>{
      res.sendStatus(200)
    })
    .catch((error)=>{console.log(error)})
  }
}
