/*
    Implement a function which convert the given boolean value into its string representation.
*/

function booleanToString (boolean) {
    if (typeof boolean === "boolean") {
        let booleanStr = boolean.toString();
        console.log(booleanStr);
        return booleanStr;
    } else {
        throw new Error(`${typeof boolean} is not a boolean`);
    }
}

booleanToString(false);

