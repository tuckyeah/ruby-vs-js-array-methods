'use strict';

let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

///////
// Code Along: reduce
// sum
let sumFibs = fibs.reduce(function(prev,curr){
  return prev + curr;
}, 0);

///////
// Lab: Fibonacci Calculations
//////
// product
let prodFibs = fibs.slice(1,fibs.length).reduce(function(prev,curr){
  return prev * curr;
}, 1);

// sum odd
let sumOdd = fibs.filter(function(val){
  return val % 2 !== 0;
})
.reduce(function(prev,curr){
  return prev + curr;
}, 0);

// prod even
let prodEven = fibs.filter(function(val){
  return val % 2 === 0 && val > 0;
})
.reduce(function(prev,curr){
  return prev * curr;
}, 1);
