const photosModel = require('../../models/photos');
const photos = require('express').Router();

photos.get('/', (req, res) => {
  photosModel
    .find()
    .limit(10)
    .exec()
    .then((photosData) => res.status(200).json(photosData))
    .catch((err) => console.log(err));
});

module.exports = photos;
