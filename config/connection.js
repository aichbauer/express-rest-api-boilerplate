const development = {
  database: 'databasename',
  username: 'username',
  password: 'password',
  host: 'localhost',
  dialect: 'sqlite' || 'mysql' || 'postgres',
};

const testing = {
  database: 'databasename',
  username: 'username',
  password: 'password',
  host: 'localhost',
  dialect: 'sqlite' || 'mysql' || 'postgres',
};

const production = {
  database: process.env.DB_ENV,
  username: process.env.DB_USER_ENV,
  password: process.env.DB_PW_ENV,
  host: 'localhost',
  dialect: 'sqlite' || 'mysql' || 'postgres',
};

module.exports = {
  development,
  testing,
  production,
};
