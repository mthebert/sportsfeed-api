require('should');

const request = require('supertest');
const mongoose = require('mongoose');

process.env.ENV = 'development';

const app = require('../server');

const HockeyTeam = mongoose.model('HockeyTeam');
const agent = request.agent(app);

describe('Hockey Test', () => {
  return true;
});