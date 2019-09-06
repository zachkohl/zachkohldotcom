config = require('./loaders');

config.app.get('/', function (req, res) {

   res.render('home')
});//end '/'

config.app.get('/navbar', function (req, res) {

   res.render('navbar')
});//end '/navbar'



routes = require('./routes/routes.js')(config);