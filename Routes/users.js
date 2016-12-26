'use strict';

//npm installed modules
var Joi = require('joi'),

//user defined modules
Controllers = require('../Controllers');

module.exports = [
	{
        method: 'GET', 
        path: '/v1/User/restricted', 
        config: { 
        	auth: 'jwt',
			description: 'Get todo',
	        notes: 'Returns a todo item by the id passed in the path',
	        tags: ['api','test'],
	        validate:{
	        	query:{
	        		token: Joi.string()
	        	}
			}
        },
        handler: function(request, reply) {
          reply({text: 'You used a Token!'})
          .header("Authorization", request.headers.authorization);
        }
     },{
		method:'POST',
		path:'/v1/User/getUser',
		config: {
			auth:'jwt',
			description: 'Get todo',
	        notes: 'Returns a todo item by the id passed in the path',
	        tags: ['api','test'],
	        validate:{
	        	payload:{
	        		id : Joi.number().required().description('the id for the todo item')
	        	}
			}
		},
		handler:function(request,reply) {
			console.log(request,reply);
			reply('You used a token').header("Authorization", request.headers.authorization);
		}
	}
];