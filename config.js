//Local Variable
if (process.env.NODE_ENV !== 'production') {
require('dotenv').load();
    }
//prep export object
config = {};

//Express +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const express = require('express');
const helmet = require('helmet');
const path = require('path') ;
const PORT = process.env.PORT || 3000;
const app = express(); 
app.use(helmet())
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json()); 
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'default'}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('static'));
app.listen(PORT, () => console.log('Example app listening on port 80!'))

config.app = app;







//Export +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


module.exports = config;