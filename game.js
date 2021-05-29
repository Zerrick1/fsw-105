const readlineSync = require('readline-sync');

const name = readlineSync.question('What is your name? ');

readlineSync.question('Hello ' + name + ', Welcome to The Dungeon. You will fight to make it out The Dungeon and find the treasure. Press enter to enter The Dungeon.');

const monsters = ['Gobllin', 'Skeleton', 'Slime', 'Devil'];
const treasure = ['Gold', 'Diamonds', 'Potions', 'Lengendary Sword'];
var prize = []
let userHealth = 40;
const options = ['Walk', 'Exit', 'Print'];
let pickUp = treasure[Math.floor(Math.random()*treasure.length)];

function game(){
    const attackPower = Math.floor(Math.random() * (5 - 4 + 3) + 5);
    const monster = monsters[Math.floor(Math.random() * monsters.length)];
    let monstersHealth = 40;
    const monstersPower = Math.floor(Math.random() * (5 - 3 + 2) + 5);

    const index = readlineSync.keyInSelect(options, 'Whats nexxxt?');

    if (options[index] == 'Exit'){
        return userHealth = 0;
    } else if (options[index] == 'Print'){
        console.log(name + ': \n' + userHealth + '/nTreasure: ' + pickUp);
    } else if (options[index] === 'Walk'){
        let key = Math.random();
        if (key <= .3){
            console.log('Walking');
        } else if (key > .3){
            console.log(monster + ' apeared.');

            while(monstersHealth > 0 && userHealth > 0){

                const user = readlineSync.question('Whats next? Pres "r" to run away "a" to attack monsters: ');

                switch (user){
                    case 'r':
                        const run = Math.random();
                        if(run < .5){
                            console.log('Before you can run ' + monster + 'attack you: ' + monstersPower)
                        }else {
                            console.log('You run away.');
                            break;
                        }

                    case 'a':
                        monstersHealth -= attackPower;
                        console.log('You attacked ' + monster + ' with ' + attackPower + ' attack power' );
                        
                        userHealth -= monstersPower;
                        console.log('Monster just attacked you with: ' + monstersPower + ' attack power');

                        if (monstersHealth <= 0){
                            console.log('You defeated ' + monster + '.\n' + monster + ' left: ' + pickUp);
                            let loot = Math.random();
                            if (loot <= .3){
                                prize.push(pickUp);
                            }
                        } else if(userHealth <= 0){
                            console.log(monster + ' has killed you. You have failed. ');
                        }
                }
            }
        }
    }
}

while(userHealth > 0){
    userRestore = function(){
        userActive = true;
        userHealth = 40;
    };
    userRestore();
    game();
}