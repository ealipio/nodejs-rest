const data = require('../../data.json');

module.exports = (req, res) => {
  const cars = data.cars;
  console.log(cars)

  res.status(200).json({ cars });
};
