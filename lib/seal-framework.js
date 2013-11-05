var express = require('express');
var sealjs = require('./sealjs');
var MiddlewareMgr = require('./middleware-mgr');
var controller = require('./controller');

var Website = sealjs.util.createClass({
	init: function(config) {
		this._config = config;
		this._server = new express();
		this._middlewareMgr = new MiddlewareMgr(this);
	},
	start: function() {
		var serverConfig = this._config.server,
			port = serverConfig.port,
			host = serverConfig.host;
		this._server.listen(port);
		console.log('Please visit ' + host + ':' + port);
	},
	getVersion: function() {
		return this._config.version;
	},
	getServer: function() {
		return this._server;
	},
	getConfig: function() {
		return this._config;
	}
});

var createWebsite = function(config) {
	return new Website(config);
};

var exports = createWebsite;

//静态方法
exports.controller = controller;

module.exports = exports;

