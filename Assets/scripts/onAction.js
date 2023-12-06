shiftCalc.addEventListener('click', () => {
    getElementById('display_result').innerHTML = "'what happened'"
});

// All the functions are here

function clearIt() {
    display.innerHTML = "";
    output.innerHTML = "";
    result = '';
}

function percent() {
    console.log('on Experiment');
}

function symbolMinus_onPlusOrMinus() {
    console.log('on Experiment');
}

function symbolPlus_onPlusOrMinus() {
    console.log("on Experiment");
}

function symbolPoint() {
    result = result + '.';
    display.innerHTML = result;
}

//Mathematical Operators' function are here
function powerOf() {
    result = result + ' ' + '^' + ' ';
    display.innerHTML = result;
}

function division() {
    result = result + ' ' + '/' + ' ';
    display.innerHTML = result;
}

function multiplication() {
    result = result + ' ' + '*' + ' ';
    display.innerHTML = result;
}

function plus() {
    result = result + ' ' + '+' + ' ';
    display.innerHTML = result;
}

function minus() {
    result = result + ' ' + '-' + ' ';
    display.innerHTML = result;
}
function equalto() {
    let number = parseInt(result);
    let answer;
    answer = Math.floor(number);
    output.innerHTML = answer;
}


// The numbers' Buttons


function numberOne() {
    result = result + '1';
    display.innerHTML = result;
}

function numberTwo() {
    result = result + '2';
    display.innerHTML = result;
}

function numberThree() {
    result = result + '3';
    display.innerHTML = result;
}

function numberFour() {
    result = result + '4';
    display.innerHTML = result;
}

function numberFive() {
    result = result + '5';
    display.innerHTML = result;
}
function numberSix() {
    result = result + '6';
    display.innerHTML = result;
}
function numberSeven() {
    result = result + '7';
    display.innerHTML = result;
}
function numberEight() {
    result = result + '8';
    display.innerHTML = result;
}
function numberNine() {
    result = result + '9';
    display.innerHTML = result;
}
function Zero() {
    result = result + '0';
    display.innerHTML = result;
}

// All the conditions for making the calculator working

// calling the functions of the first (-1st-) row
clearBtn.addEventListener('click', clearIt);
percentageBtn.addEventListener('click', percent);
powerBtn.addEventListener('click', powerOf);
divisionBtn.addEventListener('click', division);

// calling the functions of the second(-2nd-) row
sevenBtn.addEventListener('click', numberSeven);
eightBtn.addEventListener('click', numberEight);
nineBtn.addEventListener('click', numberNine);
multiplicationBtn.addEventListener('click', multiplication);

// calling the functions of the third(-3rd-) row
fourBtn.addEventListener('click', numberFour);
fiveBtn.addEventListener('click', numberFive);
sixBtn.addEventListener('click', numberSix);
minusBtn.addEventListener('click', minus);

// calling the functions of the fourth(-4th-) row
oneBtn.addEventListener('click', numberOne);
twoBtn.addEventListener('click', numberTwo);
threeBtn.addEventListener('click', numberThree);
plusBtn.addEventListener('click', plus);

// calling the functions of the fiveth(-5th-) row
///plusOrMinusBtn.addEventListener('click', plusorminus);
zeroBtn.addEventListener('click', Zero);
pointBtn.addEventListener('click', symbolPoint);
isEqualToBtn.addEventListener('click', equalto);

// Here: The Calculation Logic
function putit() {
    container = [9, "let me put"];
    container.push("let me put something");
    console.log(container);
}
//plusOrMinusBtn.addEventListener('click', putit);



// The logic for the mathematical order




