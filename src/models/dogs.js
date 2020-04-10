const mongoose = require('mongoose');

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  picture: String,
  age: Number,
  country: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Dog', DogSchema);
