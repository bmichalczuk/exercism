//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DnaRnaNucleotides = new Map([["G", "C"],["C","G"],["T","A"],["A","U"]]);

export const toRna = ([...dna]) => dna.map(dnaNucleotide => DnaRnaNucleotides.get(dnaNucleotide)).join("");
