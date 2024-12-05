function clearvalues()
{
	 document.getElementById("ftemp").value = "";
     document.getElementById("sum").value = "";

}
function toCelsius(t) {
  return (5 / 9) * (t - 32);
}

function updateCelsius() {
  // Get the Fahrenheit input value
  const ftemp = parseFloat(document.getElementById("ftemp").value) || 0;
  
  // Convert to Celsius
  const celsius = toCelsius(ftemp);
  
  // Set the Celsius value in the 'sum' input field
  document.getElementById("sum").value = celsius.toFixed(2); // Rounded to 2 decimal places
}



function clearvalues1()
{
	 document.getElementById("ftemp1").value = "";
     document.getElementById("sum1").value = "";

}
function toFahrenheit1(t) {
  return ((t * 9/5) + 32 );
}

function updateFahrenheit1() {
  // Get the Fahrenheit input value
  const ftemp1 = parseFloat(document.getElementById("ftemp1").value) || 0;
  
  // Convert to Celsius
  const Fahrenheit1 = toFahrenheit1(ftemp1);
  
  // Set the Celsius value in the 'sum' input field
  document.getElementById("sum1").value = Fahrenheit1.toFixed(2); // Rounded to 2 decimal places
}



function clearvalues2()
{
	   document.getElementById("meter").value = "";
	   document.getElementById("sum2").value = "";

}

function toFoot(t) 

{
  return t * 3.281;
}
function updateFoot()

{
 const meter = parseFloat(document.getElementById("meter").value) || 0;
 

 const Feet = toFoot(meter);
  
 
 document.getElementById("sum2").value = Feet.toFixed(4); 
}


function clearvalues3()
{
	document.getElementById("feet").value = "";
    document.getElementById("sum3").value = "";
}

function toMeter(t)
{
	return t / 3.281;
}

function updateMeter()
{
	const feet = parseFloat(document.getElementById("feet").value) || 0;
    
    const meter = toMeter(feet);
    
    document.getElementById("sum3").value = meter.toFixed(4);
}