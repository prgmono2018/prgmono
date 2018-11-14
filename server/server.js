var morgan = require('morgan');
var winston = require('../config/winston');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var router = require('./routes/routes');
var cors = require('cors');
//import logger from 'morgan';
var app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MonoPrj', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(morgan('combined', { stream: winston.stream }));
console.log("server loadi!ng...")
app.use(cors()); //enable cross origin- so I will ablr to use the gui
app.use('/', router);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
