const controller = require('../controllers/hockeyController');

module.exports = function(app) {
  app.route('/hockey')
      .get(controller.get_games);
};