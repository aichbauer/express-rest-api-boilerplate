const privateRoutes = require('./routes/privateRoutes');
const publicRoutes = require('./routes/publicRoutes');

module.exports = {
  keep: false,
  privateRoutes,
  publicRoutes,
  port: '3333',
};
