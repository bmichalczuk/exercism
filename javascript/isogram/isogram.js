//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (word) => {
  
  const  formatedWord= word
    .split("")
    .filter(char => char !==" " && char !== "-")
    .map(char => char.toLowerCase());
  
    return formatedWord.length === new Set(formatedWord).size;
};
