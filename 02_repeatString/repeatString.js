const repeatString = function(strToRepeat, numRepeats) {
    let outputString="";
    for (let i = 0; i < numRepeats; i++){
        outputString += strToRepeat;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
