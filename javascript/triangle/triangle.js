//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


const triangleInequality = (a,b,c) => (a + b) > c && (a + c) > b && (b + c) > a;

export class Triangle {
  constructor(a,b,c) {
    this.sides = [a, b, c];
    this.isTriangle = triangleInequality(a,b,c) && [a, b, c].filter(sideLength => sideLength > 0).length > 0;
  }

  isEquilateral() {
    const {isTriangle, sides} = this;
    return isTriangle && new Set(sides).size === 1;
  }

  isIsosceles() {
    const {isTriangle, sides} = this;
    return isTriangle && new Set(sides).size <= 2;
  }

  isScalene() {
    const {isTriangle, sides} = this;
    return isTriangle && sides.length === new Set(sides).size;
  }
}