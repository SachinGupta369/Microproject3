//Calculator

const display = document.getElementById("show");
let isLastInputOperator = false;
let isDecimalAdded = false;

function addToDisplay(input){
    if (input === "." && isDecimalAdded) {
        return;
    }
        if ("+-*/".includes(input)) {
            if (isLastInputOperator) {
                initialValue = display.value;
                updatedValue = initialValue.substring(0, initialValue.length - 1) + input;
                display.value = updatedValue;
                return;
            }
            isLastInputOperator = true; 
            isDecimalAdded = false;
        } 
        else {
            isLastInputOperator = false; 
            if (input === ".") {
                isDecimalAdded = true;
            }
        }
    display.value += input; 
    display.scrollLeft = display.scrollWidth;
}

// function addToDisplay(input){
//     display.value += input;
// }

function reset(){
    display.value = ""
}

function dee(){
    const currentNumber = document.getElementById('show').value
    const newNumber = currentNumber.substring(0,currentNumber.length-1)
    document.getElementById('show').value=newNumber
}

function answer(){
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value=error
    }
}
