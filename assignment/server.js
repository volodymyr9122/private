const express = require("express");
const app = express();


//******SET UP MONGOOSE CONECTION
//import the mongoose module
const mongoose = require('mongoose');
//set up default mongoose connection
const mongoDB = 'mongodb://localhost/assignment';
mongoose.connect(mongoDB, {
    autoIndex: process.env.NODE_ENV !== 'production'
});
//get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Allow cross origin request
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})



//import  node libraries
const path = require('path');
const bodyParser = require('body-parser');
const log = require('log');


//handling particular set of related "route" (URL path)
const index = require('./routes/index');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//add the middleware libraries into the request handling chain
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//add (previously imported) route-handling code to the request handling chain
app.use('/', index);

//listen to port
app.listen(process.env.port || 8000);
console.log(`Magic happens on port  ${8000}`);


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
