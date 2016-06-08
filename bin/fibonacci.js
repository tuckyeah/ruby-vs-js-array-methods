'use strict';

let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
console.log('fibs is', fibs);

// let twiceFibs = fibs.map((fib) => {
//   return fib * 2;
// });
// console.log('twiceFibs is', twiceFibs);

const sum = (a, b) => {
  return a + b;
};

let sumFibs = fibs.reduce(sum, 0);
console.log('sumFibs is', sumFibs);

let fibsFromOne = fibs.slice(1, fibs.length);
console.log('fibsFromOne is', fibsFromOne);

const product = (a, b) => {
  return a * b;
};

let productFibs = fibsFromOne.reduce(product, 1);
console.log('productFibs is', productFibs);

const isOdd = (n) => {
  return n % 2 !== 0;
};

const isEven = (n) => {
  return !isOdd(n);
};

let sumFibsOdd = fibs.filter(isOdd).reduce(sum, 0);
console.log('sumFibsOdd is', sumFibsOdd);

let productFibsEven = fibsFromOne.filter(isEven).reduce(product, 1);
console.log('productFibsEven is', productFibsEven);
