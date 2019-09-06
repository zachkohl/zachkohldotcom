//Local Variable
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load(); //loads invironment variables
        }

    //prep export object
    config = {};
    
    //load the loaders
    config.app = require('./expressSetup.js')

    
    //export the package
    module.exports = config;