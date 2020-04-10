module.exports = function (app, mongoose) {
  const connect = function () {
    // var options = {
    //   server: {
    //     socketOptions: { keepAlive: 1 }
    //   },
    //   auto_reconnect:true
    // }
    mongoose.connect(
      app.config.MONGO_LAB_URI,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      },
      (err) => {
        if (err) {
          console.log('Unable to connect to MongoDB server', err);
        } else {
          console.log('Connected to MongoDB server');
        }
      }
    );
  };
  connect();

  // Error handler
  // mongoose.connection.on('error', function (err) {
  //   console.error('✗ MongoDB Connection Error. Please make sure MongoDB is running. -> ' + err)
  // })

  // Reconnect when closed
  // mongoose.connection.on('disconnected', function () {
  //   connect()
  // })
};
