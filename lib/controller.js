var controllerBasePath = null;

var controller = function(func) {
	return function(req, res, next) {
		func(req, res, next);
	}
};

var middleware = function(path) {
	controllerBasePath = path;
	return function(req, res, next) {
		var controllerPath = controllerBasePath + req.path + '/index.js';
		try{
			var ret = require(controllerPath)(req, res, next);
		} catch(ex) {
			next();
		}
	};
};

var exports = controller;

exports.middleware = middleware;

module.exports = exports;