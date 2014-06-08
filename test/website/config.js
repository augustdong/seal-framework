var config = {
	version: '0.0.1',
	server: {
		//necessary
		host: '127.0.0.1',
		//necessary
		port: '8080'
	},
	path: {
		//necessary
		website: __dirname
	},
	db: {
		connection: 'mongodb://localhost/mowangedu'
	}
};

module.exports = config;