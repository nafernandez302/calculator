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
    fstArg = "";
    sndArg = "";
    notArgs = true;
    argsReady = false;
    isOperatorPressed = false;
    isEqualPressed = false;
}

const display = document.querySelector(".display");

let fstArg = "";
let sndArg = "";
let notArgs = true;
let argsReady = false;
let isOperatorPressed = false;
let isEqualPressed = false;
let actualOperator;

const operatorsContainer = document.querySelectorAll(".operator");
const numbersContainer = document.querySelectorAll(".number")
const clearContainer = document.querySelector(".clear");
const equalContainer = document.querySelector(".equal");

operatorsContainer.forEach(operator => {
    operator.addEventListener("click", function(){
        if(notArgs){
            console.log("sin argumentos");
            return;
        }
        console.log("operator pressed: ", this.textContent );
        if(argsReady){
            console.log("argsReady!!!!");
            let functionOp = obtainOperator(actualOperator);
            let result = operate(parseInt(fstArg,10), 
                                functionOp,
                                parseInt(sndArg,10));
            if(result != null){
                display.innerHTML = result;
            }
            else{
                display.innerHTML = "ERROR";
            }
            fstArg = result.toString();
            sndArg = "";
            console.log("fstArgs: " + fstArg );
            console.log("sndArgs: " + sndArg);
            argsReady = false;
        }
        else{
            console.log("Faltan args!!");
            actualOperator = this.textContent;
        }
        isOperatorPressed = true;
        isEqualPressed = false;
        
    })
})

numbersContainer.forEach(number =>{
    number.addEventListener("click", function(counter){
        const clickedNumber = this.textContent;
        
        if(isEqualPressed){
            console.log("borrandotodo");
            fstArg = "";
            isEqualPressed = false;
            argsReady = false;
            notArgs = true;
            isOperatorPressed = false;
        }
        if(isOperatorPressed){
            notArgs = false;
            sndArg = sndArg + clickedNumber;
            display.innerHTML = sndArg;
            console.log(sndArg);
            argsReady = true;
        }
        else {
            notArgs = false;
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
    if(!argsReady){
        return;
    }
    else{
        let functionOp = obtainOperator(actualOperator);
        let result = operate(parseInt(fstArg,10), 
                            functionOp,
                            parseInt(sndArg,10));
        if(result != null){
            display.innerHTML = result;
            fstArg = result.toString();
        }
        else{
            display.innerHTML = "ERROR";
        }
    }
    
    sndArg = "";
    isOperatorPressed = true;
    isEqualPressed = true;
    argsReady = false;
})


