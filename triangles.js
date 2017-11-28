function isTriangle(a, b, c) {
    let array = [a, b, c];
    let order = array.sort();
    let hypot = Math.pow(order[2], 2);
    let leg1 = Math.pow(order[1], 2);
    let leg2 = Math.pow(order[0], 2);
    return(hypot === (leg1 + leg2));
}
console.log(isTriangle(115,252,277));