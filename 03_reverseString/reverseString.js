const reverseString = function(strToReverse) {
    revString = strToReverse.split("").reverse().join("");
    /*
    splits revString into an array "hello" -> ["h","e","l","l","o"]
    reverses the order of the array
    joins the array back into a string with no seperator
    */
   return revString;
};

// Do not edit below this line
module.exports = reverseString;