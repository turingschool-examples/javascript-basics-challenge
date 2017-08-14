class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    get area() {
        return this.length * this.width;
    }

    get perimeter() {
        return (this.length * 2) + (this.width * 2);
    }

    get diagonal() {
        return Math.sqrt((this.length ** 2) + (this.width ** 2));
    }

    get isSquare() {
        return this.length === this.width;
    }
}

module.exports = Rectangle