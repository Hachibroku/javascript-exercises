const reverseString = function(string) {
    let splitString = string.split("")
    let reverseArray = splitString.reverse()
    let result = reverseArray.join("")
    return result
};

// Do not edit below this line
module.exports = reverseString;
