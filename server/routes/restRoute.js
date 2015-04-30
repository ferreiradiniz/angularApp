(function() {
  'use strict';

  var express = require('express'); //
  var validator = require('validator');
  // var Login = require('../models/loginModel').model;
  // var loginController = require('../controllers/restController')(Login);

  var routes = function(MyObject) {

    MyObject = require('../models/' + MyObject.toLowerCase() + 'Model').model;
    var controller = require('../controllers/restController')(MyObject);

    var router = express.Router();

    router.route('/')
      .post(controller.post)
      .get(controller.get);

    router.use('/:id', function(req, res, next) {

      var id = validator.trim(req.params.id);

      MyObject.findById(id, function(err, doc) {

        if (err) {
          res.status(500).send(err);
        } else if (doc) {
          req.doc = doc;
          next();
        } else {
          res.status(404).send('No found');
        }

      });
    });
    router.route('/:id')
      .get(function(req, res) {
        res.json(req.doc);
      })
      .put(controller.put)
      .patch(controller.patch)
      .delete(controller.delete);

    return router;
  };

  module.exports = routes;

}());
