//Autor: Jonathan Arroyo Lara
function factorial (number){
  if (number == 0){
      return 1;
  } else {
    return number * factorial (number-1);
  }
}

function calculateFactorial (){
  var number = document.getElementById("number").value;
  console.log(factorial(number));
  document.getElementById("result").innerText = factorial(number);
}

