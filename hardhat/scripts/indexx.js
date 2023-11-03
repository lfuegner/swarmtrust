// scripts/index.js
const { ethers } = require("hardhat");
// interacting with the smart contract works just like doploying with the smart contract worked. it takes the account defined in hardhatconfig.js and interacts through this account. 
async function main () { // boiletplate function 


const address = '0x071586BA1b380B00B793Cc336fe01106B0BFbE6D';
const DC = await ethers.getContractFactory('SWRMPPOC');
const dc = await DC.attach(address);



const [owner, addr1, addr2, hacker] = await ethers.getSigners(); // Hardhat only code: Array of adresses are loaded. used by dc.connect

await dc.connect(owner).mintOwner(3);
await dc.connect(owner).flipMintPaused()

var hcp;

for (i=0;i<200;i++){
console.log("minting ID :"+i)
await dc.connect(owner).mint()


if((i%2)==0){
  hcp=await dc.connect(owner).readEvenHcp();
  console.log("Even roll was "+await dc.connect(owner).readRoll())
  console.log("Even HCP IS :"+hcp)
}
else{
  hcp=await dc.connect(owner).readOddHcp();
  console.log("Odd roll was "+await dc.connect(owner).readRoll())
  console.log("ODD HCP IS :"+hcp)
}
}




for (j=0;j<200;j++){

let mem=await dc.connect(owner).readMembers(j);
let col=await dc.connect(owner).readColors(j);
let luck=await dc.connect(owner).readLucky(j);
let an=await dc.connect(owner).readAnimals(j);
console.log("ID :"+j+"//"+
             "member :"+mem+"//"+
             "color :"+col+"//"+
             "luck  :"+luck+"//"+
             "animal :"+an+"----- END-----")



}

let nrolls=await dc.connect(owner).readDebug();
console.log("the number of rolls was "+nrolls)




}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

