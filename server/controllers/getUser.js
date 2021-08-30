module.exports = {
  get: (req, res) => {
    res.send(req.user)
  }
}