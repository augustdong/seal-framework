var sealFramework = require('seal-framework');
var controller = sealFramework.controller;

module.exports = controller(function(req, res, next) {
	console.log('throgh the controller');
	var ret = {
		name: 'August'
	}
	res.json(ret);
	//next();
});