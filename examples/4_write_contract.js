// const { ethers } = require("ethers");

// const INFURA_ID = ''
// const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`)

// const account1 = '' // Your account address 1
// const account2 = '' // Your account address 2

// const privateKey1 = '' // Private key of account 1
// const wallet = new ethers.Wallet(privateKey1, provider)

// const ERC20_ABI = [
//     "function balanceOf(address) view returns (uint)",
//     "function transfer(address to, uint amount) returns (bool)",
// ];

// const address = ''
// const contract = new ethers.Contract(address, ERC20_ABI, provider)

// const main = async () => {
//     const balance = await contract.balanceOf(account1)

//     console.log(`\nReading from ${address}\n`)
//     console.log(`Balance of sender: ${balance}\n`)

//     const contractWithWallet = contract.connect(wallet)

//     const tx = await contractWithWallet.transfer(account2, balance)
//     await tx.wait()

//     console.log(tx)

//     const balanceOfSender = await contract.balanceOf(account1)
//     const balanceOfReciever = await contract.balanceOf(account2)

//     console.log(`\nBalance of sender: ${balanceOfSender}`)
//     console.log(`Balance of reciever: ${balanceOfReciever}\n`)
// }

// main()


const {ethers} = require('ethers');
require('dotenv').config();

const INFURA_ID = process.env.INFURA_ID

const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`);

const account1 = '0xDA0a8D405b668ACcf49b418aa4721a81A8f4faCD';
const account2 = '0x1F1e15634BaD10E1105A0CA9cbBA26E6f986fB28';

const privateKey1 = '';
const wallet = ethers.Wallet(privateKey1, provider)

const address = ''

const ERC20_ABI = [
        "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
];

const contract = new ethers.Contract( address, ERC20_ABI, provider)

const main = async() => {

    const balance =  await wallet.balanceOf(account1)

     console.log(`\nReading from ${address}`)
     console.log(`\nSender before : ${balance}`)

    const contractWithWallet = contract.connect(wallet)
    const tx = await contractWithWallet.transfer(account2, balance )

    await tx.wait()
    console.log(tx)

    const senderBalanceAfter = await contract.balanceOf(account1)
    const recieverBalanceAfter = await contract.balanceOf(account2);

     console.log(`\nSender Balance After : ${ethers.utils.formatEther(senderBalanceAfter)}`)
     console.log(`\nReceiver Balance After : ${ethers.utils.formatEther(recieverBalanceAfter)}`)

}

main()
