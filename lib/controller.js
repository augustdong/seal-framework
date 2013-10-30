var exports = {};

var controller = function(func) {
	return function(req, res, next) {
		func(req, res, next);
	}
};

module.exports = controller;