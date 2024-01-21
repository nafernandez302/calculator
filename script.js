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