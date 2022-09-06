// Creating an interface to interact with a user with Readline Module
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

// Generating a random number
let min=1;
let max=10; 
let randomNumber = Math.floor(Math.random() * (+max - +min)) + (+min);

// Creating logging function with File Server module
const fs = require('fs');

async function writeToFile(text) {
  await fs.promises.appendFile("./log", text, {
    encoding: 'utf8'
  });

//   console.log(text);
}

function getDate() {
    let dateInMs = Date(Date.now());
    // Converting the number of millisecond
    // in date string
    let date = dateInMs.toString();
    return date;
}

async function getUserInput() {
    let promise = new Promise(function(resolve, reject) {
        rl.question('Enter a number between 1 and 10: ', (input) => {
            let number = input;
            rl.pause();
            return resolve(number); 
            
        });  
    });
    return await promise;
}

async function play() {
    // Setting attempts counting to 0
    let counter = 0;
    while(true) {
        let input = await getUserInput();
        let userNumber = +input;
    
        if(isNaN(userNumber) || userNumber < min || userNumber > max) {
            let text = 'Wrong input\n';
            writeToFile(getDate() + " " + text);
            console.log(text);
            continue;
        }

        counter++;
    
        if(userNumber === randomNumber) {
            let text = `You guessed it! The number is: ${randomNumber}. Attempts used: ${+counter}\n`;
            writeToFile(getDate() + " " + text);
            console.log(text);
            break;
        }
    
        if(userNumber > randomNumber) {
            let text = `Too high! You entered: ${userNumber}. Attempt #${counter}\n`;
            writeToFile(getDate() + " " + text);
            console.log(text);
        } else {
            let text = `Too low! You entered: ${userNumber}. Attempt #${counter}\n`;
            writeToFile(getDate() + " " + text);
            console.log(text);
        }
    }
    rl.close();
}

play();