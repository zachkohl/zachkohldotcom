function configurations(config){
    var config = config;
}


login = require('./loginModels');
login.configurations(config)


editor = require('./editorModels');
editor.configurations(config)



    module.exports.configurations = configurations;
    module.exports.login = login;
    module.exports.editor = editor;