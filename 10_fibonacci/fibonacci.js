const fibonacci = function(number) {
    let first = 1
    let second = 1
    if(number <= 0) {
        return 'OOPS';
    } else if(number<3) {
        return second;
    }
    
    for(let i=3 ; i<=number ; i++) {
        [first, second] = [second, first+second];
    }

    return second;
};

// Do not edit below this line
module.exports = fibonacci;
