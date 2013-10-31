var controller = require('seal-framework').controller;

module.exports = controller(function(req, res, next) {
	var name = req.query.name || '无名氏';
	//如果renderView不指定view的路径，则根据url的path自动寻找view，即：
	//url路径为/viewtest/hello
	//view路径为\website\view\viewtest\hellp.tmpl
	res.renderView({
		name: name
	});
});