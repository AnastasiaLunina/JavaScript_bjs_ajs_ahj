import time

def prime_checker(number):
    is_prime = True
    for i in range(2, number):
        if number % i == 0:
            is_prime = False
    if is_prime:
        return True
    else:
        return False

print(prime_checker(5))

start = time.time()

def getPrimeNumbersList(numbersQty):
    numbersList = []
    number = 2
    while len(numbersList) < int(numbersQty):
        if prime_checker(number) == True:
            numbersList.append(number)
        number += 1
    return numbersList

print(getPrimeNumbersList(1000))

end = time.time()
print(end - start)