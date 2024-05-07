// Define a class called AreaCalculator. Inside it, create a static method that 
// let you calculate the area of the geometric figure passed as parameter. 
// The method will let you calculate the square, the rectangle and the circle area.

// class Square {
// constructor(side) {
// this.side = side;
// }
// }

// class Rectangle {
// constructor(width, height) {
// this.width = width;
// this.height = height;
// }
// }

// class Circle {
// constructor(radius) {
// this.radius = radius;
// }
// }

// class AreaCalculator {
// // ...
// }

// const square = new Square(4);
// const rectangle = new Rectangle(4, 2);
// const circle = new Circle(5);

// console.log(AreaCalculator.calculate(square));
// console.log(AreaCalculator.calculate(rectangle));
// console.log(AreaCalculator.calculate(circle));

class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(shape) {
    if (shape instanceof Square) {
      return shape.side * shape.side;
    } else if (shape instanceof Rectangle) {

      return shape.width * shape.height;
    } else if (shape instanceof Circle) {
      const pi = Math.PI;
      return pi * shape.radius * shape.radius;
    } else {
      throw new Error("Unsupported shape");
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle)); 
