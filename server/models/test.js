(function() {
  'use strict';

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var TestSchema = new Schema({
    nome: {
      type: String,
      trim: true,
      required: true
    },
    created_at: {
      type: Date,
      default: Date.now
    }
  });

  module.exports = mongoose.model('Test', TestSchema);

}());
