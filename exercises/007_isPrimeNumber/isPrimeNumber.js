/*
    Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
    Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

    Prime numbers:
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
    43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
    101, 103, 107, 109, 113, 127, 131, 137, 139, 149,
    151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199
*/

console.log(isPrimeNumber(107));
// isPrimeNumber(5);

function isPrimeNumber(num) {
    if (typeof num !== 'number') {
        throw new Error(`Expected input to be number, but got ${typeof num}`);
    } else if (num <= 1) {
        return false;
    }

    for(let i = 2; i < num; i++) {
        if (!(num % i)) {
            return false;
        }
    }
    return true;
}

