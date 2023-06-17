function parseCount(value) {
  const parseNum = Number.parseFloat(value);
    if (isNaN(parseNum)){
        throw new Error("Невалидное значение");;
    }
 return parseNum;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}


/*______________________________*/

class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;

    if (sideA+sideB<sideC || sideA+sideC<sideB || sideB+sideC<sideA) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimeter() {
    return this.sideA + this.sideB + this.sideC;
  }

  get area() {
    const p = this.perimeter;
    return Math.sqrt(p * (p - this.sideA)(p - this.sideB)(p - this.sideC) );
  }
}

function getTriangle(sideA, sideB, sideC) {
  try {
    return new Triangle(sideA, sideB, sideC);
  } catch (error) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует"
      }, 
      get area() {
        return "Ошибка! Треугольник не существует"
      }
    };
  }
}