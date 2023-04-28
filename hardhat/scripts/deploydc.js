// scripts/deploy.js
async function main () {
  // We get the contract to deploy
  const DC = await ethers.getContractFactory('SWRMPPOC');
  console.log('Deploying DC...');
  const dc = await DC.deploy();
  await dc.deployed();
  console.log('DC deployed to:', dc.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });