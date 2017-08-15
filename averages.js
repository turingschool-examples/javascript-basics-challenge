var _ = require("lodash");
var pry = require('pryjs');

function total(array) {
	total = 0;
	for(let i = 0; i < array.length; i++) {
		total += array[i]
	}
	return total;
};

function mean(array) {
	total = 0;
	for(let i = 0; i < array.length; i++) {
		total += array[i]
	}
	return total/array.length;
};

function median(array) {
	sortedArray = array.sort( function(a,b) {return a - b;} );
	 var half = Math.floor(array.length/2);
	 if(array.length % 2 == 0) {
	 	return sortedArray[half]
	 } else {
	 	return (sortedArray[half-1] + sortedArray[half]) / 2;
	 }
}

function mode(array) {
	mapping = {};
	counter = 0
	for(let i = 0; i < array.length; i++) {
	    if (mapping[array[i]] == undefined) mapping[array[i]] = 0;
	    mapping[array[i]] += 1
	}
	let greatest = _.max(_.keys(mapping), function(o){return object[o]; });
	return greatest;
}

module.exports = {total, mean, median, mode}
