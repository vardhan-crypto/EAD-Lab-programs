function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if(b===0)
    {
         return "Cannot divide by zero";
        
    }
    return a / b;
}


function perform(num1, num2, operationCallback) {
    return operationCallback(num1, num2);
}


function handle(operation) {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("result").innerText = "Enter a valid number dont leave it blank";
        return;
    }
    var result=perform(n1, n2, operation);
     document.getElementById("result").innerText = "Result : "+ result;
}