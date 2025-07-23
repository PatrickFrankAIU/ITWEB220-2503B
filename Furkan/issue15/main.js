function positiveNegative(){
    let number = Number(prompt("type a number"));
    if (isNaN(number)) {
        console.log("That is not a valid number.");
      }else{
        if (number < 0 ){
            console.log("number is negative") ;
        } else if (number > 0){
            console.log("number is positive");
        }else{
            console.log("number is zero")
        }
      }
    
}
positiveNegative();

function compareNums(){
    let num1 = prompt("what is the first number you wanna compare ?").toLowerCase();
    let num2 = prompt("what is the second number you wanna compare ?").toLowerCase();

    if (num1 > num2){
        console.log(`${num1} is larger than ${num2}`);
    }else{
        console.log(`${num2} is larger than ${num1}`);
    }
}
compareNums();