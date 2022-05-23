console.log("hello world");

var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function increment(){
  if(currentNumber <10){ //desabilita o botão se o numero é maior que 9
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
  }
  if(currentNumber<0){ //se o numero for negativo fica vermelho
    document.getElementById('currentNumber').style.color = 'red';
  }
  else{ //se o numero for positivo fica verde
    document.getElementById('currentNumber').style.color = 'green';
  }
  
}

function decrement(){

  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  if(currentNumber<0){ //se o numero for negativo fica vermelho
    document.getElementById('currentNumber').style.color = 'red';
  }
  else{ //se o numero for positivo fica verde
    document.getElementById('currentNumber').style.color = 'green';
  }
}