var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.set('debug',true);

var userSchema = new Schema({
	name:{
		firstName: {type: String},
		secondName: {type: String}
	},
	password:{ type: String},
	token: { type: String},
	date_of_birth: {type: Date},
	created_on : { type: Date, default: new Date()},
	edited_on: { type: Date, default: new Date()}
});

var users = mongoose.model('users',userSchema);

module.exports = {
	Users: users
};