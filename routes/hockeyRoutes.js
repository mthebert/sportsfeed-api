const controller = require('../controllers/hockeyController');

module.exports = function(app) {
  app.route('/hockey/teams/season/stats').get(controller.get_all_season_stats);
  app.route('/hockey/teams/playoff/stats').get(controller.get_all_playoff_stats);
  app.route('/hockey/teams').get(controller.get_teams);
};