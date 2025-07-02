let price1 = parseFloat(prompt("Enter the price of item 1:"));
let price2 = parseFloat(prompt("Enter the price of item 2:"));
let price3 = parseFloat(prompt("Enter the price of item 3:"));

let quntity1 = parseInt(prompt("Enter the quantity of item 1:"));
let quntity2 = parseInt(prompt("Enter the quantity of item 2:"));
let quntity3 = parseInt(prompt("Enter the quantity of item 3:"));


let total1 = price1 * quntity1;
let total2 = price2 * quntity2;
let total3 = price3 * quntity3;

let groundTotal = total1+total2+total3;

let taxtRate = 5;
let taxAnount = groundTotal * (taxtRate/100);
let totalAfterTax = taxAnount + groundTotal;

console.log(`Total amount included tax is ${totalAfterTax}`);

// we can also rewrite this issue with for loop.

// let prices = [];
// let quantities = [];
// let total = 0;

// for (let i = 0; i < 3; i++) {

//     let price = parseFloat(prompt(`Enter the price of the item ${i+1}.`))
//     let quantity = parseInt(prompt(`Enter the qantity of the item ${i+1}`))
    
//     prices.push(price);
//     quantities.push(quantity);

//     total += price * quantity;
// }

// let taxtRate = 5;
// let taxAnount = total * (taxtRate/100);
// let totalAfterTax = taxAnount + total;

// console.log(`Subtotal: ${total} , Sales Tax: ${taxAnount} , Total With Tax ${totalAfterTax}`);