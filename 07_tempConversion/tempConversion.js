const convertToCelsius = function(fahrenheit) {
  return roundOneDecimal(5*(fahrenheit-32)/9); 
};

const convertToFahrenheit = function(celsius) {
  return roundOneDecimal(9*celsius/5 + 32); 
};

function roundOneDecimal(number) {
  return Math.round(number*10)/10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
