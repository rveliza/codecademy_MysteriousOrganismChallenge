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
    }
  }
}

const myDna1 = pAequorFactory(1, mockUpStrand());


