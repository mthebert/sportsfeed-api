const config = require('config');

const apiKey = config.get('SPORTSFEED_API_KEY');
const apiPassword = config.get('SPORTSFEED_PASSWORD');
const urlBase = config.get('SPORTSFEED_BASE_URL');
const auth = "Basic " + new Buffer(apiKey + ":" + apiPassword).toString("base64");

const utils = {
  requestObject: function(path){
    const request_body = {
      url: urlBase + path,
      method: 'GET',
      headers : {
        "Authorization" : auth
      }
    }
    return request_body
  },
}

module.exports = utils;