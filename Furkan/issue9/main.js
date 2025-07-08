let day = parseInt(prompt("What day u wanna learn:"));;
let dayName;
switch (day) {
    case 1:
        dayName= "Sunday";
        break;
    case 2:
        dayName = "Monday"; 
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday"
        break;

    case 5:
        dayName = "Thursday"  
        break;

    case 6:
        dayName = "Friday"
        break;

    case 7:
         dayName = "Saturday"  
         break;
    default:
        console.log("Invalid Day!")
}

console.log(dayName);
