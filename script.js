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
function cleanDisplay() {
    const output = document.querySelector(".display");
    output.innerHTML = "0";
}

const display = document.querySelector(".display");

let fstArg = "";
let sndArg = "";
let operatorPressed = false;

const operatorsContainer = document.querySelectorAll(".operator");
const numbersContainer = document.querySelectorAll(".number")

operatorsContainer.forEach(operator => {
    operator.addEventListener("click", function(){
        operatorPressed = true;
    })
})

numbersContainer.forEach(number =>{
    number.addEventListener("click", function(counter){
        const clickedNumber = this.textContent;
        fstArg = fstArg + clickedNumber
        display.innerHTML = fstArg;
        counter++;
        console.log(fstArg);
    })
})

