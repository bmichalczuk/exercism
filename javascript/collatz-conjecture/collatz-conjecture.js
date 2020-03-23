//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const steps = (n, stepsCount = 0) => {
  if(n < 1) {
    throw new Error('Only positive numbers are allowed');
  }
  if(n === 1) {
    return stepsCount;
  }
  stepsCount++
  return n % 2 === 0 ? steps(n/2, stepsCount) : steps(n * 3 + 1, stepsCount);
};


/*
Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is
odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely.
The conjecture states that no matter which number you start with, you will
always reach 1 eventually.

Given a number n, return the number of steps required to reach 1.
*/