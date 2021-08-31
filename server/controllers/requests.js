var {getAllRequests, postOne} = require('../models/requests.js')

module.exports = {
  get: (req, res) => {
    getAllRequests(req)
    .then((data)=>{

      res.send(data)

    })
    .catch((error)=>{console.log(error)})
  },
  post: (req, res) =>{
    postOne(req)
    .then(()=>{
      res.sendStatus(200)
    })
    .catch((error)=>{console.log(error)})
  }
}