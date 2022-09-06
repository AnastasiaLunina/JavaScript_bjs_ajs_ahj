function getPasswordChecker(password) {
    
    return function(guess) {
        if (password === guess) {
            return true;
        }
        return false;
    };
}

const check = getPasswordChecker('hello');

console.log(check('hello'));
console.log(check('howareyou'));
console.log(check('bye'));