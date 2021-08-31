const { Pool } = require('pg')
const { dbparams } = require('../config.js')

const pool = new Pool ({
  "user": dbparams.user,
  "password": dbparams.password,
  "host": dbparams.host,
  "database": dbparams.database,
  "port": dbparams.port,
})

module.exports = pool;