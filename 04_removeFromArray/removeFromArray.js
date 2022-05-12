const removeFromArray = function (Ary, ...nums) {
    let args = [...nums];

    for (const arg of args) {
        for (let i = 0; i < Ary.length; i++) {
            if (arg === Ary[i]) {
                Ary.splice(i, 1);
            }
        }
    }
    return Ary;
};

// Do not edit below this line
module.exports = removeFromArray;
