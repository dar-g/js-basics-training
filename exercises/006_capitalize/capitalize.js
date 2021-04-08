/*
    Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
    Example string : 'the quick brown fox'
    Expected Output : 'The Quick Brown Fox '
*/

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
        console.log(str);
        return str;
    }
}

capitalizeStr(' A promise is an object that may produce a single value some time in the future ');
