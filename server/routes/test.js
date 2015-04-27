(function() {
  'use strict';

  var express = require('express');
  var router = module.exports = express.Router();
  var validator = require('validator');
  var err = require('./errors');
  // var log = require('./log')(module);
  var Test = require('../models/test.js');

  // router.use(function(req, res, next) {
  //   // var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  //   // console.log('Client IP:', ip);
  //   res.set('Content-Type', 'application/json');
  //   next(); // make sure we go to the next routes and don't stop here
  // });

  router.route('/tests')
    .get(function(req, res) {
      Test.find(function(error, docs) {
        err.errorsGet(res, error, docs);

      });
    })
    .post(function(req, res) {
      var model = new Test();
      model.nome = req.body.nome;

      model.save(function(error) {

        err.errosPOST(res, error, model, "Test salvo com sucesso");
      });

    });

  router.route('/tests/:id')
    .get(function(req, res) {

      var id = validator.trim(req.params.id);

      Test.findById(id, function(error, doc) {

        err.errorsGetById(res, error, doc);

      });
    })
    .put(function(req, res) {

      var id = validator.trim(req.params.id);

      Test.findById(id, function(error, doc) {

        if (!error) {

          var nome = validator.trim(validator.escape(req.body.nome));
          doc.nome = nome;

          doc.save(function(error) {
            err.errosPOST(res, error, doc, "Test atualizado com sucesso");
          });

        } else {
          err.errorsGetById(res, error, doc);
        }

      });
    })
    .delete(function(req, res) {

      var id = validator.trim(req.params.id);

      Test.findById(id, function(error, doc) {

        if (doc !== null) {
          doc.remove(function(error) {
            err.errorsDELETE(res, error, doc, 'Teste removido');
          });
        } else {
          err.errorsDELETE(res, error, doc, '');
        }
      });
    });

}());
