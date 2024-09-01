import { createPublicClient, http, formatEther, getContract } from 'viem'
import { mainnet } from 'viem/chains'
import { config } from 'dotenv'

config()

const INFURA_ID = ''

const account_address = '0x8943053aBde70E88e4512108bAed73864450bd15'

const client = createPublicClient({ 
    chain: mainnet, 
    transport: http(`https://mainnet.infura.io/v3/${INFURA_ID}`), 
  }) 

const contract_address ='0x6B175474E89094C44Da98b954EedeAC495271d0F'; //dai smartcontract


const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
    
] as const;

const contract = getContract({
  address: contract_address,
  abi : ERC20_ABI,
  client: { 
    public: client, 
  } })

const main = async() =>{

  //Get Balance of an account
  // const balance = await client.getBalance({ 
  //   address: account_address,
  //  })
  //  console.log(`\nEth Balance in ${account_address} is ${formatEther(balance)} ETH `)

   //reading smartcontracts
   const name = await contract.read.name()
    // const symbol = await contract.read.symbol();
    // const totalSupply = await contract.read.totalSupply();
    // const balance2 = await contract.read.balanceOf('0x6c6Bc977E13Df9b0de53b251522280BB72383700')

    console.log(`\nReading from ${contract_address}\n`)
    console.log(`Name: ${name}`)
    // console.log(`Symbol: ${symbol}`)
    // console.log(`Total Supply: ${totalSupply}\n`)
    // console.log(`Balance Returned: ${formatEther(balance2)} ETH`)


}
 
main()