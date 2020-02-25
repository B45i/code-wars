// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
// Complementary DNA

const dict = { A: "T", T: "A", C: "G", G: "C" };
const DNAStrand = dna => dna.split("").map(x => dict[x]).join("")

console.log(DNAStrand("AAAA"))
console.log(DNAStrand("ATTGC"))
console.log(DNAStrand("GTAT"))