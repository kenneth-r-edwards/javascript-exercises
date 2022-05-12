const reverseString = function (string) {
    strAry = Array.from(string);
    revStrAry = strAry.reverse();
    revStr = revStrAry.join("");
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
