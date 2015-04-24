(function() {
  'use strict';

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var TestSchema = new Schema({
    nome: {
      type: String,
      trim: true
    }
  });

  module.exports = mongoose.model('Test', TestSchema);

}());
