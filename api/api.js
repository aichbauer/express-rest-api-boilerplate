/**
 * third party libraries
 */
const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const http = require('http');
const mapRoutes = require('express-routes-mapper');

/**
 * server configuration
 */
const config = require('../config/');
const database = require('../config/database');
const auth = require('./policies/auth.policy');

/**
 * express application
 */
const app = express();
const server = http.Server(app);
const mappedOpenRoutes = mapRoutes(config.publicRoutes, 'api/controllers/');
const mappedAuthRoutes = mapRoutes(config.privateRoutes, 'api/controllers/');

// environment: development, testing, production
const environment = process.env.NODE_ENV;

// secure express app
app.use(helmet({
  dnsPrefetchControl: false,
  frameguard: false,
  ieNoOpen: false,
}));

// parsing the request bodys
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// fill routes for express appliction
app.use('/public', mappedOpenRoutes);
app.use('/private', mappedAuthRoutes);

// secure your private routes with jwt authentication middleware
app.all('/private/*', (req, res, next) => auth(req, res, next));

/**
 * Database
 *
 * uses the database for your environment
 * defined in config/connection.js (development, testing, production)
 *
 * default: drop db for development, keep for production
 * defined in config/index.js (keep)
 */
const DB = database
  .authenticate()
  .then(() => {
    if (environment === 'development' &&
      config.keep === false) {
      return database
        .drop()
        .then(() => (
          database
            .sync()
            .then(() => {
              console.log(`There we go ♕\nStarted in ${environment}\nGladly listening on http://127.0.0.1:${config.port}`);
              console.log('Connection to the database has been established successfully');
            })
            .catch((err) => console.error('Unable to connect to the database:', err))
        ))
        .catch((err) => console.error('Unable to connect to the database:', err));
    }

    // keep data in database after restart
    return database
      .sync()
      .then(() => {
        console.log(`There we go ♕\nStarted in ${environment}\nGladly listening on http://127.0.0.1:${config.port}`);
        console.log('Connection to the database has been established successfully');
      });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

server.listen(config.port, () => {
  if (environment !== 'production' &&
    environment !== 'development' &&
    environment !== 'testing'
  ) {
    console.error(`NODE_ENV is set to ${environment}, but only production and development are valid.`);
    process.exit(1);
  }
  return DB;
});
