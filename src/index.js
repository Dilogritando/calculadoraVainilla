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
  //aquí llegamos cuando hacemos click en un número
  total.innerText = currentValue+input.toString();
  /* const setValue=(input, currentValue)=>{

    console.log("Había un numero")
  };
  const wasOperator=()=>{
    console.log("Había un símbolo O NADA antes")
    history
    /* current = current.toString()+sign.toString()
  } */

  //Cuando no es un numero o está vacío lo seteamos
  //Cuando era un símbolo lo agregamos arriba
  /* Number.isInteger(currentValue) == false ? setValue(input, currentValue) : wasOperator(); */
  /* Number.isInteger(parseInt(currentValue)) ? setValue(input, currentValue) : wasOperator(); */

    /* //que el total se me pase a history
    history.innerHTML = currentValue || "";
    //que me quede el operador en total
    total.innerText = input;
    //que el siguiente número "suba" el operador al histórico en un string
    history.innerHTML = history.innerHTML+total.innerText.toString()
  } */
}

//2.Evaluate button
const evaluateBtn =(e)=>{
  let input = e.target.innerText;
  let currentValue = total.innerText;
  e.target.classList.contains("operators")== true ? initValidations(e) : displayText(input, currentValue);
}

//3.Operator rules
const initValidations =(e)=>{
  e.target.id === "clear" ? clear() :
    (e.target.id === "equals" ? initMath() :
      evalOperator(e)) ;
}

//4.ClearButton
const clear = () => {
  history.innerHTML = "";
  total.innerHTML = "";
}

//5.evalOperator
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

//6. initMath
const initMath = () => {
  console.log("La magia empieza")
}

//7.UdpateScreen
const udpateScreen = (e) => {
  //leer pantalla
  history.innerText = parseInt(total.innerText);
  total.innerText = e.target.innerText;
}

//Handler for all buttons
allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      handleClick(e);
    })
})

////////// Código de WebDev

/* class Calculator {
    constructor(history, total) {
      this.history = history
      this.total = total
      this.clear()
    }

    clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
    }

    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
      if (this.currentOperand === '') return
      if (this.previousOperand !== '') {
        this.compute()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
    }

    compute() {
      let computation
      const prev = parseFloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '+':
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case '*':
          computation = prev * current
          break
        case '÷':
          computation = prev / current
          break
        default:
          return
      }
      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''
    }

    getDisplayNumber(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }

    updateDisplay() {
      this.total.innerText =
        this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) {
        this.history.innerText =
          `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else {
        this.history.innerText = ''
      }
    }
  }


  const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-all-clear]')
  const history = document.querySelector('[data-previous-operand]')
  const total = document.querySelector('[data-current-operand]')

  const calculator = new Calculator(history, total)

  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })

  equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })

  allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })

  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })
 */
