const removeFromArray = function(initialArray, ...tobeRemoved) {
    let finalArray = [];
    for (item of initialArray) {
        if (tobeRemoved.includes(item)) {
            continue;
        }
        finalArray.push(item);
    }

    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
