// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { util } from "chai";
import hre from "hardhat";
// eslint-disable-next-line node/no-missing-import
// import EtherGame from "./exercices/EtherGame";

const ethers = hre.ethers;

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run("compile");
  //
  // const provider = new ethers.providers.JsonRpcProvider();
  // const person0 = provider.getSigner(0);
  // const person1 = provider.getSigner(1);
  // const person2 = provider.getSigner(2);

  // const DelegateContract = await ethers.getContractFactory("DelegateContract");
  // const dc = await DelegateContract.deploy();
  // await dc.deployed();

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
