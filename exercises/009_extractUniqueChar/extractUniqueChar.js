/*
    Write a JavaScript function to extract unique characters from a string.
    Example string : "thequickbrownfoxjumpsoverthelazydog"
    Expected Output: "thequickbrownfxjmpsvlazydg"
*/

function extractUniqueChar (str) {
    let arr = str.trim().split('');
    let filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!(filteredArr.includes(arr[i]))) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr.join('');
}

console.log(extractUniqueChar('thequickbrownfoxjumpsoverthelazydog'));
