const sumAll = function (one, two) {
    let start = (one < two) ? one : two;
    let end = (one < two) ? two : one;


    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    if ((one < 0) || (two < 0)) {
        return 'ERROR';
    }

    if ((typeof (one) !== 'number') || (typeof (two) !== 'number')) {
        return 'ERROR';

    };
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
