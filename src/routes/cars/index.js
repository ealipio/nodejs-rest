const cars = require('express').Router();
const all = require('./all');
const single = require('./single');

cars.param('carId', (req, res, next, value) => {
  const car = data.cars.find((c) => c.id === value * 1);

  if (car) {
    req['car'] = car;
    next();
  } else {
    res.status(404).send('Invalid car ID');
  }
});

cars.get('/', all);
cars.get('/:carId', single);

module.exports = cars;
