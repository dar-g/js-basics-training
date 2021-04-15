/*
    Write a JavaScript function which will take an array of numbers stored
    and find the second lowest and second greatest numbers, respectively.
    Sample array : [1,2,3,4,5]
    Expected Output : 2,4
*/

function lowestGreatest (arr) {
    let sorted = arr.sort((a, b) => a - b);
    let lowest2 = sorted[1];
    let greatest2 = sorted[sorted.length - 2];
    let result = [];

    result.push(lowest2, greatest2);

    return result;
}

console.log(lowestGreatest([1, 46, 32, -7, 8]));
