class Polygon {
  area() {}
  printArea() {}
}

class Triangle extends Polygon {
  constructor(base, height) {
    super()

    this.area = function() {
      return base * height / 2
    }
    this.printArea = `The triangule are is: ${this.area()} u2`
  }
}
class Square extends Polygon {
  constructor(side) {
    super()

    this.area = function() {
      return side * side
    }
    this.printArea = `The square area is: ${this.area()} u2`
  }
}
class Rectangule extends Polygon {
  constructor(base, height) {
    super()

    this.area = function() {
      return base * height
    }
    this.printArea = `The rectangle area is ${this.area()} u2`
  }
}

const tri = new Triangle(3, 2) // 3 u2
const sq = new Square(3) // 9 u2
const rec = new Rectangule(3, 2) // 6 u2
const poly = new Polygon()

console.log(tri.printArea)
console.log(sq.printArea)
console.log(rec.printArea)
console.log(poly)