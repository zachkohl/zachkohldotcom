function routes(config) {
    app = config.app;
    var checkSession = config.checkSession;
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

    app.get('/', async function (req, res) {
        res.locals.layout = "blank";
        if ((req.session.user)&&(typeof req.query.displayNormal==='undefined')){ //Does the session exist? Recall that the express-session is using its own id system in the background to hook into a specific user profile.
            let editor = controllers.editor.panel();
            let readPage = await controllers.editor.readPage(req.route.path);
          //  let editorHTML = {wrapperClass:editor.wrapperClass,editorHTML:editor.editorHTML,script:editor.script,navContainerWithEditor:'navContainerWithEditor'};
          //  let package = Object.assign(readPage,editorHTML);
            res.render('frames',{path:req.route.path});
          } else {
       let package = await controllers.editor.readPage(req.route.path);
        res.render('pages/homepage',package);
          }
    });//end '/'


    app.get('/panes',checkSession,function(req,res){
        res.locals.layout = "blank";
            res.render('frames');
    })

    app.get('/editor',checkSession,async function(req,res){
        res.locals.layout = "blank";
        let package = await controllers.editor.readPage(req.query.path)
            res.render('editor',{package:JSON.stringify(package),slug:req.query.path});
    })

    app.get('/login', function (req, res) {
        res.render('login/login', target(req))
    })

    app.post('/login', async function (req, res) {
        response = await controllers.login.logOn(req.body.username, req.body.password, target(req));
        if(response.attempt){await login(req);res.redirect(response.string);}else{res.render(response.template, response.parameters)};
    });// end app.post

    // app.get('/register', function (req, res) {
    //     res.render('login/register', target(req))
    // })


    app.post('/register', async function (req, res) {
        response = await controllers.login.register(req.body.username, req.body.password, req.body.email, target(req));
        if(response.attempt){await login(req);res.redirect(response.string);}else{res.render(response.template, response.parameters)};
    });// end app.post

    app.get('/logout', function (req, res, next) {
        req.session.destroy(); //Deletes the session after the response is read. https://www.npmjs.com/package/express-session
        res.render('login/logout')
    });//end logout

app.post('/editor',checkSession,async function(req,res){
    if (req.session.user){
    let package = req.body.package;
    let update = await controllers.editor.update(package);
    res.send(update)
    }else{
        res.send('fail')
    }
});
















}//end routes


module.exports = routes;