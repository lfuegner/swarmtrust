import { ethers } from 'hardhat'
// interacting with the smart contract works just like doploying with the smart contract worked. it takes the account defined in hardhatconfig.js and interacts through this account. 
async function main () { // boiletplate function 


const address = '0x071586BA1b380B00B793Cc336fe01106B0BFbE6D';
const DC = await ethers.getContractFactory('SWRMPPOC');
const dc = await DC.attach(address);

const [owner, addr1, addr2, hacker] = await ethers.getSigners(); // Hardhat only code: Array of adresses are loaded. used by dc.connect

await dc.connect(owner).mintOwner(3);
await dc.connect(owner).flipMintPaused()


for (var i=0;i<200;i++){
    console.log("minting ID :"+i)
    var x = await dc.connect(owner).rand()
    console.log(x)
}

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

