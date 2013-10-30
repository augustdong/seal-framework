var createClass = function(o) {
	var superClass = o.extend || null;

	var specialKey = {
		'init': true,
		'extend': true
	};

	var object = function(o) {
		function F() {}
		F.prototype = o;
		return new F();
	};

	var inheritPrototype = function(subClass, superClass) {
		var prototype = object(superClass.prototype);
		prototype.constructor = subClass;
		subClass.prototype = prototype;
	};

	var SealClass = function() {
		superClass && superClass.apply(this, arguments);
		o.init && o.init.apply(this, arguments);
	};

	superClass && inheritPrototype(SealClass, superClass);
		
	for (var key in o) {
		if (!(key in specialKey)) {
			SealClass.prototype[key] = o[key];
		};
	};
		
	return SealClass;
};

module.exports = {
	createClass: createClass
}