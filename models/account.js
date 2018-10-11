var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accountSchema = new Schema({
  name:  String,
  desc: String,
  active: Boolean,
  operations: [],
  total: Number
});