const hockeyService = require('../services/hockeyService');

const controllers = {
  get_team_stats: function(req, res) {
          hockeyService.teamStats(req, res, function(err, teams) {
              if (err)
                  res.send(err);
              res.json(teams);
          });
      },
};

module.exports = controllers;