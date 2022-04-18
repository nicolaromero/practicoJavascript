// Código del cuadrado

const perimetroCuadrado = (lado) => {
  return lado * 4;
}

const areaCuadrado = (lado) => {
  return lado * lado;
}

// Código del triangulo

const perimetroTriangulo = (lado1, lado2, base) => {
  return lado1 + lado2 + base;
}

const areaTriangulo = (base, altura) => {
  return (base * altura) / 2;
}

// Código del círculo
// Diámetro
const diametroCirculo = (radio) => {
  return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
const perimetroCirculo = (radio) => {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
const areaCirculo = (radio) => {
  return (radio * radio) * PI;
}

// HTML
    // SQUARE
        // AREA
function areaSquare(){
    const inputForm = document.getElementById("inputSquare");
    const squareResult = document.getElementById("formSquaeResult");
    const valueInput = inputForm.value;

    resultArea = areaCuadrado(valueInput);
    squareResult.innerText = `${resultArea} cm²`;
}
        // PERIMETER
function perimeterSquare(){
    const inputForm = document.getElementById("inputSquare");
    const squareResult = document.getElementById("formSquaeResult");
    const valueInput = inputForm.value;

    resultPerimeter = perimetroCuadrado(valueInput);
    squareResult.innerText = `${resultPerimeter} cm`
    console.log(resultPerimeter);
}
    // TRIANGLE
        // AREA
function calculateTriangleArea(){}
function calculateTrianglePerimeter(){}
// function calculateCircleArea(){}
// function calculateCirclePerimeter(){}
