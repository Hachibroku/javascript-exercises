const removeFromArray = function(array, ...args) {
    // search array of instances of removalCandidate
    // return index and length of removalCandidate(s)
    // result = array.splice(index, length)
    // return result
    return array.filter(element => !args.includes(element))
};

// Do not edit below this line
module.exports = removeFromArray;
