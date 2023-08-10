function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a / b 
}

let number1 = 1
let number2 = 1
let sign = "+"

function operator(num1, sign, num2){
    if (sign === "+"){
        return add(num1, num2)
    }
    else if (sign === "-"){
        return subtract(num1, num2)
    }
    else if (sign === "*"){
        return multiply(num1, num2)
    }
    else if (sign === "/"){
        return divide(num1, num2)
    }
}

