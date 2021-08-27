const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const db = require('../database/index.js')
var router = require('./routes.js')

app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', router);

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})







