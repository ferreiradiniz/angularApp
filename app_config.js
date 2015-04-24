(function() {
  'use strict';

  var express = require('express');
  var bodyParser = require('body-parser');
  var app = express();
  var router = module.exports = express.Router();
  var port = process.env.PORT || 8080;

  // for parsing application/json
  app.use(bodyParser.json());
  // for parsing application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use('/api', router);

  app.use(express.static(__dirname + '/client'));
  app.listen(port, function() {

    console.log('Servidor iniciado na porta: ' + port);
  });

}());
