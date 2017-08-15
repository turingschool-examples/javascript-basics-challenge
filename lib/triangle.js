class Triangle {
  constructor(a, b, c){
    this.a = a
    this.b = b
    this.c = c
  };

  isTriangle(){
    return ( this.a + this.b > this.c &&
             this.a + this.c > this.b &&
             this.b + this.c > this.a )
  };
};

module.exports = Triangle