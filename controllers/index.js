function configurations(config, models) {
    var config = config;
    var models = models;
}

models = require('../models');
models.configurations(config);



login = require('./login');
login.configurations(config, models);






module.exports.configurations = configurations;
module.exports.login = login;

