"use strict";
/////////////////////////////////////////////////////// code for Add checker /////////////////////////////////////////////////////////////

const btnAdd = document.querySelector(".btn--add");
const message = document.querySelector(".message");
let valueFound = false;
let val1, val2;

// For check the addition
const sumHandler = (val1, val2) => {
  return val1 + val2;
};

// For check the subtraction
const subHandler = (val1, val2) => {
  return val1 - val2;
};

btnAdd.addEventListener("click", () => {
  val1 = Number(document.querySelector(".input1").value);
  val2 = Number(document.querySelector(".input2").value);
  let sum = sumHandler(val1, val2);
  let sub = subHandler(val1, val2);
  valueFound = false;

  if (sum === 50 || sub === 50) {
    valueFound = true;
  }
  if (val1 === 50 || val2 === 50) {
    valueFound = true;
  }

  if (valueFound == true) {
    message.textContent = "True";
  } else {
    message.textContent = "False";
  }
});

///////////////////////////////////// Code for non - duplicate remover///////////////////////////////////////////////////////////////////////

let dupcArr = [];
const duplicateAddButton = document.querySelector(".btn__add--duplicate");
const duplicateRemoveButton = document.querySelector(".btn__remove--duplicate");
const textRemove = document.querySelector(".value__list--remove");

// // Adding value button code
duplicateAddButton.addEventListener("click", () => {
  const inputeRemoverValue = document.querySelector(".input--duplicate").value;
  dupcArr.push(inputeRemoverValue);
  textRemove.textContent = "Your enterd values=" + dupcArr;
});

// non duplicate remover code
duplicateRemoveButton.addEventListener("click", () => {
  let nonDupcArr = [];
  const swap = () => {
    for (let i = 0; i < dupcArr.length; i++) {
      if (dupcArr[i] > dupcArr[i + 1]) {
        let temp = dupcArr[i];
        dupcArr[i] = dupcArr[i + 1];
        dupcArr[i + 1] = temp;
      }
    }
  };
  // Function for save duplicate
  const saveDupc = () => {
    for (let i = 0; i < dupcArr.length; i++) {
      if (dupcArr[i] === dupcArr[i + 1]) {
        nonDupcArr.push(dupcArr[i]);
      }
    }
  };
  // Function for remove duplicate
  const removeDupc = () => {
    nonDupcArr = nonDupcArr.filter((iteam, index) => {
      return nonDupcArr.indexOf(iteam) === index;
    });
  };
  for (let i = 0; i < dupcArr.length; i++) {
    swap();
  }

  saveDupc();
  removeDupc();
  textRemove.textContent = "Final value=" + nonDupcArr;
});

// //////////////////////////////////////// January task code ////////////////////////////////////////////////////////////////////////////////

const btnJanuary = document.querySelector(".btn__january--task");
const messageJanuary = document.querySelector(".message--january");

const january = () => {
  let yearArr = [];
  for (let year = 2014; year <= 2050; year++) {
    let d = new Date(year, 0, 1);
    if (d.getDay() === 0) {
      yearArr.push(year);
      messageJanuary.textContent = yearArr;
    }
  }
};

btnJanuary.addEventListener("click", () => {
  january();
});

// ///////////////////////////////////////////////////////////// //  Christmas Task code //////////////////////////////////////////////////////////
const btnChristmas = document.querySelector(".btn__Christmas");
const christmasMessage = document.querySelector(".message--Christmas");

const christmas = () => {
  let today = new Date();
  let cmas = new Date(today.getFullYear(), 11, 25);
  if (today.getMonth() == 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
  }

  let one_day = 1000 * 60 * 60 * 24;
  christmasMessage.textContent =
    Math.ceil((cmas.getTime() - today.getTime()) / one_day) +
    " days left until Christmas!";
};

btnChristmas.addEventListener("click", () => {
  christmas();
});

// /////////////////////////////////////////////////////// / Total appearance task  /////////////////////////////////////////////////////////////////////

const totalAppearanceBtn = document.querySelector(".btn__enter--find");
const textAppearance = document.querySelector(".add--find");

const appearance = () => {
  let myCount = 0;
  const numberRange = Number(document.querySelector(".input--range").value);
  const findNumber = document.querySelector(".input--find").value;
  if (findNumber <= 9) {
    for (let i = 0; i <= numberRange; i++) {
      i = String(i);
      for (let j = 0; j < i.length; j++) {
        if (i[j] == findNumber) {
          myCount++;
          break;
        }
      }
    }
    textAppearance.textContent = myCount;
  } else {
    textAppearance.textContent = "Please enter the value B/W 0 to 9";
  }
};

totalAppearanceBtn.addEventListener("click", () => {
  appearance();
});

//////////////////////////////////////////////////// // // Sorting task //////////////////////////////////////////////////////////////////////////////////

const sortBtnAdd = document.querySelector(".btn__add--sort--add");
const sortBtn = document.querySelector(".btn__add--sort");
const sortMessage = document.querySelector(".sort--value");
const unSortArr = [];

sortBtnAdd.addEventListener("click", () => {
  const sortBoxValue = Number(document.querySelector(".input--sort").value);
  unSortArr.push(sortBoxValue);
  sortMessage.textContent = unSortArr;
});

sortBtn.addEventListener("click", () => {
  const swap = () => {
    for (let i = 0; i < unSortArr.length; i++) {
      if (unSortArr[i] > unSortArr[i + 1]) {
        let temp = unSortArr[i];
        unSortArr[i] = unSortArr[i + 1];
        unSortArr[i + 1] = temp;
      }
    }
  };
  for (let i = 0; i < unSortArr.length; i++) {
    swap();
  }
  sortMessage.textContent = unSortArr;
});

// //////////////////////////////////////////////////     Sum of index task      ///////////////////////////////////////////////////////////////

const indexArr = [];

const enterIndex = document.querySelector(".btn__enter--index");
const sumIndex = document.querySelector(".btn__add--index");
const indexMessage = document.querySelector(".add--index ");
let int = false;

enterIndex.addEventListener("click", () => {
  const inputPrefix = Number(
    document.querySelector(".input--index--add").value
  );
  indexArr.push(inputPrefix);
  indexMessage.textContent = indexArr;
});

sumIndex.addEventListener("click", () => {
  const indexArr2 = [];
  const indexArr3 = [];
  let myDataa = 0;

  const funcEven = (evenArr) => {
    const indexArr2 = [];
    const indexArr3 = [];
    for (let i = 0; i < evenArr.length; i = i + 2) {
      indexArr2.push([evenArr[i], evenArr[i + 1]]);
    }
    for (let i = 0; i < indexArr2.length; i++) {
      const [a, b] = indexArr2[i];
      indexArr3.push(a + b);
    }
    indexMessage.textContent = indexArr3;
  };

  const funcOdd = (oddArr) => {
    const indexArr2 = [];
    const indexArr3 = [];
    for (let i = 0; i < oddArr.length; i = i + 2) {
      indexArr2.push([oddArr[i], oddArr[i + 1]]);
    }
    let lastEl = indexArr2.pop()[0] * 2;

    for (let i = 0; i < indexArr2.length; i++) {
      const [a, b] = indexArr2[i];
      indexArr3.push(a + b);
    }
    indexArr3.push(lastEl);
    indexMessage.textContent = indexArr3;
  };

  let int = Number.isInteger(indexArr.length / 2);

  if (int) {
    funcEven(indexArr);
  } else {
    funcOdd(indexArr);
  }
});

// // //////////////////////////////////////////////////////// /// prefix task code /////////////////////////////////////////////////////////////////////////

const enterValue = document.querySelector(".btn__enter--values");
const addValue = document.querySelector(".btn__add--values");
const valueMessage = document.querySelector(".add--value");
const baseArray = [];
enterValue.addEventListener("click", () => {
  const inputPrefix = Number(
    document.querySelector(".input--values--add").value
  );
  baseArray.push(inputPrefix);
  valueMessage.textContent = baseArray;
});

addValue.addEventListener("click", () => {
  const sumArray = [];
  sumArray.unshift(baseArray[0]);
  for (let i = 0; i < baseArray.length; i++) {
    const val = sumArray[i] + baseArray[i + 1];
    sumArray.push(val);
  }
  sumArray.pop();
  valueMessage.textContent = sumArray;
});

// ///////////////////////////////////////////////// /// // / string task code   ////////////////////////////////////////////////////////////////////
let str = "";
let workString = true;
const addStr = document.querySelector(".btn__add--string");
const changeStr = document.querySelector(".btn__change--string");
const strText = document.querySelector(".string--value");

addStr.addEventListener("click", () => {
  str = document.querySelector(".input--string").value;
  strText.textContent = str;
  workString = true;
});

changeStr.addEventListener("click", () => {
  if (workString === true) {
    const location = Number(prompt("Please enter Location"));
    if (location >= 0) {
      if (location < str.length) {
        str = str.replace(str[location], "$");
        strText.textContent = str;
      } else {
        strText.textContent =
          "please enter avalid index please enter string again";
        workString = false;
      }
    } else {
      strText.textContent =
        "you can't insert negative indexing please enter string again";
      workString = false;
    }
  }
});

////////////////////////////////////////////////    Calculator task  /////////////////////////////////////////////////////////////////////////////

class Calculator {
  constructor(previousOperandandTextElement, currentOperandandTextElement) {
    this.previousOperandandTextElement = previousOperandandTextElement;
    this.currentOperandandTextElement = currentOperandandTextElement;
    this.clear();
  }
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }
  delete() {}
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  chooseOperation(operation) {
    if(this.currentOperand === '') return
    if(this.previousOperand !== ''){
      this.compute() 
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }
  compute() {
    let computation ;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if(isNaN(prev)||isNaN(current)) return
    switch(this.operation){
      case '+':
        computation = prev + current;
        break;
    }
  }
  updateDisplay() {
    this.currentOperandandTextElement.innerText = this.currentOperand;
    this.previousOperandandTextElement.innerText = this.previousOperand;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener('click',()=>{
  calculator.compute();
  calculator.updateDisplay()
})