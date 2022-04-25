const calculator = {
    displayNumber: '0',
    operator: null,
    firstnumber: null,
    waitingForSecondNumber: false
};

function updateDisplay(){
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalcalutor(){
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstnumber = null;
    calculator.waitingForSecondNumber = false;
}

function inputDigit(digit){
    if (calculator.displayNumber === '0'){
        calculator.displayNumber = digit;
    }else{
        calculator.displayNumber += digit;
    }
}

function inverseNumber(){
    if (calculator.displayNumber === '0'){
        return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator){
    if(!calculator.waitingForSecondNumber){
        calculator.operator= operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstnumber = calculator.displayNumber;
        calculator.displayNumber = '0';
    }else{
        alert('Operator Sudah ditentukan')
    }
}

function performCalculation(){
    if(calculator.firstnumber == null || calculator.operator== null){
        alert("Tetapakan Operator terlebih Dahulu");
        return;
    }

    let result = 0;
    if (calculator.operator === "+"){
        result = parseInt(calculator.firstnumber) + parseInt(calculator.displayNumber);
    }else{
        result = parseInt(calculator.firstnumber) - parseInt(calculator.displayNumber);
    }

    calculator.displayNumber = result;
}


const buttons = document.querySelectorAll(".button");
for (let button of buttons){
    button.addEventListener('click', function(event){


        const target = event.target;

        if (target.classList.contains('clear')){
            clearCalcalutor();
            updateDisplay();
            return;
        }
        if (target.classList.contains('negative')){
            inverseNumber();
            updateDisplay();
            return;
        }
        if (target.classList.contains('equals')){
            performCalculation();
            updateDisplay();
            return;
        }
        if (target.classList.contains('operator')){
            handleOperator(target.innerText)
            return;
        }

        inputDigit(target.innerText);
        updateDisplay()

    });
}