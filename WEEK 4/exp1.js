var attempts = 3;

function validateLogin() {

    var user = document.getElementById("username").value.trim();
    var pass = document.getElementById("password").value.trim();
    var message = document.getElementById("message");
    var loginBtn = document.getElementById("loginBtn");


    if (user === "") {
        message.innerText = "Username must not be empty";
        message.style.color = "red";
        return;
    }


    if (pass.length < 6) {
        message.innerText = "Password must be at least 6 characters";
        message.style.color = "red";
        return;
    }


    var correctUser = "admin";
    var correctPass = "123456";

    if (user === correctUser && pass === correctPass) {
        message.innerText = "Login Successful!";
        message.style.color = "green";
    }
    else {
        attempts--;
        message.innerText = "Wrong credentials! Attempts left: " + attempts;
        message.style.color = "red";

        if (attempts === 0) {
            loginBtn.disabled = true;
            message.innerText = "Account locked! No more attempts allowed.";
        }
    }
}