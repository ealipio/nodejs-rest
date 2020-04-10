require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const Dogs = require('./models/dogs');
const Users = require('./models/users');

const app = express();
app.config = process.env;

// Database
require('./config/database')(app, mongoose);

// from express 4.16+ body-parser is built in
// app.use(express.json());
// app.use(express.urlencoded());

// Import routes
//let apiRoutes = require("./routes")

app.get('/', function (req, res) {
  //User.find({}).then(d => res.json(d))

  const newDog = new Dogs({
    name: 'John',
    picture: '',
    age: 11,
    country: 'Colombia',
  });
  newDog
    .save()
    .then((dog) => res.send('new dog saved'))
    .catch((e) => res.send(e));
});

app.get('/users', function (req, res) {
  Users.find({}).then(d => res.json(d))
});
// Use Api routes in the App
//app.use('/api', apiRoutes);

app.listen(process.env.PORT, function () {
  console.log(`listening on port ${process.env.PORT}!`);
});

// https://github.com/hengkiardo/express4-bootstrap-starter