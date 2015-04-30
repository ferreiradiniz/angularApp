(function() {
  'use strict';

  exports.errorsGet = function(res, err, object) {
    if (!err) {
      res.statusCode = 200;
      return res.json(object);
    } else {
      console.error('Internal error(%d): %s', res.statusCode, err.message);
      res.status(500).send('Server error');
      // res.statusCode = 500;
      // console.error('Internal error(%d): %s', res.statusCode, err.message);
      // return res.send({
      //   error: 'Server error'
      // });
    }
  };

  exports.errosPOST = function(res, err, object, message) {
    if (!err) {
      console.info(message);
      res.status(201).send(object);
      // res.statusCode = 201;
      // return res.json(object);
    } else {
      console.log(err);
      if (err.name == 'ValidationError') {
        res.status(400).send('Validation error');

        // res.statusCode = 400;
        // res.send({
        //   error: 'Validation error'
        // });
      } else {
        res.status(500).send('Server error');
        // res.statusCode = 500;
        // res.send({
        //   error: 'Server error'
        // });
      }
      console.error('Internal error(%d): %s', res.statusCode, err.message);
    }
  };

  exports.errorsGetById = function(res, err, object) {
    if (!object) {
      // res.status(404).send('Not found');
      res.statusCode = 404;
      return res.send({
        error: 'Not found'
      });
    }
    if (!err) {
      res.statusCode = 200;
      return res.json(object);
    } else {
      res.statusCode = 500;
      console.error('Internal error(%d): %s', res.statusCode, err.message);
      return res.send({
        error: 'Server error'
      });
    }
  };

  exports.errorsDELETE = function(res, err, object, message) {
    if (!object) {
      // res.status(404).send('Not found');
      res.statusCode = 404;
      return res.send({
        error: 'Not found'
      });
    }
    if (!err) {
      res.status(200).send(message);

    } else {
      res.statusCode = 500;
      return res.send({
        error: 'Server error'
      });
    }
  };

  exports.errosPUT = function(res, err, object, message) {
    if (!err) {
      console.info(message);
      res.status(200).send(object);
      // res.statusCode = 201;
      // return res.json(object);
    } else {
      console.log(err);
      if (err.name == 'ValidationError') {
        res.status(400).send('Validation error');

        // res.statusCode = 400;
        // res.send({
        //   error: 'Validation error'
        // });
      } else {
        res.status(500).send('Server error');
        // res.statusCode = 500;
        // res.send({
        //   error: 'Server error'
        // });
      }
      console.error('Internal error(%d): %s', res.statusCode, err.message);
    }
  };

}());
