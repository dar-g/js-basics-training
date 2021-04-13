/*
    Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
    Example string : 'the quick brown fox'
    Expected Output : 'The Quick Brown Fox '
*/

// Variant 1
function capitalizeStr (str) {
    if (typeof str === "string") {
        let splited = str.trim().split(' ');
        let trimmedArr = [];

        let capitalized = splited.map(item => {
            let firstLetter = item[0].toUpperCase();
            let croppedWord = item.slice(1).toLowerCase();
            return firstLetter + croppedWord;
        });

        let capitalizedStr = capitalized.join(' ');
        console.log (capitalizedStr);
        return capitalizedStr;
    } else {
        throw new Error('Not a string');
    }
}

// Variant 2
function capitalizedStr2 (str) {
    return str
        .trim()
        .split(' ')
        .reduce((accumulator, item) => {
            const updatedItem = item.toLowerCase().trim();
            const firstLetter = updatedItem.charAt(0).toUpperCase();
            const result = updatedItem.replace(updatedItem.charAt(0), firstLetter);

            accumulator += `${accumulator.length ? ' ' : ''}${result}`;
            return accumulator;
        }, '');
}

console.log(capitalizedStr2('Write a JavaScript function that accepts a string as a parameter'));

// capitalizeStr(' A promise is an object that may produce a single value some time in the future ');
