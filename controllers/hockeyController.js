const hockeyServie = require('../services/hockeyService');

const controllers = {
  get_games: function(req, res) {
        res.json({status: 'OK'})
      },
};

module.exports = controllers;