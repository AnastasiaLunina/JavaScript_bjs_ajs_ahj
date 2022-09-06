while (true) {

const number = Math.floor(Math.random()*1000);
const userGuess = prompt('Please enter a number between 0 and 999')

if (userGuess === 'q') {
    alert('That was fun! 👋');
    break
} else if (isNaN(userGuess) && (userGuess !== 'q') || (userGuess < 0 || userGuess > 999) || (userGuess === '')) {
    alert('Wrong input! 😭' );
} else if (userGuess == number) {
    alert('You got it! 🥳');
} else if (userGuess > number) {
    alert('Too big! 🙄');
} else if (userGuess < number) {
    alert('Too small! 🙄');
}       
}