### RESTful API with:
* NodeJS
* Express
* MongoDB
* Mongoose

We are using mongoDB in mlab, to run this application follow the next steps:

* Create an account in mlab (https://mlab.com/)
* Set up your first database, create user and password for that database
* rename .env.example to .env and fill it with your information
* install dependencies (`npm install`)
* run `server.js` with `npm start`


atm the application is deployed in heroku, you can tested here:
https://nodejs-restful-api-2020.herokuapp.com/users

> useful commands to heroku:
```javascript
// show logs in real time
$ heroku logs  -a nodejs-restful-api-2020 --tail
// show env variables
$ heroku config -a nodejs-restful-api-2020
// show apps
$ heroku list
// set to  maintenance on
$ heroku maintenance:on -a passport-login-eisson
```

> API was deployed to heroku:
* https://nodejs-restful-api-2020.herokuapp.com/api/photos
* https://nodejs-restful-api-2020.herokuapp.com/api/users

> Useful links"
* https://www.codementor.io/@theoutlander/introduction-to-mongoose-for-mongodb-gw9xw34el
* https://medium.com/@lavitr01051977/node-express-js-aea19636a500
* https://medium.com/@paigen11/sequelize-the-orm-for-sql-databases-with-nodejs-daa7c6d5aca3
* https://scotch.io/@deityhub/getting-started-with-the-mern-stack
* https://zeit.co/guides/deploying-a-mongodb-powered-api-with-node-and-now

that's it :)