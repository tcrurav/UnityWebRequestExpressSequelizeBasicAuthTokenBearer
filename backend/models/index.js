const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, 
  dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    // operatorsAliases: false,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });

  const db= {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  db.bicycles = require("./bicycle.model.js")(sequelize, Sequelize);
  db.users = require("./user.model.js")(sequelize, Sequelize);

  module.exports = db;