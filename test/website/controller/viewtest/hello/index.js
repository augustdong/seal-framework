var controller = require('seal-framework').controller;

module.exports = controller(function(req, res, next) {
	var name = req.query.name || '无名氏';
	var tmplName = req.query.tmplname;
	//测试url为/viewtest/hello?name=august&tmplname=haml
	if (tmplName == 'haml') {
		res.renderView('viewtest/hello.haml', {
			name: name
		});
		return;
	}
	//测试url为/viewtest/hello?name=august
	//如果renderView不指定view的路径，则根据url的path自动寻找view
	//模版采用config的配置，默认为underscore。
	//即：url路径为/viewtest/hello，view路径为\website\view\viewtest\hello.[tmplNmae]
	else if (tmplName == null) {
		res.renderView({
			name: name
		});
	} else {
		next();
	}
});