import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deal";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      chainId: Number(process.env.CHAIN_ID),
      forking: {
        url: process.env.RPC_ENDPOINT!,
      },
      // gas: 1800000,
      allowUnlimitedContractSize: true,
    },
    fork: {
      url: "http://127.0.0.1:8545",
    },
  },
  solidity: "0.8.19",
};

export default config;
