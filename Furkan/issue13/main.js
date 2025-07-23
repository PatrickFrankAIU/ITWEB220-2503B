    let path = prompt("You wake up in a dark, mysterious cave. You have no memory of how you got there. You see two paths: one to the LEFT and one to the RIGHT.\n\nWhich path do you choose? (Type 'left' or 'right')").toLowerCase();
    let outcome = "";

    if (path === "left") {
        alert("You encounter a lake!!!");
        let pass = prompt("Would you like to swim or walk around it(Type 'swim' or 'walk')").toLowerCase();

        if (pass === "swim") {
            alert("You bravely swim across the lake and discover a hidden treasure chest filled with ancient gold!");
            outcome = "You escaped with a hidden treasure from the lake.";
        }else if (pass === "walk") {
            alert("You carefully walk around the lake and discover an abandoned campsite with useful supplies.");
            outcome = "You escaped with useful supplies from the campsite.";
        } else {
            alert("You hesitate too long and get lost in the fog rising from the lake.");
            outcome = "You wandered for hours before finally finding the exit, empty-handed.";
          }
    }else if(path === "right"){
        let tunnelDecision = prompt("You take the right path and find a narrow tunnel carved into the wall.\nDo you want to EXPLORE the tunnel or CONTINUE on the path? (Type 'explore' or 'continue')").toLowerCase();
        if (tunnelDecision === "explore") {
            alert("You crawl through the tunnel and discover a secret chamber containing an old map of the cave.");
            outcome = "You escaped with a map that might help others one day.";
        }else if(tunnelDecision === "continue"){
            alert("You follow the path and encounter a friendly hermit who offers you guidance and wisdom.");
            outcome = "You escaped with guidance from a wise hermit.";
        }else {
            alert("You become confused in the dim light and wander in circles.");
            outcome = "You eventually escape, but learned nothing new from the experience.";
        }
    }else {
        alert("Unable to choose a path, you sit in confusion as time passes. Eventually, you stumble upon a hidden exit.");
        outcome = "You escaped the cave by luck alone.";
    }
    alert("Your adventure concludes. " + outcome + "\n\nWhatever path you took, you have survived the mystery of the cave and emerged with new experiences.");
