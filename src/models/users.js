const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    minlength: 5,
  },
  password: {
    type: String,
    required: true,
  },
});


// const myUser = new User({ email: 'myUser@eisson.pe', password: 'I<3Cats!' });

// myUser
//   .save()
//   .then((myUser) => console.log('its all good'))
//   .catch((err) => console.log(err));

module.exports = mongoose.model('Users', usersSchema);