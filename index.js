var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Mongo
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/moneycount');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to database')
});

//App config
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Import Models
require('./models/account');
require('./models/operation');
require('./models/user');

//Import Routes
var accountRoutes = require('./routes/accountRoutes');
var operationRoutes = require('./routes/operationRoutes');
var userRoutes = require('./routes/userRoutes');
app.use(accountRoutes);
app.use(operationRoutes);
app.use(userRoutes);

app.get('/', function (req, res) {
  res.send('welcome to MoneyCount backend')
})

const PORT = 3000;
app.listen(PORT);