let loyaltyPoints = parseInt(prompt("Enter your loyalty points:"));
let purchaseAmount = parseFloat(prompt("Enter your purchase amount:"));

if (loyaltyPoints > 50) {
  
    if (loyaltyPoints > 100) {
      alert("You qualify for the standard offer.");
  
      if (loyaltyPoints > 150 && purchaseAmount > 200) {
        alert("You also qualify for the premium offer!");
      }
  
    } else {
      alert("You are eligible for a special offer, but not the standard one.");
    }
  
  } else {
    alert("Sorry, you do not qualify for any special offers.");
  }

