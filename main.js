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
    },
    complementStrand(){
      const complementDNA = [];
      this.dna.forEach(dna => {
        if(dna === 'A') complementDNA.push('T');
        if(dna === 'T') complementDNA.push('A');
        if(dna === 'C') complementDNA.push('G');
        if(dna === 'G') complementDNA.push('C');
      });
      return complementDNA;
    }
  }
}

// Step 3, pAequorFactory() => object 
const myDNA = pAequorFactory(100, mockUpStrand())
console.log(`\nStep3: \nMy DNA object is specimen: 
${myDNA.spicemenNum}, DNA: ${myDNA.dna}\n\n`);

// Step 4, mutate() => mutated dna.
myDNA.mutate()
console.log(`Step 4:\nMy mutated DNA is now: 
${myDNA.dna}\n\n`);

// Step 5, compareDNA(pAequor) => prints a message with the % the two DNA have in common.
const randDNA = mockUpStrand();
console.log('Step 5:');
myDNA.compareDNA(randDNA);

// Step 6, willLikelySurvive() => return true if survival rate > 60%
const willSurvive = myDNA.willLikelySurvive();
console.log(`\n\nStep 6:\nThe odds for my DNA are to survive? ${willSurvive}\n\n`);

// Step 7, Create 30 instaces with >  60% of survival rate.
const instances30 = [];
let id = 101;
while (instances30.length < 30) {
  const dnaRand = pAequorFactory(id, mockUpStrand());
  if (dnaRand.willLikelySurvive()) {
    instances30.push(dnaRand.dna);
    id++
  };
}

console.log(`Step 7:\nWe have created ${instances30.length} instances of pAquor that will survive.\n\n`);


// Step 9(a)
const complementary = myDNA.complementStrand();
console.log(`Step 9.1:\nThe complementary DNA is:
${complementary}\n\n`);
