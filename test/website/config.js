var config = {
	version: '0.0.1',
	server: {
		//necessary
		host: 'localhost',
		//necessary
		port: '80'
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