//loads the html/css decoument befroe performing the javascript function "start"
document.addEventListener('DOMContentLoaded', start);

//variables for the clculator, you need the first number, the operator and the second number to perform the calculation
var firstNumber;
var operator;
var secondNumber;

var savedMaths;
var answer


//SAVE: Press to save your current math into Saved Maths. When pressed, the user will be
// prompt to submit a name

// Saved Maths: List of selectable maths. Maths should be ordered by date and time Math Name/Date: Press to display the selected math in Result

// DELETE: Remove a saved Math Name/Date from Saved Maths

// CANCEL: Press to reset Result


//the function that makes the calculator work
function start(){
  //gets the numbers elements using thier classes from html
  var numbers   = document.getElementsByClassName('number');
  //gets the operators  using thier classes from the html
  var operators = document.getElementsByClassName('operator');
  //gets the equalsby  using the class name from html but starts allways with 0, so when the calculator starts it opens with 0
  var equals    = document.getElementsByClassName('equals')[0];

  var save      = document.getElementsByClassName('save')[0];

  var clear = document.getElementsByClassName('clear')[0];


  //for loop, runs through the html and goes through all the numbers adding event listeners
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', setNumber);
  }
  // another for loop for the operators
  for (var j = 0; j < operators.length; j++) {
    operators[j].addEventListener('click', setOperator);
    console.log(operator)
  }

  equals.addEventListener('click', calculate);

  save.addEventListener('click', saveMaths);

  clear.addEventListener('click', clearScreen)
}

function setNumber() {
  //the value in the display,
  var value = parseInt(this.value);
  updateDisplay(value);

  if (typeof firstNumber !== 'number') {
    firstNumber = value;
  } else {
    secondNumber = value;
  }
  console.log(firstNumber, operator, secondNumber);
}


function setOperator(){
  operator = this.value;
  console.log(firstNumber, operator, secondNumber);
}
//this function performs the calculations, using a switch statement for the opperators and using the variables first and second number
function calculate(){

  switch (operator) {
    case '+':
      answer = firstNumber + secondNumber;
      break
    case '-':
      answer = firstNumber - secondNumber
      break
    case '*':
      answer = firstNumber * secondNumber
      break
    case '/':
      answer = firstNumber / secondNumber
      break
    default:
      break;
      console.log(operator)
  };
  updateDisplay(answer);
  firstNumber = answer;
  // console.log(operator);
}

function updateDisplay(value){
  var display = document.getElementsByClassName('display')[0];
  display.value = value;
}


function saveMaths(){
  var name = prompt("Enter a name for this calculation");
  var list = document.getElementById('savedItems');
  var entry = document.createElement('li');
  entry.appendChild(document.createTextNode(name + ' : ' + answer));
  list.appendChild(entry);

}

function clearScreen(){
  updateDisplay('');
  answer = undefined;
  firstNumber = undefined;
  secondNumber = undefined;
}
