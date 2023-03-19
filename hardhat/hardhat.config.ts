import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: process.env.REACT_APP_ALCHEMY_ENDPOINT,
      accounts: [process.env.REACT_APP_PRIVATE_KEY!]
    },
  },
  etherscan: {
    apiKey: process.env.REACT_APP_API_KEY
  }
};

export default config;
