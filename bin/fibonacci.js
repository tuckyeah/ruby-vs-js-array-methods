'use strict';

let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

const sum = (a, b) => {
  return a + b;
};

// sum of all the elements of the fibs array
let sumFibs = fibs.reduce(sum, 0);

console.log('The sum of the first ten fibonacci numbers is ', sumFibs);


// const notZero = (number) => {
//   return number !== 0;
// };
//
// let prodFibs = fibs.filter(notZero).reduce(product, 1)
// product of all elements in fibs array
const product = (a, b) => {
  if (a > 0 && b > 0) {
    return a * b;
  } else {
    return b * 1;
  }
};

let prodFibs = fibs.reduce(product, 1);

console.log('The product of the first ten fibonacci numbers is ', prodFibs);

// sum of odd elements of fibs
let isOdd = function(index) {
  return index % 2 !== 0;
};

let oddFibs = fibs.filter(isOdd).reduce(sum, 0);

console.log("The sum of the odd elements of fibonacci is ", oddFibs);

let isEven = function(index) {
  return index % 2 === 0;
};

let evenFibs = fibs.filter(isEven).reduce(product, 1);

console.log("The product of the even elements of fibonacci is", evenFibs);

module.exports = {
  sumFibs,
};
