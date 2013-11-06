var cons = require('consolidate');
var viewBasePath = null;
var tmplBaseName = null;

var middleware = function(path, name) {
	viewBasePath = path;
	tmplBaseName = name;
	return function(req, res, next) {
		res.renderView = function() {
			var viewPath = '',
				data = null,
				tmplName = tmplBaseName;
			//不带path，默认使用tmplBaseName模版
			if (arguments.length == 1) {
				viewPath = viewBasePath + req.path;
				data = arguments[0];
				viewPath += ('.' + tmplName);
			}
			//带path，以后缀名为主
			else if (arguments.length == 2) {
				viewPath = viewBasePath + '/' + arguments[0];
				data = arguments[1];
				tmplName = viewPath.slice(viewPath.lastIndexOf('.') + 1);
			};
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