var express = require('express');
var bodyParser = require('body-parser');
var route = require('./App/Routes/index');
var app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('App/Public'));
app.use(route);

app.listen(app.get('port'), ()=>{
  console.log("listening on port :"+app.get('port'));
});
