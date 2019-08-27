config = require('./config');

config.app.get('/', function (req, res) {

   res.render('home')
});//end '/'

