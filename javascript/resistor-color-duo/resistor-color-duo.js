//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a

// convenience to get you started writing code faster.
//
export const decodedValue = (bandsColors) => {
  const RESISTORS_COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
  const firstTwoBandsCode = bandsColors
    .slice(0,2)
    .map(color => RESISTORS_COLORS.indexOf(color))
    .join("");
    return parseInt(firstTwoBandsCode);
};
