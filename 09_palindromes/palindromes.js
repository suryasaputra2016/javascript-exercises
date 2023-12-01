const palindromes = function (text) {
    let lowerText = text.toLowerCase();
    lowerText = lowerText.replace(/[ ,.!?:;]/g,'');

    const length = lowerText.length;
    const halfLength = length/2;

    for(i=0;i<halfLength;i++) {
        if(lowerText[i] !== lowerText[length-1-i]) {
            return false
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
