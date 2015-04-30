(function() {
  'use strict';

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var LoginSchema = new Schema({
    name: {
      type: String,
      trim: true,
      required: true
    },
    password: {
      type: String,
      trim: true,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    created_at: {
      type: Date,
      default: Date.now
    }
  });

  module.exports = {
    model: mongoose.model('Login', LoginSchema)
  };

}());
