/*
    Write a JavaScript function that generates all combinations of a string.
    Example string : 'dog'
    Expected Output : d,do,dog,o,og,g
*/

function strCombinations(str, startIndex= 0, result = []) {

    for (let i = startIndex; i <= str.length; i++) {
        if (i !== str.length) {
            const subs = str.slice(startIndex, i + 1);
            if (!result.includes(subs)) {
                result.push(subs);
            }
        } else {
            strCombinations(str, startIndex + 1, result);
        }
    }

    return result;
}

console.log(strCombinations('parrot'));
