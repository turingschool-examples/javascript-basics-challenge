module.exports = {
    isTriangle: function isTriangle(num1, num2, num3) {
      var s = (num1 + num2 + num3) / 2
      var d = (s - num1) * (s - num2) * (s - num3)
      if (d > 0) {
        return true
      } else {
        return false
      }
    }
}

// Let the lengths of the three sides be a, b, and c.
// Let s = (a+b+c)/2 (semi-perimeter)
// Calculate d = (s-a) * (s-b) * (s-c).
// if d > 0, the sides form a triangle.
// if d == 0, the sides form a degenerate triangle (area 0)
// if d < 0, the sides do not form a triangle.
