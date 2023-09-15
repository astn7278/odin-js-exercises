const add = function (num1, num2) {
    return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;};

const sum = function (array) {
  return array.reduce((accum, current) => accum + current, 0);
};

const multiply = function (...args) {
  return args.reduce((accum, current) => accum * current, 1);
};

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};

//testing commit
