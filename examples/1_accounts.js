// const { ethers } = require("ethers");

// const INFURA_ID = ''
// const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

// const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e'

// const main = async () => {
//     const balance = await provider.getBalance(address)
//     console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
// }

// main()


const { ethers } = require("ethers");
require('dotenv').config();

const INFURA_ID = process.env.INFURA_ID
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const address = '0x8943053aBde70E88e4512108bAed73864450bd15'

const main = async () => {
    const balance = await provider.getBalance(`${address}`);
    console.log(`\nETH balance in ${address} is : ${ethers.utils.formatEther(balance)} ETH`)
}

main()