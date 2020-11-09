var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
const options = require('../db/db_config');
 
var sessionStore = new MySQLStore(options);

module.exports = sessionStore;