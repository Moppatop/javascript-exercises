const sumAll = function(numOne, numTwo) {
    if ((numOne < 0 || numTwo < 0)) {
        return "ERROR";
    } else if ((typeof(numOne) != "number") || typeof(numTwo)!="number") {
        return "ERROR";
    }
    const minNum = Math.min(numOne, numTwo);
    const maxNum = Math.max(numOne, numTwo);
    let sum = 0;

    for (let i = minNum; i <= maxNum; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
