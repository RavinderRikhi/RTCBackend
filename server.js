

'use strict';
//npm installed modules
const Hapi = require('hapi');
const mongoose = require('mongoose');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

//user defined modules
const routes = require('./Routes');
const env = require('./env.js');
const Configs = require('./Configs');
const app_constants = (env.instance == "dev") ? Configs.app_constants.dev : Configs.app_constants.test;
const db_constants = (env.instance == "dev") ? Configs.db_constants.dev : Configs.db_constants.test;

const server = new Hapi.Server();

server.connection({
	host: app_constants.host,
    port: app_constants.port
});

server.route([
	{
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply({'server': 'HapiJS test server', 'purpose': 'Documentation','Component':'Hapijs Swagger UI'});
        }
    }
]);

const options = {
    info: {
            'title': 'Ravi Test API Documentation',
            'version': '1.0.0'
        },
    pathPrefixSize: 2
    };


server.register([
	Inert,
	Vision,{
		'register': HapiSwagger,
		'options': options	
	}
	],function(err) {

});

console.log('++++++++++++++++++++++++++++++App Settings++++++++++++++++++++++++++++++');
console.log(app_constants);
console.log('++++++++++++++++++++++++++++++DB Settings++++++++++++++++++++++++++++++');
console.log(db_constants);

server.start(function(err) {
	if(err){
		console.log('Error while starting server ',err);
		process.exit(1);
	}
	else{
		console.log('Server Started at:', server.info.uri);
	}
});

server.route(routes);


mongoose.connect('mongodb://'+db_constants.mongoHost+':'+db_constants.port+'/'+db_constants.database,[],function(err) {
			if(err)
				console.log('Error while connecting to mongodb');
			else
				console.log('MongoDB connected Successfully on localhost:27017');
});