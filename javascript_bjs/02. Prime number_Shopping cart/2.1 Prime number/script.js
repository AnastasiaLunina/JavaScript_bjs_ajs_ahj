function primeChecker(number) {
    let isPrime = true;
    // check if number is equal to 1
    if (number === 1) {
        return false;
    }
    // check if number is greater than 1
    else if (number > 1) {
        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            return true;
        } else {
            return false;
        }
    }
    // check if number is less than 1
    else {
        return false;
    }
}

// function creating array of prime numbers, length of array == numbersQty
function getPrimeNumbersArray(numbersQty) {
    let numbersArray = []
    let number = 2;
    while (numbersArray.length < numbersQty) {
        if (primeChecker(number) == true) {
            numbersArray.push(number);
        }
        ++number
    }
    return numbersArray
}

function getPrimeArray() {
    let numbersQty = +process.argv[2];

    if (isNaN(numbersQty) || numbersQty == undefined) {
        console.log('Wrong input');
        return;
    } 
    console.time()
    console.log(getPrimeNumbersArray(numbersQty));
    console.timeEnd()
}


getPrimeArray(1000)

