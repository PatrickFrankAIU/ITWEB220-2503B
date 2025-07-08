let accountBalance = 1500;
let depositAmount = parseFloat(prompt("How much many would you like to deposit?"));

if (isNaN(depositAmount) || depositAmount < 0) {
    console.log("Invalid deposit amount.");
  } else {
    accountBalance += depositAmount;
    console.log(`Your new balance is: $ ${accountBalance}`);
  }