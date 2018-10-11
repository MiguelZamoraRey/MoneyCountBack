var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var operationSchema = new Schema({
  name:  String,
  desc: String,
  active: Boolean,
  date: { type: Date, default: Date.now },
  type: String
  total: Number
});