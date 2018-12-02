/**
 * app.js
 */

import path from 'path';
import express from 'express';

import routes from './routes';

// Express app setup
const app = express();

// view engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// serve statuc files from 'public'
app.use(express.static(path.join(__dirname, './public')));

// use routes
app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: app.get('env') === 'development' ? err : {},
  });
  next();
});

export default app;
