function factorial(number) {
    var factorial = 1;
    for (var i = number; i >= 1; i--) {
        factorial *= i;
    }
    return factorial
}
