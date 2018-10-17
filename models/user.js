var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name:  String,
	email: String,
	pass:   String,
	accounts: [{ type: Schema.Types.ObjectId, ref: 'account' }]
});

module.exports = mongoose.model('user', userSchema);