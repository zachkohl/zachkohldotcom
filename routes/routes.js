function routes(config){
app = config.app;
//all routes go here

//any extra logic needs to be passed into a controller function

app.get('/', function (req, res) {

    res.render('home')
 });//end '/'
 

}

module.exports = routes;