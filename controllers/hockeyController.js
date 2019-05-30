const hockeyService = require('../services/hockeyService');

const controllers = {
  get_all_season_stats: function(req, res) {
    hockeyService.teamSeasonStats(req, res, function(err, teams) {
        if (err)
            res.send(err);
        res.json(teams);
    });
  },
  get_all_playoff_stats: function(req, res) {
    hockeyService.teamPlayoffStats(req, res, function(err, teams) {
        if (err)
            res.send(err);
        res.json(teams);
    });
  },
  get_teams: function(req, res) {
    
  }
};

module.exports = controllers;