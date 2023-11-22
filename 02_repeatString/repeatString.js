const repeatString = function(text, duplication) {
    if (duplication<0) {
        return 'ERROR'
    }

    let repeatedText=""

    for(let i=0; i<duplication ; i++) {
        repeatedText += text;
    }

    return repeatedText;
};

// Do not edit below this line
module.exports = repeatString;
