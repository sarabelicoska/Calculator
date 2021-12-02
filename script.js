const previousElement = document.querySelector(".previous");
const currentElement = document.querySelector(".current");
const tempResultElement = document.querySelector(".temp-result");
const numbersElement = document.querySelectorAll(".number");
const operationElement = document.querySelectorAll(".operation");
const equalElement = document.querySelector(".equal");
const clearAllElement = document.querySelector(".all-clear");


let previous = "";
let current = "";
let result = null;
let lastOperation = "";


numbersElement.forEach((number) => {
  number.addEventListener("click", (e) => {
    
    
    current += e.target.innerText;

    currentElement.innerText = current;
  
  });
});
  
operationElement.forEach((operation) => {
    operation.addEventListener('click', (e) => {

      if (!current) return;
  
      const operationName = e.target.innerText;
      if (previous && current && lastOperation) {
        compute();
      } else {
        result = parseFloat(current);
      }
      clearVar(operationName);
      lastOperation = operationName;
      
    });
  });

  function clearVar(name = "") {
    previous += current + " " + name + " ";
    previousElement.innerText = previous;
    currentElement.innerText = "";
    current = "";
    tempResultElement.innerText = result;
  }

  function compute() {

    resultNumber = parseFloat(result);
    currentNumber = parseFloat(current);

    switch (lastOperation) {
      case 'x':
        result = resultNumber * currentNumber
        break
      case '+':
        result = resultNumber + currentNumber
        break
      case '-':
        result = resultNumber - currentNumber
        break
      case '/':
        result = resultNumber / currentNumber
        break
      default:
        return
    }
  }
  

  equalElement.addEventListener('click', (e) => {
    
    if(!current || !previous) return;

    compute();
    clearVar();
    currentElement.innerText = result;
    tempResultElement.innerText = "";
    current = result;
    previous = "";
  })

  clearAllElement.addEventListener('click', () => {
    current="";
    previous="";
    previousElement.innerText="";
    currentElement.innerText="";
    result = "";
    tempResultElement.innerText="";
  })
  
  