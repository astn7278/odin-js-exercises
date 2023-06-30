const convertToCelsius = function(f) {
  f = ((f - 32) * 5 / 9);
  rounded = Math.round(f * 10) / 10
  return rounded;
};

const convertToFahrenheit = function(c) {
  c = (c * 1.8 + 32);
  rounded = Math.round(c * 10) / 10
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


/*

Fahrenheit to Celsius
x °F ≘ (x − 32) × 5/9 °C 

Celsius to Fahrenheit
x °C ≘ (x × 9/5 + 32) °F

*/

