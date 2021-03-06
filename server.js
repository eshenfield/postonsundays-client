var express  = require('express');
var app      = express();                               
var morgan = require('morgan');             
var bodyParser = require('body-parser');    
var methodOverride = require('method-override'); 

var port = process.env.PORT || 8080;

app.use(express.static(__dirname ));                 
app.use(morgan('dev'));                                         
app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());

app.listen(port);
console.log("App listening on port 8080");