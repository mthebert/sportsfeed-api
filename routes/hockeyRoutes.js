const controller = require('../controllers/hockeyController');

module.exports = function(app) {
  app.route('/hockey/team/stats')
      .get(controller.get_team_stats);
};