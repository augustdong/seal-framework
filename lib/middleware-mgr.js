/**
 * 中间件管理器
 * @author augustdong
 */
var express = require('express');
var sealjs = require('./sealjs');
var controller = require('./controller');
var view = require('./view');

var MiddlewareMgr = sealjs.util.createClass({
	init: function(website) {
		this._website = website;
		this._initDefault();
	},
	_initDefault: function() {
		var config = this._website.getConfig();
		//模版
		config.view = config.view || 'underscore';	//默认模版引擎使用underscore
		config.path.view = config.path.view || config.path.website + '\\view';
		this.addMiddleware(view.middleware(config.path.view, config.view));
		//控制器
		config.path.controller = config.path.controller || config.path.website + '\\controller';
		this.addMiddleware(controller.middleware(config.path.controller));
		//静态文件
		config.path.htdocs = config.path.htdocs || config.path.website + '\\htdocs';
		this.addMiddleware(express.static(config.path.htdocs));
	},
	addMiddleware: function(middleware) {
		var server = this._website.getServer();
		server.use(middleware);
	}
});

module.exports = MiddlewareMgr;