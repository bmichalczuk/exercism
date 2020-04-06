//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const ALPHABET = [..."abcdefghijklmnoprstuvwxyz"];

export const isPangram = (str) => {
    if(!str) {
      return false;
    }
    return ALPHABET.every((char) => str.toLowerCase().includes(char));
}
