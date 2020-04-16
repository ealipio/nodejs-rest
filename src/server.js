require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

//const Dogs = require('./models/dogs');
//const Users = require('./models/users');
const routes = require('./routes');

const app = express();
app.config = process.env;

// Database
require('./config/database')(app, mongoose);

//Use Api routes in the App
//http://localhost:8080/api
app.use('/api', routes);
app.use(morgan('dev'))
// from express 4.16+ body-parser is built in
// app.use(express.json());
// app.use(express.urlencoded());

// const getRandom = () => parseInt(Math.random()*100);



// app.get('/', function (req, res) {
  
//   const newDog = new Dogs({
//     name: `Marianne${getRandom()}`,
//     picture: '',
//     age: 11,
//     country: 'Colombia',
//   });
//   newDog
//     .save()
//     .then((dog) => res.status(200).send('new dog saved'))
//     .catch((e) => res.send(e));
// });

// app.get('/list-dogs', function (req, res) {
//   Dogs.find({}).then(d => res.status(200).json(d))
//   //User.find({}).then(d => res.json(d))
// });

// app.get('/users', function (req, res) {
//   Users.find({}).then(d => res.json(d))
// });


app.listen(process.env.PORT, function () {
  console.log(`listening on port ${process.env.PORT}!`);
});

// https://github.com/hengkiardo/express4-bootstrap-starter
//https://github.com/rafaelgou/mongoose-restfull-crud