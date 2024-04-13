const removeFromArray = function(arr) {
    let newArr = arr;
    argCount = arguments.length;
    for (let i = 0; i < argCount; i++) {
        newArr = newArr.filter((valueOfIndex) => valueOfIndex !== arguments[i+1]);
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
