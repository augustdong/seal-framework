var controller = require('seal-framework').controller;

module.exports = controller(function(req, res, next) {
	var name = req.query.name || '无名氏';
	res.json({
		msg: 'Hello ' + name + '!'
	});
});