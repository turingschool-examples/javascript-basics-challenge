function diagonal(shape) {
	let aSquared = Math.pow(shape['width'], 2);
	let bSquared = Math.pow(shape['height'], 2);
	let cSquared = aSquared + bSquared;
	let c = Math.sqrt(cSquared);
	return c.toFixed(4);
};

module.exports = diagonal