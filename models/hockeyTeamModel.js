const mongoose = require('mongoose');

const { Schema } = mongoose;

const hockeyTeamModel = new Schema({
  name: { type: String },
  teamID: { type: String }
});

module.exports = mongoose.model('hockeyTeam', hockeyTeamModel);