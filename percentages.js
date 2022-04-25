const  subtractPercentage = (price, discount) => (price * (100 - discount))/100; 

function calculateSubtractPercentage(){
    const valuePrice = parseInt(document.getElementById("numberLess").value);
    const valuePercentage = parseInt(document.getElementById("percentageLess").value);

    const resultLessSubtract = document.getElementById("resultLess");

    const calculePercentage = subtractPercentage(valuePrice, valuePercentage);
    resultLessSubtract.innerText = `${calculePercentage} is the result of ${valuePrice} less ${valuePercentage}%`;
}
