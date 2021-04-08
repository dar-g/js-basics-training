/*
    Create a function which will take a string (word) and return true if the given word is a palindrome and false if not.
*/

function isPalindrome(str) {
    let strToLowerCase = str.toLowerCase();
    let halfOfStr = Math.floor(strToLowerCase.length / 2);
    let arr = strToLowerCase.split('');
    let reversedArr = strToLowerCase.split('').reverse();
    console.log(arr, reversedArr);

    for(let i = 0; i < halfOfStr; i++) {
        if (arr[i] !== reversedArr[i]) {
            return false;
        }
    }

    return true;
}

isPalindrome('racecar');
