const single = require('./single');
const all = require('./all');
const cars = require('./cars');

const models = require('express').Router();

models.use('/:modelId/cars', cars);

models.param('modelId', (req, res, next, value) => {
  const model = data.models.find((m) => m.id === value * 1);

  if (model) {
    req['model'] = model;
    next();
  } else {
    res.status(404).send('Invalid model ID');
  }
});

models.get('/', all);
models.get('/:modelId', single);

module.exports = models;
