var sealFramework = require('seal-framework');
var controller = sealFramework.controller;

module.exports = controller(function(req, res, next) {
	var ret = {
		name: 'August'
	}
	res.json(ret);
});