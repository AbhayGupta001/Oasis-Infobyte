
function degreeCelsius() {
    let celsius = document.getElementById("celsius");
    let kelvin = document.getElementById("kelvin");
    let farahenheit = document.getElementById("farhenheit");
    
    var temp = parseFloat(celsius.value);
    farahenheit.value = parseFloat((temp * 9 / 5 + 32));
    kelvin.value = parseFloat(temp+273.15);
}

function degreefarhen() {
    let celsius = document.getElementById("celsius");
    let kelvin = document.getElementById("kelvin");
    let farahenheit = document.getElementById("farhenheit");
    
    var temp = parseFloat(farahenheit.value);
    celsius.value = parseFloat(((temp-32)*5/9));
    kelvin.value = parseFloat(celsius.value - 273.15);
}

function Kelvin() {
    let celsius = document.getElementById("celsius");
    let kelvin = document.getElementById("kelvin");
    let farahenheit = document.getElementById("farhenheit");
    
    var temp = parseFloat(kelvin.value);
    celsius.value = parseFloat((temp-273.15));
    farahenheit.value = parseFloat((celsius.value* 9 / 5 + 32));
}