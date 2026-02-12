
function isPalindrome(num) {
    var original = num;
    var reversed = 0;

    while (num > 0) {
        var digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    return original === reversed;
}


function isArmstrong(num) {
    var original = num;
    var sum = 0;
    var digits = num.toString().length;

    while (num > 0) {
        var digit = num % 10;
        sum += Math.pow(digit, digits);
        num = Math.floor(num / 10);
    }

    return sum === original;
}

function isPrime(num) {
    if (num <= 1) return false;

    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function factorial(num) {
    if (num < 0) return "Not defined for negative numbers";

    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact *= i;
    }

    return fact;
}

function analyze() {
    var n = parseInt(document.getElementById("num").value);

    if (isNaN(n)) {
        document.getElementById("output").innerText =
        "Please enter a valid number";
        return;
    }

    var result = "";

    result += "Palindrome: " + (isPalindrome(n) ? "Yes" : "No") + "\n";
    result += "Armstrong: " + (isArmstrong(n) ? "Yes" : "No") + "\n";
    result += "Prime: " + (isPrime(n) ? "Yes" : "No") + "\n";
    result += "Factorial: " + factorial(n);

    document.getElementById("output").innerText = result;
}