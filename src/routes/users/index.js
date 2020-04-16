const usersModel = require('../../models/users');
const users = require('express').Router();

users.get('/', (req, res) => {
  usersModel
    .find()
    .limit(4)
    .exec()
    .then((users) => res.status(200).json(users))
    .catch((err) => console.log(err));
});

module.exports = users;
