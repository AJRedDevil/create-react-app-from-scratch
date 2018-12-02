/**
 * app.js
 */

import express from 'express';

import routes from './routes';

// Express app setup
const app = express();

// use routes
app.use('/', routes);

export default app;
