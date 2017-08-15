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
	mappingKeys = Object.keys(mapping);
	var greatestValue = 0;
	var greatestKey = 0;
	for(var j = 0; j < mappingKeys.length; j++) {
		if(mapping[mappingKeys[j]] > greatestValue) {
			greatestValue = mapping[mappingKeys[j]];
			greatestKey = mappingKeys[j];
		}
	}
	var greatestHash = {};
	greatestHash[greatestKey] = greatestValue
	return greatestHash;
}

module.exports = {total, mean, median, mode}
