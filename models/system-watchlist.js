'user strict'

module.exports = (sequelize, DataTypes) => {
  const SystemWatchlist = sequelize.define('system_watchlist', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      required: true
    },
    symbol: {
      type: DataTypes.STRING,
      required: true
    },
    name: {
      type: DataTypes.STRING,
      required: true
    }
  }, {
    paranoid: true
  });
  return SystemWatchlist;
};
