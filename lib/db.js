var sealjs = require('./sealjs');
var mongoose = require('mongoose');

var DB = sealjs.util.createClass({
	init: function(config) {
		this._uri = config.db.connection;
		this._poolSize = config.db.poolSize || 5;
		this._opt = {
			server: {
				poolSize: this._poolSize
			}
		};
		this._db = mongoose.connection;
		this._db.on('error', function() {
			console.log('error on db');
		});
		this._db.on('open', function() {
			console.log('ok db');
		});
		this.connect();
	},
	connect: function() {
		mongoose.connect(this._uri, opt);
	},
	getMogoose: function() {
		return mongoose;
	}
});

module.exports = DB;