/*
    Make two functions, max and min, that take a(n) array of integers list as input and outputs,
    respectively, the largest and lowest number in that array.
*/

function defineBiggestNum (arr) {
    return Math.max(...arr);
}

function defineSmallestNum (arr) {
    return Math.min(...arr);
}

let arrOne = [78, 5, -89, 357];
let arrTwo = [[0], 1, 34];
let arrThree = [[-9], [1, 2], 50];
let arrFour = [];

console.log(defineBiggestNum(arrOne));
console.log(defineSmallestNum(arrOne));


