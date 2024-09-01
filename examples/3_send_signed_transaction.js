const {ethers} = require('ethers');
require('dotenv').config();

const INFURA_ID = process.env.INFURA_ID

const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`);

const account1 = '0xDA0a8D405b668ACcf49b418aa4721a81A8f4faCD';
const account2 = '0x1F1e15634BaD10E1105A0CA9cbBA26E6f986fB28';

const privateKey1 = '';
const wallet = new ethers.Wallet(privateKey1, provider);

const main = async() => {

    const senderBalanceBefore = await provider.getBalance(account1);
    const recieverBalanceBefore = await provider.getBalance(account2);

     console.log(`\nSender Balance before : ${ethers.utils.formatEther(senderBalanceBefore)}`)
     console.log(`\nReceiver Balance before : ${ethers.utils.formatEther(recieverBalanceBefore)}`)

    const tx = await wallet.sendTransaction({
        to: account2,
        value: ethers.utils.parseEther("0.005")
    });

    await tx.wait()
    console.log(tx)

    const senderBalanceAfter = await provider.getBalance(account1);
    const recieverBalanceAfter = await provider.getBalance(account2);

     console.log(`\nSender Balance After : ${ethers.utils.formatEther(senderBalanceAfter)}`)
     console.log(`\nReceiver Balance After : ${ethers.utils.formatEther(recieverBalanceAfter)}`)

}

main()
