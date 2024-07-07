const hre = require("hardhat");

async function main() {
  console.log("Starting deployment...");
  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  console.log("Contract factory obtained...");
  const nftMarketplace = await NFTMarketplace.deploy();
  console.log("Contract deployment transaction sent...");

  await nftMarketplace.waitForDeployment();
  console.log("Contract deployed and confirmed!");
  // 打印 nftMarketplace 对象以调试
  console.log("nftMarketplace object:", JSON.stringify(nftMarketplace, null, 2));

  // 检查和打印 address 属性
  const contractAddress = nftMarketplace.address || nftMarketplace.target || nftMarketplace.options.address;
  console.log("Retrieved contract address:", contractAddress);
  // //TRANSFER FUNDS
  // const TransferFunds = await hre.ethers.getContractFactory("TransferFunds");
  // const transferFunds = await TransferFunds.deploy();

  // await transferFunds.deployed();

  // console.log(` deployed contract Address ${nftMarketplace.address}`);
  // console.log(` deployed contract Address ${transferFunds.address}`);

  if (contractAddress) {
    console.log(`Deployed contract Address: ${contractAddress}`);
  } else {
    console.error("Failed to retrieve the deployed contract address.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
