function factorial(number) {
	if (number == 0 || number == 1) {
		return 1;
	} else {
	var factorialTotal = 1;
    for (var i = 2; i <= number; i++)
        factorialTotal = factorialTotal * i;
    return factorialTotal;
	}
};

module.exports = factorial