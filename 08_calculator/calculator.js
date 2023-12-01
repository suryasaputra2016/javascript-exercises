const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	return numArray.reduce((sum, number)=>(sum + number), 0);
};

const multiply = function(numArray) {
  return numArray.reduce((product, number)=>(product * number), 1);
};

const power = function(basis, exponent) {
	return basis ** exponent;
};

const factorial = function(number) {
  let factorial = 1;
	for(let i = 1; i<= number; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
