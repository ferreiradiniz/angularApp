(function() {
  'use strict';

  // var mongoConfig = require('./mongoConfig');
  var mongoose = require('mongoose');
  var models_path = __dirname + '/server/models/';

  var production = 'mongodb://localhost/nsa-prod',
    development = 'mongodb://localhost/nsa-dev',
    test = 'mongodb://localhost/nsa-test';

  var db = mongoose.connect(test);

  var dbName = mongoose.connection.db.databaseName;

  if (dbName === 'nsa-test') {
    process.env.NODE_ENV = 'test';

  }

  var con = mongoose.connection;

  // console.log(con.db.databaseName);

  // con.on('error', console.error.bind(console, 'DataBase connection error:'));

  // // If the Node process ends, close the Mongoose connection
  // process.on('SIGINT', function() {
  //   mongoose.connection.close(function() {
  //     console.log('Mongoose default connection disconnected through app termination');
  //     process.exit(0);
  //   });
  // });

  con.once('connected', function() {
    console.log('connected to mongodb successfuly!');
  });

}());
