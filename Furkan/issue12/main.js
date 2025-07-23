// Introduction
alert("Welcome to the Spirit Animal Quiz!");
alert("Answer the following questions to discover your spirit animal.");

// Question 1
let timeOfDay = prompt("Do you prefer 'morning' or 'night'?").toLowerCase();

let spiritAnimal = "";

if (timeOfDay === "morning") {
  let morningDrink = prompt("Do you prefer 'coffee' or 'tea'?").toLowerCase();

  if (morningDrink === "coffee") {
    let energyLevel = prompt("Do you feel energetic or calm in the morning?").toLowerCase();

    if (energyLevel === "energetic") {
      spiritAnimal = "Cheetah";
      alert("Your spirit animal is the **Cheetah**! \nFun fact: Cheetahs are the fastest land animals on Earth!");
    } else {
      spiritAnimal = "Deer";
      alert("Your spirit animal is the **Deer**! \nFun fact: Deer are gentle, alert, and quick to adapt to surroundings.");
    }

  } else if (morningDrink === "tea") {
    let social = prompt("Do you prefer quiet mornings or social mornings? (quiet/social)").toLowerCase();

    if (social === "quiet") {
      spiritAnimal = "Owl";
      alert("Your spirit animal is the **Owl**! \nFun fact: Owls are wise, calm, and observant.");
    } else {
      spiritAnimal = "Dog";
      alert("Your spirit animal is the **Dog**! \nFun fact: Dogs are loyal companions and love being part of a pack.");
    }
  }

} else if (timeOfDay === "night") {
  let nightActivity = prompt("Do you enjoy 'stargazing' or 'night walks'?").toLowerCase();

  if (nightActivity === "stargazing") {
    let dreamer = prompt("Do you consider yourself a dreamer or a realist? (dreamer/realist)").toLowerCase();

    if (dreamer === "dreamer") {
      spiritAnimal = "Wolf";
      alert("Your spirit animal is the **Wolf**! \nFun fact: Wolves are intuitive, loyal, and value deep connections.");
    } else {
      spiritAnimal = "Panther";
      alert("Your spirit animal is the **Panther**! \nFun fact: Panthers are powerful, mysterious, and confident.");
    }

  } else if (nightActivity === "night walks") {
    let fear = prompt("Do you fear the dark? (yes/no)").toLowerCase();

    if (fear === "yes") {
      spiritAnimal = "Fox";
      alert("Your spirit animal is the **Fox**! \nFun fact: Foxes are clever, adaptable, and love to explore.");
    } else {
      spiritAnimal = "Bat";
      alert("Your spirit animal is the **Bat**! \nFun fact: Bats use echolocation to navigate — they're masters of the dark!");
    }
  }

} else {
  alert("Invalid input. Please restart the quiz and choose 'morning' or 'night'.");
}
