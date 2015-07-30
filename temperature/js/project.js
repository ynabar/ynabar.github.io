var fahrenheit;
var celsius; 
var conversionCelsius;
var conversionFahrenheit;

document.getElementById("clickme1").onclick = calculateCelsius; 
document.getElementById("clickme2").onclick = calculateFahrenheit; 


function calculateCelsius() {
	fahrenheit = document.getElementById("fahrenheit").value;

if (fahrenheit != null) { 
	var conversionCelsius = (fahrenheit - 32) * (5/9);
	conversionCelsius = conversionCelsius.toFixed(2); 
	document.getElementById("conversionCelsius").innerHTML = conversionCelsius; 
	document.getElementById("conversionFahrenheit").innerHTML = null; 
}
else {
	document.write("");
}
}

function calculateFahrenheit() {
	celsius = document.getElementById("celsius").value;


if (celsius != null) {
	var conversionFahrenheit = (celsius * (9/5)) + 32; 
	conversionFahrenheit = conversionFahrenheit.toFixed(2); 
	document.getElementById("conversionFahrenheit").innerHTML = conversionFahrenheit; 
	document.getElementById("conversionCelsius").innerHTML = null; 
}
else {
	document.write("");
}
}
  
