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


let oldnumber = ""
let currentnumber = "" 
let sign = ""
let counter = 0
let afterequal = 0
let afteroperator = 0
const reg = new RegExp('^[0-9]+$');


const display = document.querySelector(".display");
var numbers = document.createTextNode("")
display.appendChild(numbers)

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => button.addEventListener("click", function(e){
    if (button.textContent === "Clear"){
        display.textContent = ""
        counter = 0
        currentnumber = ""
        oldnumber = ""
        afteroperator = 0
        afterequal = 0
        return
    }
    
    else if(button.textContent === "="){
        if(afteroperator === 1 || afterequal === 1){return}
        currentnumber = operator(parseInt(oldnumber), sign, parseInt(currentnumber))
        oldnumber = currentnumber 
        display.textContent = currentnumber 
        counter = 0
        afterequal = 1
        afteroperator = 0
        }
        
    
    else if (button.textContent != "+" && button.textContent != "-" && button.textContent != "*" && button.textContent != "/") {
        if (afterequal === 1){return}
        display.textContent += button.textContent
        currentnumber += button.textContent
        afteroperator = 0
        afterequal = 0
    }
    else if (button.textContent === "+" || "-" || "*" || "/"){
        if (afteroperator === 1){return}
        afterequal = 0
        if (counter === 0){
            counter = 1
            oldnumber = currentnumber
            currentnumber = ""
            sign = button.textContent
            display.textContent += button.textContent
            afteroperator = 1
            return
        }
        else if (counter === 1){
            oldnumber = operator(parseInt(oldnumber), sign, parseInt(currentnumber))
            currentnumber = ""
            display.textContent = oldnumber 
            display.textContent += button.textContent
            sign = button.textContent
            afteroperator = 0
        }
    }
   
}))

