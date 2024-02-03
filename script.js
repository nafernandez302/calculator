function add(a,b){
    return a+b;
}

function sustract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b == 0){
        return null;
    }
    return a/b;
}

function operate(fst, op, snd){
    return op(fst,snd);
}

function obtainOperator(stringOp){
    let functionOp;
    switch (stringOp) {
        case "+":
            functionOp = add;
            break;
        case "*":
            functionOp = multiply;
            break;
        case "/":
            functionOp = divide;
            break;
        case "-":
            functionOp = sustract;
            break;
        default:
            break;
    }

    return functionOp;
}
function cleanDisplay() {
    const output = document.querySelector(".display");
    output.innerHTML = "0";
}

const display = document.querySelector(".display");

let fstArg = "";
let sndArg = "";
let isOperatorPressed = false;
let actualOperator;

const operatorsContainer = document.querySelectorAll(".operator");
const numbersContainer = document.querySelectorAll(".number")
const clearContainer = document.querySelector(".clear");
const equalContainer = document.querySelector(".equal");

operatorsContainer.forEach(operator => {
    operator.addEventListener("click", function(){
        isOperatorPressed = true;
        actualOperator = this.textContent;
    })
})

numbersContainer.forEach(number =>{
    number.addEventListener("click", function(counter){
        const clickedNumber = this.textContent;
        if(isOperatorPressed){
            sndArg = sndArg + clickedNumber;
            display.innerHTML = sndArg;
            console.log(sndArg);
        }
        else {
            fstArg = fstArg + clickedNumber
            display.innerHTML = fstArg;
            console.log(fstArg);
        }
        
    })
})

clearContainer.addEventListener("click", function(){
    cleanDisplay();
    fstArg = "";
    sndArg = "";
    isOperatorPressed = false;
})

equalContainer.addEventListener("click", function(){
    let functionOp = obtainOperator(actualOperator);
    let result = operate(parseInt(fstArg,10), 
                         functionOp,
                         parseInt(sndArg,10))
    if(result != null){
        display.innerHTML = result;
    }
    else{
        display.innerHTML = "ERROR";
    }
    fstArg = "";
    sndArg = "";
    isOperatorPressed = false;
})


