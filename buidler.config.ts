import { usePlugin } from "@nomiclabs/buidler/config";

usePlugin("@nomiclabs/buidler-truffle5");
usePlugin("solidity-coverage");

module.exports = {
  solc: {
    version: "0.5.16",
    optimizer: {
      enabled: true,
      runs: 1000000
    },
  },
  paths:{
    tests: "src"
  }
};
