//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const CHAR_SCORES = new Map([
  [["A","E","I","O","U","L","N","R","S","T"], 1], 
  [["D","G"], 2], 
  [["B","C","M","P"], 3], 
  [["F","H","V","W","Y"], 4], 
  [["K"], 5],
  [["J","X"], 8],
  [["Q","Z"], 10]
]);

const findKey = char => [...CHAR_SCORES.keys()].find(key => key.includes(char.toUpperCase()));

const getCharScore = char => CHAR_SCORES.get(findKey(char));

const countScore = (score, letter) => score + getCharScore(letter);

export const score = (word) => [...word].reduce(countScore, 0);
