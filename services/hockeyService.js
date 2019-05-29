const request = require('request');
const config = require('config');

const apiKey = config.get('SPORTSFEED_API_KEY');
const apiPassword = config.get('SPORTSFEED_PASSWORD');
const urlBase = config.get('SPORTSFEED_BASE_URL');
const auth = "Basic " + new Buffer(apiKey + ":" + apiPassword).toString("base64");

const hockeyServices = {
  teamStats: function(req, res, next) {
    const request_body = {
      url: urlBase + '/v2.0/pull/nhl/2019-playoff/team_stats_totals.json',
      method: 'GET',
      headers : {
        "Authorization" : auth
      }
    }
    request(reqst,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
          response = JSON.parse(body);
          res.send(response);
      } else {
          console.log(response.statusCode + response.body);
          res.send({});
      }
    }).auth(apiKey, apiPassword, false);
  }
}

module.exports = hockeyServices;