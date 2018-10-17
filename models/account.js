var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accountSchema = new Schema({
  name: String,
  desc: String,
  active: Boolean,
  operations: [{ type: Schema.Types.ObjectId, ref: 'operation' }],
  total: Number
});

module.exports = mongoose.model('account', accountSchema);