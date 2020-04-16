const users = require('./users');
const photos = require('./photos');

const routes = require('express').Router();

routes.use('/users', users);
routes.use('/photos', photos);

module.exports = routes;
