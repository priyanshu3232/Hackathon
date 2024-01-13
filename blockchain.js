const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
    "https://mainnet.infura.io/v3/f5d227f2b23e4879a58437c48fc20a61"
);

const querryBlockchain= async()=>{
    const block = await provider.getBlockNumber();
    console.log("Current Block Number:", block);

};
querryBlockchain();
