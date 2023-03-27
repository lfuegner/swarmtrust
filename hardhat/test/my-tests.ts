import { expect } from "chai";
import { ethers } from "hardhat";

describe("MyNFT", function () {
    it("Should mint and transfer an NFT to someone", async function () {
        const Poap = await ethers.getContractFactory("Poap");
        const poap = await Poap.deploy();
        await poap.deployed();

        const recipient = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

        
        
    })
})