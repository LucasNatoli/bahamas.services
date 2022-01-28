'user strict'

module.exports = (sequelize, DataTypes) => {
  const PriceAlert = sequelize.define('price_alert', {
    userid: {
      type: DataTypes.UUID,
      required: true
    },
    symbolid: {
      type: DataTypes.INTEGER,
      required: true
    },
    name: {
      type: DataTypes.STRING,
      required: true
    },
    condition: {
      type: DataTypes.STRING,
      required: true
    },
    value: {
      type: DataTypes.STRING,
      required: true
    },
    activated: {
      type: DataTypes.INTEGER,
      required: true,
      defaultValue: 0
    },
    lastactivated: {
      type: DataTypes.DATE
    }
  }, {
    paranoid: true
  });
  return PriceAlert;
};
