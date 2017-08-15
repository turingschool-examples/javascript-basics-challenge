var pry = require('pryjs');

function isTriangle(side1, side2, side3) {
	let sides = [side1, side2, side3]
	if(sides.every(checkAboveZero)) {
		return checkPythagorean(sides);
	} else {
		return false;
	}
};

function checkAboveZero(side) {
	return side > 0;
}

function checkPythagorean(sides) {
	if (sides.every( (val, i, arr) => val == arr[0] )) {
		return true
	} else {
	let bigSide = Math.max.apply(Math, sides);
	sides.pop(bigSide);
	let leftSide = Math.pow(sides[0], 2) + Math.pow(sides[1], 2);
	return  leftSide == Math.pow(bigSide, 2);
	}
}

module.exports = isTriangle