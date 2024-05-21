const sumAll = function(num1, num2) {
    console.log(num1.t)
    if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR"
    }
    else if (num1 < 0 || num2 < 0) {
        return "ERROR"
    }
    else if (num1 > num2) {
        let res = 0
        for (i = num2; i < num1 + 1; i++) {
            res += i
        }
        return res  
    }
    else {
        let res = 0
        for (i = num1; i < num2 + 1; i++) {
            res += i
        }
        return res    
    }
};

// Do not edit below this line
module.exports = sumAll;
