var express = require('express');
var sealjs = require('./sealjs');
var MiddlewareMgr = require('./middleware-mgr');
var controller = require('./controller');
var DB = require('./db');

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
	},
	getDB: function() {
		if (!this._db) {
			this._db = new DB(this._config);
		};
		return this._db;
	}
});

var framework = function(config) {
	framework.website = new Website(config);
	return framework.website;
};

//静态方法
framework.controller = controller;

module.exports = framework;

