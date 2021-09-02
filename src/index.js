const allNumbers = document.querySelectorAll(".numbers");
const allOperators = document.querySelectorAll(".operators");
const allButtons = document.querySelectorAll("button");
const history = document.getElementById("history");
const total = document.getElementById("total");
const result = document.getElementById("result");
const clearButton = document.getElementById("clear");
const moduleButton = document.getElementById("module");
const multiplicationButton = document.getElementById("multiplication");
const minusButton = document.getElementById("minus");
const addButton = document.getElementById("plus");
const equalButton = document.getElementById("equals");
const handleClick = (e) => {
    evaluateBtn(e);
}
const displayText = (input, currentValue) => {
  total.innerText = currentValue+input.toString();
}
const evaluateBtn =(e)=>{
  let input = e.target.innerText;
  let currentValue = total.innerText;
  e.target.classList.contains("operators")== true ? initValidations(e) : displayText(input, currentValue);
}
const initValidations =(e)=>{
  e.target.id === "clear" ? clear() :
    (e.target.id === "equals" ? initMath() :
      evalOperator(e)) ;
}
const clear = () => {
  history.innerHTML = "";
  total.innerHTML = "";
  result.innerHTML = "";
}
const evalOperator =(e) =>{
  //Es un operador que no es clear ni equals)
  let currently = total.innerText;
  let replace = e.target.innerText;
  let isNumber = parseInt(currently);

  const setOperator = (e) => {
    total.innerText = replace;
  }
  Number.isInteger(isNumber) ? udpateScreen(e) : setOperator(e);
}
const initMath = () => {
  const a = parseInt(history.innerHTML);
  const operator = total.innerHTML.charAt(0);
  const b = parseInt(total.innerHTML.slice(1));
  const calculations = {
    SUM: function (a, b) {
      return (a+b);
    },
    MIN: function (a, b) {
      return (Number(a) - Number(b));
    },
    MOD: function (a, b) {
      return (Number(a)%Number(b));
    },
    MUL: function (a, b) {
      return (Number(a) * Number(b));
    },
  };
  let operation ="";
  (operator === "+") ? operation= calculations.SUM(a,b)
    : ((operator === "-") ? operation=calculations.MIN(a,b)
      : ((operator === "x") ? operation=calculations.MUL(a,b)
        : ((operator === "%") ? operation=calculations.MOD(a,b) : ""
          )
        )
      )
  ;

  result.innerHTML = operation;
  history.innerHTML = history.innerHTML.toString()+total.innerText.toString();
  total.innerText ="";
}

const udpateScreen = (e) => {
  history.innerText = parseInt(total.innerText);
  total.innerText = e.target.innerText;
}

//Handler for all buttons
allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      handleClick(e);
    })
})
