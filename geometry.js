// Código del cuadrado
const perimetroCuadrado = (lado) => {
  return lado * 4;
};

const areaCuadrado = (lado) => {
  return lado * lado;
};

// Código del triangulo
const trianglePerimeter = (side1, side2, base) => side1 + side2 + base;

const triangleArea = (base, height) => (base * height) / 2;

// Código del círculo
// PI
const PI = 3.14; //Math.PI;

// Diámetro
const diametroCirculo = (radio) => radio * 2;

// Circunferencia
const perimetroCirculo = (radio) => {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
};

// Área
const areaCirculo = (radio) => radio * radio * PI;

// HTML
// SQUARE
// AREA
function areaSquare() {
  const inputForm = document.getElementById("inputSquare");
  const squareResult = document.getElementById("formSquareResult");
  const valueInput = inputForm.value;

  resultArea = areaCuadrado(valueInput);
  squareResult.innerText = `Area: ${resultArea} cm²`;
}
// PERIMETER
function perimeterSquare() {
  const inputForm = document.getElementById("inputSquare");
  const squareResult = document.getElementById("formSquareResult");
  const valueInput = inputForm.value;

  resultPerimeter = perimetroCuadrado(valueInput);
  squareResult.innerText = `Perimeter: ${resultPerimeter} cm`;
}
// TRIANGLE
// AREA
const calculateTrianglePerimeter = () => {
  const triangleResult = document.getElementById("triangle-result");

  const valueA = parseInt(document.getElementById("sideA").value);
  const valueB = parseInt(document.getElementById("sideB").value);
  const valueBase = parseInt(document.getElementById("base").value);

  const perimeter = trianglePerimeter(valueA, valueB, valueBase);
  triangleResult.innerText = `Perimeter: ${perimeter} cm`;
};
//PERIMETER
const calculateTriangleArea = () => {
  const triangleResult = document.getElementById("triangle-result");

  const valueBase = parseInt(document.getElementById("base").value);
  const valueHeight = parseInt(document.getElementById("sideB").value);

  const area = triangleArea(valueBase, valueHeight);
  triangleResult.innerText = `Area: ${area} cm²`;
};
//CIRCLE
//AREA
function calculateCircleArea() {
  const valueRadius = parseInt(document.getElementById("radius").value);
  const circleResultHTML = document.getElementById("circle-result");

  const area = areaCirculo(valueRadius);
  circleResultHTML.innerText = `Area: ${area} cm²`;
}
//PERIMETER
function calculateCirclePerimeter() {
  const valueRadius = parseInt(document.getElementById("radius").value);
  const circleResultHTML = document.getElementById("circle-result");

  const perimeter = perimetroCirculo(valueRadius);
  circleResultHTML.innerText = `Perimeter: ${perimeter} cm`;
}
//DIAMETER
function calculateCircleDiameter() {
  const valueRadius = parseInt(document.getElementById("radius").value);
  const circleResultHTML = document.getElementById("circle-result");

  const diameter = diametroCirculo(valueRadius);
  circleResultHTML.innerText = `Diameter: ${diameter} cm`;
}
