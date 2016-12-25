'use strict';

//npm installed modules
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

//user defined module

module.exports = {
	
	//authenticate function
	webTokenAuth : function() {
		
		console.log('Utilities: webTokenAuth function called')
	
	},

	//function to generate password hash before saving in the database or comparing it with passed values while comparing
	hashPassword: function(password,callback) {

		console.log('Utilities: hashPassword function called')

		bcrypt.genSalt(process.env.salt_rounds,function(err,hash) {
			callback(err,hash);
		});
	},

	//function to generate the json web tokens using the user login details and login_key which is login user_id key
	createToken: function(user,login_key) {
		
		console.log('Utilities: createToken function called');
		
		var scopes = (user.is_admin) ? 'admin':'users';		// Check if the user object passed in has admin set to true, and if so, set scopes to admin
		
		var usernames = user.user_details.login[login_key];	//the login id details of the user
		
		return jwt.sign({id: user._id, username: usernames, scope : scopes},process.env.app_constants.authkey,{ algorithm: 'HS256', expiresIn: "4h" });
	
	}
};