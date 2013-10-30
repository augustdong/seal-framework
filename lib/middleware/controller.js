var path = require('path');

var basePath = null;

var controller = function(req, res, next) {
	var filepath = basePath + req.path + '/index.js';
	try{
		var ret = require(filepath)(req, res, next);
	} catch(ex) {
		next();
	}
};

var initController = function(path) {
	basePath = path;
	return controller;
};

module.exports = initController;