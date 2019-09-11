//Local Variable
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load(); //loads invironment variables
}

//prep export object
config = {};

//load the loaders
config.app = require('./expressSetup.js')

db = require('./postgreSetup');

config.query = db.query;
config.pool = db.pool;
config.client = db.client;

config.session = require('./sessionSetup')(config.app,config.pool)

//The following are so easy they don't require their own seperate cofiguration loaders
config.bcrypt = require('bcrypt');

//export the package
module.exports = config;