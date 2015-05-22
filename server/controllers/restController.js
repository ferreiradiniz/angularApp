(function() {
  'use strict';
  var validator = require('validator');
  var statusHandler = require('express-mongoose-status');

  var acents = require('../utils.js');

  var restController = function(MyObject) {

    var post = function(req, res) {
      var model = new MyObject(req.body);

      model.save();
      res.status(200).send(model);
    };

    var get = function(req, res) {
      var query = {};

      if (req.query._id) {
        delete req.query._id;
      }
      for (var p in req.query) {

        switch (isNaN(req.query[p])) {
          case true:
            var str = acents(req.query[p]);
            query[p] = new RegExp(str, 'i');
            break;
          case false:
            query[p] = req.query[p];
            break;
        }

      }
      // if (req.query.nome) {
      //   console.log(req.query);
      //   //Case insensintive
      //   query.nome = new RegExp(req.query.nome, 'i');
      // }
      MyObject.find(query, function(err, docs) {

        // statusHandler(err, res, docs);
        if (err) {
          res.status(500).send(err);
        } else {
          // res.status(200).send(docs);
          res.json(docs);
        }

      });
      query = {};
    };

    var put = function(req, res) {

      if (req.body._id) {
        delete req.body._id;
      }
      for (var p in req.body) {
        req.doc[p] = validator.trim(validator.escape(req.body[p]));
      }
      // req.doc.name = validator.trim(validator.escape(req.body.name));
      // req.doc.password = validator.trim(validator.escape(req.body.password));

      req.doc.save(function(err) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.json(req.doc);
        }
      });
    };

    var patch = function(req, res) {
      if (req.body._id) {
        delete req.body._id;
      }

      for (var p in req.body) {
        req.doc[p] = req.body[p];
      }
      req.doc.save(function(err) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.json(req.doc);
        }
      });

    };

    var apiDelete = function(req, res) {
      req.doc.remove(function(err) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(204).send('Removed');
        }
      });
    };

    return {
      post: post,
      get: get,
      put: put,
      patch: patch,
      delete: apiDelete
    };
  };

  module.exports = restController;
}());
