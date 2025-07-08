let input = prompt("Enter a string:");
let labels = ["First", "Second", "Third", "Fourth", "Fifth"];

for (let i = 0; i < 5 && i < input.length; i++) {
    console.log(`${labels[i]} Characters: ${input.charAt(i)}`);
}