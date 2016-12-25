'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.set('debug',true);

var userSchema = new Schema({
	user_details:{
		name:{
			firstName: {type: String},
			secondName: {type: String}
		},
		date_of_birth: {type: Date},
		login:{
			facebook_id:{type: String},
			google_id: {type: String},
			email: {type: String}	
		},
		password:{ type: String},
		mobile:{type: Number},
		device_tokens:{
			ios: {type: String},
			android: {type: String}
		}
	},
	token: { type: String},
	created_on : { type: Date, default: new Date()},
	edited_on: { type: Date, default: new Date()}
});

var users = mongoose.model('users',userSchema);

module.exports = {
	Users: users
};