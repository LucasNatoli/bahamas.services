const config = require('./config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    config.db_name,
    config.user_name,
    config.password,
    {
        host: config.host,
        port: config.port,
        dialect: 'mysql',
        define: {
            underscored: true
        },
        logging: false
    }
);

var models = {};

models.Sequelize = Sequelize;
models.sequelize = sequelize;

//Models/tables
models.account = require('./account')(sequelize, Sequelize)
models.priceAlert = require('./price-alert')(sequelize, Sequelize)
models.systemWatchlist = require('./system-watchlist')(sequelize, Sequelize)

module.exports = models;
