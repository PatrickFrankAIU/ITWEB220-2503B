let trafficLight = ["red", "green", "yellow", "blinking", "none"];
let timeOfDay = ["day", "night"];

let light = trafficLight[Math.floor(Math.random() * trafficLight.length)];
let time = timeOfDay[Math.floor(Math.random() * timeOfDay.length)]

let advice = "";

switch (light) {
    case "red":
        advice = "STOP!";
        break;
    case "green":
        advice = "GO!";
        break;
    case "yellow":
        advice = "SLOW DOWN!";
        break;
    case "blinking":
        switch (time) {
            case "day":
                advice = "Proceed with caution";
                break;
        
            case "night":
               advice = "Stop, then proceed with caution";
                break;
        }
        break;
    case "none":
        switch (time) {
            case "day":
                advice = "Stop, then proceed when safe";
                break;
        
            case "night":
               advice = "Use the light as a stop sign";
                break;
        }
        break;
}
console.log("Traffic light is:", light);
console.log("Time of day is:", time);
console.log("Advice to driver:", advice);