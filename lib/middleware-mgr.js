var express = require('express');
var sealjs = require('sealjs');

var middlewareController = require('./middleware/controller');

var MiddlewareMgr = sealjs.util.createClass({
	init: function(sealFramework) {
		this._sealFramework = sealFramework;
		this._initDefault();
	},
	_initDefault: function() {
		var config = this._sealFramework.getConfig();
		//控制器
		config.path.controller = config.path.controller || config.path.website + '\\controller';
		this.addMiddleware(middlewareController(config.path.controller));
		//静态文件
		config.path.htdocs = config.path.htdocs || config.path.website + '\\htdocs';
		this.addMiddleware(express.static(config.path.htdocs));
	},
	addMiddleware: function(middleware) {
		var server = this._sealFramework.getServer();
		server.use(middleware);
	}
});

var createInstance = function(sealFramework) {
	var instance = new MiddlewareMgr(sealFramework);
	return instance;
}

module.exports = createInstance;