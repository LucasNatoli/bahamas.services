'use strict'

const routes = [
  require('./accounts'),
  require('./price-alerts'),
  require('./system-watchlist')
];

// Add access to the app and db objects to each route
module.exports = function router(app, models) {
  return routes.forEach((route) => {
    route(app, models);
  });
};
