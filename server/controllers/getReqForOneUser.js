var { getAllReqForOneUser, removeReq } = require('../models/getAllReqForOneUser.js');

module.exports = {
  get: (req, res) => {
    let queryParams = req.query;
    let userID = queryParams.user_id;
    getAllReqForOneUser(userID)
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  put: (req, res) =>{
    let queryParams = req.query;
    let reqID = queryParams.req_id;
    removeReq(reqID)
    .then(()=>{
      res.sendStatus(200)
    })
    .catch((error)=>{console.log(error)})
  }
}