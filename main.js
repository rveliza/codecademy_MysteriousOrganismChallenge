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
    },
    willLikelySurvive() {
      const CGs = this.dna.filter(a => a === 'C' || a === 'G');
      const survRate = (CGs.length/15*100).toFixed(1);
      return survRate > 60 ? true : false;
    }
  }
}


const instances30 = [];
let id = 101;
while (instances30.length < 30) {
  const dnaRand = pAequorFactory(id, mockUpStrand());
  if (dnaRand.willLikelySurvive()) {
    instances30.push(dnaRand.dna);
    id++;
  };
}

console.log(instances30.length)
