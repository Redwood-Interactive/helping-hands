module.exports.dbparams = {
  user: 'justincase',
  host: '127.0.0.1',
  database: 'testing',
  port: 5432,
}


// These are for google authorization.
module.exports.optionsG = {
  callbackURL: '/auth/google/redirect',
  clientID: '46428805723-3kh105s4i4mpcl875n6ifil2urjmlcvp.apps.googleusercontent.com',
  clientSecret: 'x1kUrn7ceL_LXaEyuxbEcgVu'
}

module.exports.session = {
  cookieKey: 'cactusIsSearchingForAnOasis'
}