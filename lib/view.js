var cons = require('consolidate');
var viewBasePath = null;
var tmplName = null;

var middleware = function(path, name) {
	viewBasePath = path;
	tmplName = name;
	return function(req, res, next) {
		res.renderView = function() {
			var viewPath = '',
				data = null;
			if (arguments.length == 1) {
				viewPath = viewBasePath + req.path;
				data = arguments[0];
			} else if (arguments.length == 2) {
				viewPath = viewBasePath + '\\' + arguments[0];
				data = arguments[1];
			};
			viewPath += '.tmpl';
			cons[tmplName](viewPath, data, function(err, html) {
				if (err) {
					res.send(500, '500，服务器内部发生错误！');
					return;
				};
				res.send(html);			
				return;
			});
		};
		next();
	};
};

module.exports.middleware = middleware;