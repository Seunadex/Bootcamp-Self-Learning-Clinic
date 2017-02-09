'use strict'
module.exports = {
findMinMax: function (arr) {
	var minimum = Math.min.apply(null, arr); 
	var maximum = Math.max.apply(null, arr);
	if (minimum === maximum) {
		return [minimum];
	}
	return [minimum, maximum];
}

};