// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function
const pAequorFactory = (spicemenNum, dna) => {
  return {
    spicemenNum,
    dna,
    mutate() {
      const randBase15 = Math.floor(Math.random() * 16);
      const randBase15Char = dna[randBase15];
      let newBase ="";

      while (!newBase) {
        let randBase = returnRandBase();
        if (randBase15Char !== randBase) newBase += randBase;
      }
      this.dna[randBase15] = newBase;
    },
    compareDNA(pAequor) {
      let counter = 0;
      console.log(`Passed pAequor:  ${pAequor}`);
      console.log(`Current pAequor: ${this.dna}`);
      for(let i = 0; i < 15; i++){
        if(pAequor[i] === this.dna[i]) counter += 1;
      }
      console.log(`There is a ${(counter/15*100).toFixed(1)}% of common DNA's`)
    }
  }
}

const randDNA = mockUpStrand();
const myDna1 = pAequorFactory(1, mockUpStrand());
myDna1.compareDNA(randDNA);

