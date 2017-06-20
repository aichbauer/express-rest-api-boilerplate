const database = require('../../config/database');

const dbService = (environment, migrate) => {
  const authenticateDB = () => (
    database
      .authenticate()
  );

  const dropDB = () => (
    database
      .drop()
  );

  const syncDB = () => (
    database
      .sync()
  );

  const successfulDBStart = () => (
    console.info('connection to the database has been established successfully')
  );

  const errorDBStart = (err) => (
    console.info('unable to connect to the database:', err)
  );

  const wrongEnvironment = () => {
    console.warn(`only development, staging, test and production are valid NODE_ENV variables but ${environment} is specified`);
    return process.exit(1);
  };

  const startMigrateTrue = () => (
    syncDB()
      .then(() => successfulDBStart())
      .catch((err) => errorDBStart(err))
  );

  const startMigrateFalse = () => (
    dropDB()
      .then(() => (
        syncDB()
          .then(() => successfulDBStart())
          .catch((err) => errorDBStart(err))
      )
        .catch((err) => errorDBStart(err)),
      )
  );

  const startDev = () => (
    authenticateDB()
      .then(() => {
        if (migrate) {
          return startMigrateTrue();
        }

        return startMigrateFalse();
      })
  );

  const startStage = () => (
    authenticateDB()
      .then(() => {
        if (migrate) {
          return startMigrateTrue();
        }

        return startMigrateFalse();
      })
  );

  const startTest = () => (
    authenticateDB()
      .then(() => startMigrateFalse())
  );

  const startProd = () => (
    authenticateDB()
      .then(() => startMigrateFalse())
  );

  const start = () => {
    switch (environment) {
      case 'development':
        return startDev();
      case 'staging':
        return startStage();
      case 'testing':
        return startTest();
      case 'production':
        return startProd();
      default:
        return wrongEnvironment();
    }
  };

  return {
    start,
  };
};

module.exports = dbService;
