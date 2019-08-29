config = require('./config');

config.app.get('/', function (req, res) {

   res.render('home')
});//end '/'

config.app.get('/navbar', function (req, res) {

   res.render('navbar')
});//end '/navbar'
