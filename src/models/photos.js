const mongoose = require('mongoose');

const photosSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
});

module.exports = mongoose.model('Photos', photosSchema);
