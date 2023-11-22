const sumAll = function(firstNumber, secondNumber) {
    if(typeof(firstNumber) !== 'number' || typeof(secondNumber) !== 'number') {
        return 'ERROR';
    }

    let smallNumber = min(firstNumber, secondNumber);
    if(smallNumber<0) {
        return 'ERROR';
    }

    let bigNumber = max(firstNumber, secondNumber);

    let sum = 0;

    for(let i = smallNumber; i<= bigNumber; i++) {
        sum += i;
    }

    return sum;
};


function min(firstNumber, secondNumber) {
    if (firstNumber < secondNumber) {
        return firstNumber;
    } else {
        return secondNumber;
    }
}

function max(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return firstNumber;
    } else {
        return secondNumber;
    }
}

// Do not edit below this line
module.exports = sumAll;
