const request = require('request');

const utils = require('../utils');

const hockeyServices = {
  teamPlayoffStats: async function(req, res, next) {
    const request_body = await utils.requestObject('/v2.0/pull/nhl/2019-playoff/team_stats_totals.json');

    request(request_body,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
          response = JSON.parse(body);
          res.send(response);
      } else {
          console.log(response.statusCode + response.body);
          res.send({});
      }
    })
  },
  teamSeasonStats: async function(req, res, next) {
    const request_body = await utils.requestObject('/v2.0/pull/nhl/2018-2019-regular/team_stats_totals.json');

    request(request_body,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
          response = JSON.parse(body);
          res.send(response);
      } else {
          console.log(response.statusCode + response.body);
          res.send({});
      }
    })
  }
}

module.exports = hockeyServices;