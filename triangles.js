function isTriangle(x,y,z) {
    if (x <= 0 || y <=0 || z <= 0 )
        return false;
    else if ( x === y && y === z )
        return true;
    else {
        return Math.pow(x, 2) + Math.pow(y, 2) === Math.pow(z, 2) || Math.pow(z, 2) + Math.pow(y, 2) === Math.pow(x, 2)
            || Math.pow(x, 2) + Math.pow(z, 2) === Math.pow(y, 2);
    }

}

module.exports = isTriangle;