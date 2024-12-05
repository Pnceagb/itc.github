function calculate()
{
  const n = parseInt(document.getElementById('input').value)
  
   //factorial
  let factorial = 1, i = n;
  while(i > 1)
  {
    factorial *= i;
    i--;
  }
  
  let sum = 0, j = 1;
  do{
    sum += j;
    j++;
  }
  while(j <= n);


  let totalSum = 0;
  for (let k = 1; k <= n; k++)
  {
    totalSum += k;
  }
  
  const average = n > 0 ? totalSum / n : 0; 
  
  
  document.getElementById('result').innerHTML = `
  <p>The factorial of ${n} is: ${factorial}</p>
  <p>The Sum of the first ${n} is: ${sum}</p>
  <p>The average of the first ${n} is: ${average.toFixed(2)}</p>
`  ;
}

function clearvalues()
{
  document.getElementById("input").value="";
}