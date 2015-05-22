(function() {
  'use strict';

  /*global id */

  var app = require('../../app');
  var chai = require('chai');
  var should = chai.should();
  var expect = chai.expect;
  var request = require('supertest');
  var mongoose = require('mongoose');
  // var mocha = require('mocha');
  // api = supertest('http://localhost:8080/api');

  describe('Test Login Restfull', function() {

    var id;

    function addObject(objectJSON) {
      request(app)
        .post('/api/logins')
        .set('Accept', 'application/json')
        .send(objectJSON)
        .end(function(err, res) {
          if (err) return done(err);
          id = res.body._id;
        });
    }

    before(function(done) {

      function clearDB() {
        for (var i in mongoose.connection.collections) {
          mongoose.connection.collections[i].remove(function() {});
        }
        return done();
      }

      clearDB();

      addObject({
        "name": "Agóra vâi sèr",
        "password": "get123",
        "age": 32
      });

      addObject({
        "name": "Test Get",
        "password": "get123",
        "age": 32
      });
      addObject({
        "name": "Test Put",
        "password": "put123",
        "age": 30
      });
      done();

    });

    it('shold return a 200 response', function(done) {

      request(app)
        .get('/api/logins/')
        .set('Accept', 'application/json')
        .expect(200);
      done();
    });
    it('shold return a Login', function(done) {
      var url = '/api/logins/' + id;

      request(app)
        .get(url)
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          // expect(res.body).to.have.property('name');

          expect(res.body.name).to.equal('Test Get');
          expect(res.body.password).to.equal('123');
          expect(res.body.idade).to.equal('get123');
        });
      done();

    });

  });

  // afterEach(function(done) {
  //   mongoose.disconnect();
  //   return done();
  // });
}());

// if (mongoose.connection.readyState === 0) {
//   mongoose.connect(config.db.test, function(err) {
//     if (err) {
//       throw err;
//     }
//     return clearDB();
//   });
// } else {
//   return clearDB();
// }
