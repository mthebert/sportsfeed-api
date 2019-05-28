const request = require('request');
const config = require('config');

const apiKey = config.get('SPORTSFEED_API_KEY');

const hockeyServices = {
  get: function(req, res, next) {
    return true;
  }
}

module.exports = hockeyServices;