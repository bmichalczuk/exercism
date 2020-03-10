//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
  const isYearEvenlyDivisible = (num) => year % num === 0;
  return !(isYearEvenlyDivisible(100) && !isYearEvenlyDivisible(400)) && isYearEvenlyDivisible(4);
};