var controller = require('seal-framework').controller;
var website = require('seal-framework').website;

var db = website.getDB();
//db.getMoogose()

module.exports = controller(function(req, res, next) {
	res.json({
		msg: 'Hello'
	});
});