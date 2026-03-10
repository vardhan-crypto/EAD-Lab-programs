function bankAccount(initialBalance) {
  let balance = initialBalance;

  function deposit(amount) {
    balance = balance + amount;
    console.log("Balance: " + balance);
  }

  function withdraw(amount) {
    if (amount <= balance) {
      balance = balance - amount;
      console.log("Balance: " + balance);
    } else {
      console.log("Insufficient funds");
    }
  }

  return {
    deposit: deposit,
    withdraw: withdraw
  };
}

let account = bankAccount(1000);
account.deposit(500);
account.withdraw(200);