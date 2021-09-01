const allNumbers = document.querySelectorAll(".numbers");
const allOperators = document.querySelectorAll(".operators");
const allButtons = document.querySelectorAll("button");

const history = document.getElementById("history");
const total = document.getElementById("total");

const clearButton = document.getElementById("clear");
const moduleButton = document.getElementById("module");
const multiplicationButton = document.getElementById("multiplication");
const minusButton = document.getElementById("minus");
const addButton = document.getElementById("plus");
const equalButton = document.getElementById("equals");


const handleClick = (e) => {
    evaluateBtn(e);
}

//1. Display on screen
const displayText = (input, currentValue) => {
  total.innerText = currentValue+input.toString();
}

//2.Evaluate button
const evaluateBtn =(e)=>{
  let input = e.target.innerText;
  let currentValue = total.innerText;
  e.target.classList.contains("operators")== true ? initMath(e) : displayText(input, currentValue);
}

//3.Operator rules
const initMath =(e)=>{
  e.target.id === "clear" ? clear() : console.log("Es otro operador");

  //take number up
  let firstNum = parseInt(total.innerText);
  history.innerText = firstNum;

  //clear total
  total.innerText = e.target.innerText;
}

//4.ClearButton
const clear = () => {
  history.innerHTML = "";
  total.innerHTML = "";
  console.log("limpié")
}

//5.evalOperator
const evalOperator =(e) =>{

}

//Handler for all buttons
allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      handleClick(e);
    })
})
