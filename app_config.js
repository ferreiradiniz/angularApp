(function() {
  'use strict';

  var express = require('express');
  var path = require('path');
  var bodyParser = require('body-parser');
  var db = require('./mongoConfig');

  var app = express();
  var port = process.env.PORT || 8080;
  var allowCorns = function(req, res, next) {

    res.header('Access-Control-Allow-Origin', '127.0.0.1:8080');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credential', 'true');
    next();

  };

  //Routes BEGIN
  var testRoutes = require('./server/routes/test');
  //Routes END

  app.use(allowCorns);
  // for parsing application/json
  app.use(bodyParser.json());
  // for parsing application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(express.static(path.join(__dirname, '/client')));

  app.use('/api', testRoutes);

  // app.use(express.static(__dirname + '/client'));
  app.listen(port, function() {

    console.log('Servidor iniciado na porta: ' + port);
  });

}());
