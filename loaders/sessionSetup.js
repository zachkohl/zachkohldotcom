function session(app,pool){
const session = require('express-session');
pgSession = require('connect-pg-simple')(session); //This all ends up encrypted on the client side. Used wireshark to check. 

var sess = {
  store: new pgSession({
    pool : pool,                // Connection pool
     // Use another table-name than the default "session" one
  }),
  secret: process.env.COOKIE_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true
}
 
if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}
 
app.use(session(sess))
}
module.exports = session;