(function() {
  'use strict';

  var mongoConfig = require('./mongoConfig');
  var mongoose = require('mongoose');
  var models_path = __dirname + '/server/models/';

  // module.exports = {
  //   db: {
  //     production: 'mongodb://localhost/nsa-prod',
  //     development: 'mongodb://localhost/nsa-dev',
  //     test: 'mongodb://localhost/nsa-test'
  //   }
  // };

  var production = 'mongodb://localhost/nsa-prod',
    development = 'mongodb://localhost/nsa-dev',
    test = 'mongodb://localhost/nsa-test';

  mongoose.connect(test);

  var con = mongoose.connection;

  // console.log(con.db.databaseName);

  con.on('error', console.error.bind(console, 'DataBase connection error:'));

  con.once('open', function() {
    console.log('connected to mongodb successfuly!');

    // app.listen(port, function() {

    //   console.log('Servidor iniciado na porta: ' + port);
    // });
  });

}());
