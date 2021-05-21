var readlineSync = require('readline-sync');
const playerName = readlineSync.question("May I have your name please? ");

const welcomeMessage = "Welcome " + playerName + " to the Escape Room Game Simulation!";
console.log(welcomeMessage);

let isAlive = true;
let hasKey = false;

while(isAlive == true){
    const menuID = readlineSync.keyIn('Press 1 to Put hand in hole \n Press 2 to Find the key \n Press 3 to Open the door \n', {limit: '$<1-3>'});
    if (menuID == 1){
        console.log("Game Over")
        isAlive = false;
        
    } else if (menuID == 2 && hasKey == false){
        console.log("Good job " + playerName + "you have found the key, you can now go to option 3.");
        hasKey = true;
        
    } else if (menuID == 2 && hasKey == true){
        console.log(playerName + "You have already found the key now go to option 3!");
       
    } else if (menuID == 3 && hasKey == false){
        console.log(playerName + " you dont have the key, go back to option 2!");
        hasKey = false;
        
    } else if (menuID == 3 && hasKey == true){
        console.log("CONGRATULATIONS!!" + playerName + "you have escaped the room succesfully. You WIN!!!");
        isAlive = false;
        
    }
}


