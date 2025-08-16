var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const { db } = require('./config/database');

let customerLogger = require('./middlewares/loggerMiddleware');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let todosRouter = require('./routes/todos');
let testRouter = require('./routes/test');
let movieRouter = require('./routes/movies');
let reviewRouter = require('./routes/reviews');
let auth = require('./middlewares/auth');
var app = express();

mongoose.connect(db).then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(customerLogger('turingLogger'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  console.log('Our Middleware time',req.time, ' Url ',req.url);
  next();
})
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
//app.use('/test',testRouter);
app.use('/api/todos', auth.verifyUserToken, todosRouter);
app.use('/api/movies',auth.verifyUserToken,movieRouter);
app.use('/api/reviews',auth.verifyUserToken, reviewRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
