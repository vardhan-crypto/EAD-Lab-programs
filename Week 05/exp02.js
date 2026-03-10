function createPasswordManager() {
  let password = "";

  function setPassword(newPassword) {
    password = newPassword;
    console.log("The password has been updated.");
  }

  function validatePassword(input) {
    if (input === password) {
      return true;
    } else {
      return false;
    }
  }

  function resetPassword() {
    password = "";
    console.log("The password has been reset to empty.");
  }

  return {
    setPassword: setPassword,
    validatePassword: validatePassword,
    resetPassword: resetPassword
  };
}

const manager = createPasswordManager();

manager.setPassword("1234");

let isCorrect = manager.validatePassword("1234");
console.log("Is the password correct? " + isCorrect);

let isWrong = manager.validatePassword("wrong-pass");
console.log("Is the password correct? " + isWrong);

manager.resetPassword();