alert("Welcome to the JavaScript Basics Quiz! Let's test your knowledge.");

let answer1 = prompt("Question 1:\nWhich is the correct way to declare a function in JavaScript?\n\nA) function myFunction() {}\nB) func myFunction() {}\n\nType 'A' or 'B':").toUpperCase();
if(answer1 === "A"){
  alert("Correct! Well done.");
  let answer2 = prompt("Question 2:\nWhat type of value is NaN in JavaScript?\n\nA) Number\nB) Undefined\n\nType 'A' or 'B':").toUpperCase();

  if (answer2 === "A") {
    alert("That's right! NaN stands for 'Not-a-Number', but it's still of type Number.");

    let answer3 = prompt("Question 3:\nWhat does the === operator do in JavaScript?\n\nA) Compares both value and type\nB) Compares values only\n\nType 'A' or 'B':").toUpperCase();

    if (answer3 === "A") {
      alert("Excellent! === checks both value and type.");
    } else {
      alert("Not quite. === is the strict equality operator, which compares both value and type.");
    }

  }else {
    alert("Incorrect. NaN is actually of type Number in JavaScript.");
  }
}else {
  alert("Oops! 'func' is not a valid keyword in JavaScript. Functions are declared using the 'function' keyword.");
}
alert("Thanks for taking the quiz! Keep learning and practicing JavaScript.");
