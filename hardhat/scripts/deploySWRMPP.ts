import { ethers } from "hardhat";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = ethers.utils.parseEther("0.001");

  const SWRMPP = await ethers.getContractFactory("SWRMPP");
  const swrmpp = await SWRMPP.deploy(/* unlockTime, { value: lockedAmount } */);

  await swrmpp.deployed();

  console.log(
    `Poap with ${ethers.utils.formatEther(lockedAmount)}ETH and unlock timestamp ${unlockTime} deployed to ${swrmpp.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
