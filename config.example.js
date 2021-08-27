/*
Steps to set up config.js:
  replace all fields in module.exports object with your psql information
  delete example from config file name
*/

module.exports = {
  user: 'your username here',
  host: 'your ip here',
  database: 'your database name here',
  port: 'your port here, delete single quotes to make this one a number',
}