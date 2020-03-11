//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const gigasecond = (startDate, milisecondsToPass = 1e12) => {
  return new Date(startDate.getTime() + milisecondsToPass);
};