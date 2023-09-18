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

const power = function (num1, exp1) {
  return num1 ** exp1;
};

const factorial = function (n) {
  let myArray = [];
  for (let i = n; i > 0; i--){
    myArray.push(i);
  };
  return myArray.reduce((accum, current) => accum * current, 1);
};

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
