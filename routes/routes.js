function routes(config) {
    app = config.app;
    //setup controllers
    controllers = require('../controllers');
    controllers.configurations(config);
    //all routes go here

    //any extra logic needs to be passed into a controller function
    //req and res never get passed to controller functions. 

    function target(req) {//This function is for DRY
        return controllers.login.targetOBJ(req.query.email, req.query.firstName, req.query.lastName, req.query.target);
    }


    async function login(req){
        req.session.user = user.username;
        req.session.userId = user.id;
        req.session.save(function (err) {req.session.reload(function(){ return true;});});}

    // app.get('/', function (req, res) {
    //     res.locals.layout = "blank";
    //     res.render('home');
    // });//end '/'

    app.get('/', function (req, res) {
        res.locals.layout = "blank";
        res.render('pages/homepage',{message:'<p>This is gonna be huge!</p>'});
    });//end '/'

    app.get('/login', function (req, res) {
        res.render('login/login', target(req))
    })

    app.post('/login', async function (req, res) {
        response = await controllers.login.logOn(req.body.username, req.body.password, target(req));
        if(response.attempt){await login(req);res.redirect(response.string);}else{res.render(response.template, response.parameters)};
    });// end app.post

    app.get('/register', function (req, res) {
        res.render('login/register', target(req))
    })


    app.post('/register', async function (req, res) {
        response = await controllers.login.register(req.body.username, req.body.password, req.body.email, target(req));
        if(response.attempt){await login(req);res.redirect(response.string);}else{res.render(response.template, response.parameters)};
    });// end app.post

    app.get('/logout', function (req, res, next) {
        req.session.destroy(); //Deletes the session after the response is read. https://www.npmjs.com/package/express-session
        res.render('login/logout')
    });//end logout



}//end routes


module.exports = routes;