'use strict';

const Path = require('path');

module.exports = {
	dev:{
		host: "127.0.0.1",
		port: "3000",
		absolutePath: Path.join(__dirname,'../'),
		authkey:'BasicTestAppMadeByRavi2901#359',	//jwat auth secret key
		salt_rounds: 10	//bcrypt salt rounds
	},
	test:{
		host: "http://192.168.1.6",
		port: "3000",
		absolutePath: Path.join(__dirname,'./'),
		authkey:'BasicTestAppMadeByRavi2901#359',	//jwat auth secret key
		salt_rounds: 10	//bcrypt salt rounds
	}
};