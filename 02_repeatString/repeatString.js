const repeatString = function (string, num) {
    let fullString = "";
    for (let i = 0; i < num; i++) {
        fullString += string;

    }
    if (num >= 0) {
        return fullString;
    } else {
        return 'ERROR';
    }

};

// Do not edit below this line
module.exports = repeatString;
