# Sportsfeed-api

 - back end API services using rest for react/redux front located at sportsfeed-react
 using express, node, mongo, mongoose orm, docker, swagger, eslint, tests

Data source using [https://www.mysportsfeeds.com] - need an API key

Config app details like your API key, port and host in config/default.js

Swagger Docs - some simple swagger documenation

tests are using mocha, sinon, and supertest (integration tests)

Initial setup for mongo in src

Uses docker to provide deployable container - uses local mongo but can use atlas

Uses Redis to cache the gets (gotta add this to docker - right now just using local)

- Create config/default.json using sample_default.json to set config vars