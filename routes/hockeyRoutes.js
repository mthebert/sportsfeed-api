const controller = require('../controllers/hockeyController');
const cache = require('express-redis-cache')();

module.exports = function(app) {
  app.route('/hockey/teams/season/stats').get(cache.route(), controller.get_all_season_stats);
  app.route('/hockey/teams/playoff/stats').get(cache.route(), controller.get_all_playoff_stats);
  app.route('/hockey/teams').get(cache.route(), controller.get_teams);
};