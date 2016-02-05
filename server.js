var express = require('express');
var app = express();

var port = process.env.PORT || 8000;
var bodyParser = require('body-parser');
var morgan = require('morgan');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());        


app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.redirect('/index.html');
});

app.listen(port);
        